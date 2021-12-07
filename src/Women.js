import React from 'react'
import "./Women.css"
import { useState, useEffect } from "react";
import { db} from './Firebase'
import firebase from 'firebase';

function Women() {
  const [products, setProducts] = useState([]);
  const usersCollectionRef = db.collection("Products").where("ForeignKey", "==", "89NpwkrW1UAHmmwuAUTk")

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
      <h2>Women shoes are coming soon!</h2>
        <img className="products-ban" src={"https://www.jetspeedmelb.com.au/media/wysiwyg/home/banner1-ad.jpg"} />
    </div>

    <div className="container">
      {products.map(product =>
        <div className="card">
        <img className="prod1"src={product.Image.stringValue}/>
        <h3 className="price1">{product.Brand.stringValue}</h3>
        <h3 className="price1">{product.Model.stringValue}</h3>
        <h3 className="price1">{product.Price.stringValue}</h3>
        {/*<p>{product.Info.stringValue}</p>*/}

        </div>
      )}
      </div>
      <footer>
        <p>&copy; 2021 FitLand.com</p>
      </footer>
      </>
  )
}

export default Women;
