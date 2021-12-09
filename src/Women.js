import React from 'react'
import "./Women.css"
import { useState, useEffect } from "react";
import { db} from './Firebase'
import firebase from 'firebase';
import { useHistory } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


function Women() {

  let history = useHistory();
  const [products, setProducts] = useState([]);
  const usersCollectionRef = db.collection("Products").where("ForeignKey", "==", "89NpwkrW1UAHmmwuAUTk")

  const notify = ()=>{
   toast.success('Item added to the cart 🥳')
  }

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

        <img className="products-ban" src={"https://www.jetspeedmelb.com.au/media/wysiwyg/home/banner1-ad.jpg"} />
    </div>

    {products.map(product =>
    <div class="flex grid-flow-row grid-cols-4 bg-gray-100 mr-15">
      <div class="flex-none w-48 relative mr-15">
        <img src={product.Image.stringValue} alt="" class="rounded-tl-lg rounded-tr-lg" />
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <h1 class="flex-auto text-lg font-semibold text-gray-900">
            {product.Model.stringValue}
          </h1>
          <div class="text-lg font-semibold text-gray-500">
            $ {product.Price.integerValue}
          </div>
          <div class="w-full flex-none text-sm font-medium text-gray-700 mt-2">
            {product.Brand.stringValue}
          </div>
        </div>
        <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-gray-200">
          <div class="space-x-2 flex text-sm">
            <p>{product.Info.stringValue}</p>
          </div>
        </div>
        <div class="flex space-x-4 mb-6 text-sm font-medium">
          <div class="flex-auto flex space-x-4">
            <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
              <button  onClick={() => { addToCart(product); notify();}}> Add To Cart 🛒 </button>
            </button>
          </div>
        </div>
        <p class="text-sm text-gray-700">
          Free shipping all over the Australia.
        </p>
      </form>
    </div>
    )}

      </>
  )
}

export default Women;
