import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from "./Register";
import Home from "./Home";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Accessories from "./Accessories";
import Cart from "./Cart";
import PlaceOrder from "./PlaceOrder";
import Final from "./Final";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()




function App() {
  return (
    <div className="App">
     <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/kids" component={Kids} />
          <Route exact path="/accessories" component={Accessories} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/placeorder" component={PlaceOrder} />
          <Route exact path="/final" component={Final} />
        </Switch>
      </Router>
    <Footer />
    </div>
  );
}

export default App;
