import React, {Component} from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import CV from './../screens/cv/cv.js'
export default class RouteMap extends Component{
 render(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CV/>}/>
      
      </Routes>
    </BrowserRouter>
  );
 }
}