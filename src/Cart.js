import React from 'react'

function Cart() {


  let cartValue = JSON.parse(sessionStorage.getItem('cart'))
  return (
    <>
    <div>Cart coming soon!
    {cartValue.map(product =>
      <div >
      <img  src={product.Image.stringValue}/>
      <h3 >{product.Brand.stringValue}</h3>
      <h3 >{product.Model.stringValue}</h3>
      <h3 >{product.Price.stringValue}</h3>
      {/*<p>{product.Info.stringValue}</p>*/}
        <h3 >{product.Quantity}</h3>
      </div>
    )}
    </div>
    </>
  )
}

export default Cart;
