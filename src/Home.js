import React from 'react'
import "./Home.css"
import { useHistory } from "react-router-dom";

const Home = () => {

  let history = useHistory();

  return (
    <div>
      <h3> Free delivery over $50. Hurry up!</h3>

      <img onClick={() => { history.push("/women");}} className="main-slider" src={"https://cdn.shopify.com/s/files/1/2636/5824/articles/banner_betrue_web_ok_4287x.jpg?v=1592843505"} />

      <div className="cate-btn">
      <button onClick={() => { history.push("/men");}}> Shop Men  </button>
      <button onClick={() => { history.push("/women");}}> Shop Women  </button>
      <button onClick={() => { history.push("/kids");}}> Shop Kids </button>
      </div>
        <div className="categ">

          <img onClick={() => { history.push("/men");}} className="cat" src={"https://www.fortressofsolitude.co.za/wp-content/uploads/2020/10/PUMA-LQDCELL-Method-Lewis-Hamilton-1.jpg"} />

          <img onClick={() => { history.push("/women");}} className="cat" src={"https://www.puma-catchup.com/wp-content/uploads/2020/06/Header_Winnie_Harlow.jpg"} />

          <img onClick={() => { history.push("/kids");}} className="cat" src={"https://au.puma.com/media/contentmanager/content/boys-sidebyside_1.jpg"} />

        </div>

      <img onClick={() => { history.push("/accessories");}} className="main-slider" src={"https://images-eu.ssl-images-amazon.com/images/G/31/img19/shoes/March/SPW/Puma/menwmn-combinedsale-banner._CB467757019_.jpg"} />
      <h2> </h2>
      <img onClick={() => { history.push("/accessories");}} className="main-slider" src={"https://i.pinimg.com/originals/8d/b6/cf/8db6cfde93cd632d131058eb8cf4e14c.png"} />

      <footer>
        <p>&copy; 2021 The Iconic.com</p>
      </footer>

    </div>
  )
}

export default Home;
