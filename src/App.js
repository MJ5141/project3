import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from "./Register";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Accessories from "./Accessories";
import Cart from "./Cart";




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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
