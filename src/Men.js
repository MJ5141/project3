import React from 'react'
import "./Men.css"
import { useState, useEffect } from "react";
import { db} from './Firebase'
import firebase from 'firebase/app';
import { useHistory } from "react-router-dom";

function Men() {

  let history = useHistory();
  const [products, setProducts] = useState([]);

  const usersCollectionRef =  db.collection("Products").where("ForeignKey", "==", "AzbEUliInDStXkimImwr")

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
      <p className="top-line1"> Free delivery over $50. Hurry up!</p>
      <img className="products-ban" src={"https://i8.amplience.net/i/jpl/desktop-middle-banner-1704x740-9-dec9c2486d57e1a1a8fddf8294f9bb92"} />
    </div>


    <div className="container">
      {products.map(product =>
        <div className="card">
        <img className="prod1" src={product.Image.stringValue}/>
        <h3 className="price1"> {product.Brand.stringValue}</h3>
        <h3 className="price1"> {product.Model.stringValue}</h3>
        <h3 className="price1"> $ {product.Price.integerValue}</h3>
        {/*<p>{product.Info.stringValue}</p>*/}
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
export default Men;
