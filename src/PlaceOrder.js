import React from 'react'
import "./PlaceOrder.css"
import { useHistory } from "react-router-dom";


const PlaceOrder = (props) => {

console.log(props.location.state.total);
let history = useHistory();

  return (
    <div class="bg-white p-16 rounded shadow-2xl w-2/3" className="order-form" >
      <h1 className="order-form-head"> Place order 🛍</h1>
      <form class="space-y-5">
      <label class="block mb-1 font-bold text-gray-500" htmlFor="name">Name</label>
                  <input type="text" className='form-control' class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required
                       />
                  <br />
                  <label class="block mb-1 font-bold text-gray-500" htmlFor="email">Email</label>
                  <input type="email" className='form-control' class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required
                       />
                  <br />
                  <label class="block mb-1 font-bold text-gray-500" htmlFor="Cell No">Cell No</label>
                  <input type="text" className='form-control' class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required
                       placeholder='044-009-009' />
                  <br />
                  <label class="block mb-1 font-bold text-gray-500" htmlFor="Delivery Address">Delivery Address</label>
                  <input type="text" className='form-control' class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required
                     />
                  <br />
                  <label class="block mb-1 font-bold text-gray-500" htmlFor="Price To Pay"> Pin Code</label>
                  <input type="text" className='form-control' class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required
                       />
                  <br />
                  <label class="block mb-1 font-bold text-gray-500" htmlFor="Total No of Products">Total amount due</label>
                  <input type="text" className='form-control' class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" required value={"$ " + props.location.state.total} disabled
                        />

                  <br />
                  <button class="block w-full bg-green-400 hover:bg-green-300 p-4 rounded text-green-900 hover:text-green-800 transition duration-300" onClick={() => { history.push("/final"); }}>Place Order</button>

      </form>
    </div>
  )
}

export default PlaceOrder;
