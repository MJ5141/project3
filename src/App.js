import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Register from "./Register";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar";
import Men from "./Men";




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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
