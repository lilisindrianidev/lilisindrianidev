import React, {Component} from 'react';
import {Route, BrowserRouter, HashRouter,Routes} from 'react-router-dom';
import Page from './../screens/page/page.js'



export default class RouteMap extends Component{
 
  render(){
  return(
    <BrowserRouter basename={window.location.pathname || '*'} >
      <Routes>
        <Route path='/' element={<Page/>} basename={window.location.pathname || '/'}/>
        
      </Routes>
    </BrowserRouter>
  );
 }
}