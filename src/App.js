import logo from './logo.svg';
import './App.css';
import Review from './pages/review/review';
import Product from './pages/product/product';
import Nav from './pages/nav';
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Home from './pages/home/home';
import Session from './pages/session/session';
import React from 'react';
import OrderPlace from './pages/order/order';
function App() {
  return (
    <BrowserRouter>
    <Nav/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/booksession">
            <Session/>
          </Route>
          <Route path="/order">
            <OrderPlace/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
