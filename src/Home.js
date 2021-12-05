import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <div>
      <h3> Free delivery over $50. Hurry up!</h3>

      <img className="main-slider" src={"https://images-eu.ssl-images-amazon.com/images/G/31/img19/shoes/March/SPW/Puma/menwmn-combinedsale-banner._CB467757019_.jpg"} />

      <div className="cate-btn">
      <button> Shop Men 🙋🏻‍♂️  </button>
      <button> Shop Women 🙋🏻 </button>
      <button> Shop Kids 👶🏻 </button>
      </div>
        <div className="categ">

          <img className="cat" src={"https://www.fortressofsolitude.co.za/wp-content/uploads/2020/10/PUMA-LQDCELL-Method-Lewis-Hamilton-1.jpg"} />

          <img className="cat" src={"https://www.puma-catchup.com/wp-content/uploads/2020/06/Header_Winnie_Harlow.jpg"} />

          <img className="cat" src={"https://au.puma.com/media/contentmanager/content/boys-sidebyside_1.jpg"} />

        </div>

      <img className="main-slider" src={"https://cdn.shopify.com/s/files/1/2636/5824/articles/banner_betrue_web_ok_4287x.jpg?v=1592843505"} />
      <h2> </h2>
      <img className="main-slider" src={"https://i.pinimg.com/originals/8d/b6/cf/8db6cfde93cd632d131058eb8cf4e14c.png"} />

      <footer>
        <p>&copy; 2021 The Iconic.com</p>
      </footer>

    </div>
  )
}

export default Home;
