import React from "react";
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Parcel from 'single-spa-react/parcel'
export default function Root(props) {
  return <BrowserRouter basename="/todos">
    <Parcel config={System.import('@study/navbar')}></Parcel>
  <div>
    <Link to="/home">home</Link>
    <Link to="/about">about</Link>
  </div>
    <switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/">
          <Redirect to="/home"></Redirect>
        </Route>
    </switch>
  </BrowserRouter>;
}
