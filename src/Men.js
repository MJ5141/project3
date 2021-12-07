import React from 'react'
import "./Men.css"
import { useState, useEffect } from "react";
import { db} from './Firebase'
import firebase from 'firebase/app';

function Men() {
  const [products, setProducts] = useState([]);
  const usersCollectionRef =  db.collection("Products").where("ForeignKey", "==", "AzbEUliInDStXkimImwr")

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
      <h2>Men shoes are coming shortly! </h2>
      <img className="products-ban" src={"https://i8.amplience.net/i/jpl/desktop-middle-banner-1704x740-9-dec9c2486d57e1a1a8fddf8294f9bb92"} />
    </div>


    <div className="container">
      {products.map(product =>
        <div className="card">
        <img className="prod1" src={product.Image.stringValue}/>
        <h3 className="price1">{product.Brand.stringValue}</h3>
        <h3 className="price1">{product.Model.stringValue}</h3>
        <h3 className="price1">{product.Price.stringValue}</h3>
        {/*<p>{product.Info.stringValue}</p>*/}
        <button className="cartBtn"> Add To Cart 🛒 </button>
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
