import React, {Component} from 'react';
import {Route, BrowserRouter, HashRouter,Routes} from 'react-router-dom';
import CV from './../screens/cv/cv.js'
export default class RouteMap extends Component{
 render(){
  return(
    <BrowserRouter  basename={window.location.pathname || ''}>
      <Routes>
        <Route path='/' element={<CV/>}/>
      
      </Routes>
    </BrowserRouter>
  );
 }
}