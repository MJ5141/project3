import React from 'react'
import "./Accessories.css"
import { useState, useEffect } from "react";
import { db} from './Firebase'
import firebase from 'firebase';



function Accessories() {
  const [products, setProducts] = useState([]);
  const usersCollectionRef = db.collection("Products").where("ForeignKey", "==", "5ZwFOv8LPQTO1m8mS24v")

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
