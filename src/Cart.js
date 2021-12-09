import React from 'react';
import "./Cart.css"
import { useState } from 'react';
import { useHistory } from "react-router-dom";



const Cart = () => {
  let history = useHistory();

  let cartValue = JSON.parse(sessionStorage.getItem('cart'))
  const [productList, setProductList] = useState(cartValue);
  const [total, setTotal] = useState(calculateTotal(productList));
  const [totalItems, setTotalItems] = useState(calculateItems(productList));

  function updateProductList(id, type) {
    let tempProductList = JSON.parse(JSON.stringify(productList))
    let spliceIndex
    tempProductList.map((product, index) =>

    {if (index === id) {
      if ( type === "addQuantity") {
        product.Quantity += 1
      } else {
        product.Quantity -= 1
        if ( product.Quantity == 0) {
          spliceIndex = index
        }
      }
    }}
  )

  if ( spliceIndex ) {
    tempProductList.splice(spliceIndex,1)
  }

  let total = calculateTotal(tempProductList)
  setTotal(total)

  let totalItems = calculateItems(tempProductList)
  setTotalItems(totalItems)
  setProductList(tempProductList);
  sessionStorage.setItem('cart', JSON.stringify(tempProductList));


}
console.log(total);


function calculateTotal (productList) {
  let total= 0

  if (productList === null) {
      return
  } else {
  productList.map(product => {
    let productPrice = product.Price.integerValue * product.Quantity
    total += productPrice
  })
  return total;
}
}

function calculateItems (productList) {
  let totalItems= 0

  if (productList === null) {
      return <p> Nothing in cart</p>
  } else {
  productList.map(product => {
  totalItems += product.Quantity
  })
  return totalItems;
}
}

{if (productList === null) {
    return <p> Nothing in cart</p>
} else {
return (
  <>
  <div>
  <h2 className="crt-tit"> Welcome to your Cart 🛒</h2>
  </div>

  <div className="container-2">
  {console.log(productList)}
  {productList.map((product, index) =>
    <div className="crt-viw">
    <img className="crt-img" src={product.Image.stringValue}/>
    <h3 className="crt-inf crt-brand" >{product.Brand.stringValue}</h3>
    <h3 className="crt-inf crt-model">{product.Model.stringValue}</h3>
    <h3 className="crt-inf crt-price">$ {product.Price.integerValue}</h3>
    {/*<p>{product.Info.stringValue}</p>*/}

    <button className="crt-add1" onClick={() => { updateProductList(index, "addQuantity") }}> + </button>

    <h3 className="crt-inf crt-price">{ product.Quantity }</h3>
    <button className="crt-add2" onClick={() => { updateProductList(index, "subQuantity") }}> - </button>
    </div>
  )}
  <div className="cart-summary">
  <h2 className="order-form-head"> Cart Summary </h2>
  <p class="block mb-1 font-bold text-gray-500" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" className="lmn">Total no. of items : {totalItems}</p>
  <p class="block mb-1 font-bold text-gray-500" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
  className="lmn">Total amount : $ {total} </p>
  <p> *We are working on card payments, service will be available shortly. Sorry for the Inconvenience.* </p>
  <button class="block w-full bg-green-400 hover:bg-green-300 p-4 rounded text-green-900 hover:text-green-800 transition duration-300" onClick={() => { history.push({pathname:"/placeorder", state:{total: total}});}}  > Place order </button>
  </div>

  </div>


  </>
)
}
}
}

export default Cart;
