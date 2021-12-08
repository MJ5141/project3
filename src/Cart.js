import React from 'react';
import "./Cart.css"
import { useState } from 'react';

const Cart = () => {

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

function calculateTotal (productList) {
  let total= 0

  productList.map(product => {
    let productPrice = product.Price.integerValue * product.Quantity
    total += productPrice
  })
  return total;

}

function calculateItems (productList) {
  let totalItems= 0

  productList.map(product => {
  totalItems += product.Quantity
  })
  return totalItems;
}

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
  <h2> Cart Summary </h2>
  <p>Total no. of items : {totalItems}</p>
  <p>Total amount : $ {total}</p>
  <button> Proceed to payment </button>
  </div>

  </div>

  <footer>
  <p>&copy; 2021 FitLand.com</p>
  </footer>
  </>
)
}

export default Cart;
