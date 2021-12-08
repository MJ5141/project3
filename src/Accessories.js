import React from 'react'
import "./Accessories.css"
import { useState, useEffect } from "react";
import { db} from './Firebase'
import firebase from 'firebase';
import { useHistory } from "react-router-dom";




function Accessories() {

  let history = useHistory();

  const [products, setProducts] = useState([]);
  const usersCollectionRef = db.collection("Products").where("ForeignKey", "==", "5ZwFOv8LPQTO1m8mS24v")

  function addToCart(product) {

    if (sessionStorage.getItem('cart')) {
      let cartValue = JSON.parse(sessionStorage.getItem('cart'))
        let product_exists = false
          cartValue.map(value => {
            if (value.Model.stringValue == product.Model.stringValue){
              value.Quantity += 1
              product_exists = true
            }
          })
            if (!product_exists ) {
              product.Quantity= 1;
              cartValue.push (product)
            }
            sessionStorage.setItem('cart', JSON.stringify(cartValue));
            } else {
              product.Quantity= 1;
              let productList = []
              productList.push (product)
              sessionStorage.setItem('cart', JSON.stringify(productList));
    }
  };

  useEffect(() => {
    usersCollectionRef.get().then(s => {
      let productArray = []

      s.forEach( singleProduct => {
        const product = singleProduct._delegate._document.data.value.mapValue.fields
        if(product != undefined ) {
            productArray.push(product)
          }
      })
      setProducts( productArray );
    })
  }, []);



  return (
    <>
    <div>
      <h2>The wait is over now, It's coming this December!</h2>
        <img className="products-ban" src={"https://cdn.shopify.com/s/files/1/0536/8676/3698/files/47_Brand_Webshop_Banner_1200x.jpg?v=1636704153"} />
    </div>

    <div className="container">
      {products.map(product =>
        <div className="card">
        <img className="prod1" src={product.Image.stringValue}/>
        <h3 className="price1">{product.Brand.stringValue}</h3>
        <h3 className="price1">{product.Model.stringValue}</h3>
        <h3 className="price1">{product.Price.stringValue}</h3>
        {/*<h3>{product.Info.stringValue}</h3>*/}
        <button className="men-cart-btn" onClick={() => addToCart(product)}> Add To Cart 🛒 </button>
        </div>
      )}
    </div>
    <footer>
      <p>&copy; 2021 FitLand.com</p>
    </footer>
    </>
  )
}

export default Accessories;
