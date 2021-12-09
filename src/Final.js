import React from 'react'
import "./Final.css"
import { useHistory } from "react-router-dom";


const Final = () => {

  let history = useHistory();
  return (
    <div className="final-centre">
      <h1> Congratulations 🥳 </h1>
       <br />
      <p> Your order 🛒 has been placed succesfully 💯 </p>
       <br />
      <button onClick={() => { history.push("/home");}} className="final-btn"> Continue Shopping </button>
    </div>
  )
}

export default Final;
