import React from 'react'
import "./Home.css"
import { useHistory } from "react-router-dom";

const Home = () => {

  let history = useHistory();

  return (
    <div>
      <p className="top-line1"> Free delivery over $50. Hurry up!</p>

      <img onClick={() => { history.push("/women");}} className="home-slider1" src={"https://cdn.shopify.com/s/files/1/2636/5824/articles/banner_betrue_web_ok_4287x.jpg?v=1592843505"} />

      <div className="cate-btn">
      <button className="home-btn"onClick={() => { history.push("/men");}}> Shop Men  </button>
      <button className="home-btn"onClick={() => { history.push("/women");}}> Shop Women  </button>
      <button className="home-btn"onClick={() => { history.push("/kids");}}> Shop Kids </button>
      </div>
        <div className="categ">

          <img onClick={() => { history.push("/men");}} className="cat" src={"https://www.fortressofsolitude.co.za/wp-content/uploads/2020/10/PUMA-LQDCELL-Method-Lewis-Hamilton-1.jpg"} />

          <img onClick={() => { history.push("/women");}} className="cat" src={"https://www.puma-catchup.com/wp-content/uploads/2020/06/Header_Winnie_Harlow.jpg"} />

          <img onClick={() => { history.push("/kids");}} className="cat" src={"https://au.puma.com/media/contentmanager/content/boys-sidebyside_1.jpg"} />

        </div>

      <p className="top-line2"> Shop latest styles from Puma!</p>

      <img onClick={() => { history.push("/accessories");}} className="home-slider2" src={"https://img.freepik.com/free-vector/black-friday-banner-template_19426-662.jpg?size=626&ext=jpg"} />

      <p className="top-line2"> Fit-bit Versa-3 is now available!</p>

      <img onClick={() => { history.push("/accessories");}} className="home-slider2" src={"https://i.pinimg.com/originals/8d/b6/cf/8db6cfde93cd632d131058eb8cf4e14c.png"} />

      <footer>
        <p>&copy; 2021 The Iconic.com</p>
      </footer>

    </div>
  )
}

export default Home;
