import React, {Component} from 'react';
import {Route, BrowserRouter, HashRouter,Routes} from 'react-router-dom';
import CV from './../screens/cv/cv.js'
import Content1 from './../screens/part1/content1.js'
import Content2 from './../screens/part1/content2.js'
import Content3 from './../screens/part1/content3.js'
import Content4 from './../screens/part1/content4.js'
import Content5 from './../screens/part1/more.js'


export default class RouteMap extends Component{
 
  render(){
  return(
    <BrowserRouter basename={window.location.pathname || '*'} >
      <Routes>
        <Route path='/' element={<CV/>} basename={window.location.pathname || '/'}/>
        <Route path='/content1' element={<Content1/>} basename={window.location.pathname || '/content1'}/>
        <Route path='/content2' element={<Content2/>} basename={window.location.pathname || '/content2'}/>
        <Route path='/content3' element={<Content3/>} basename={window.location.pathname || '/content3'}/>
        <Route path='/content4' element={<Content4/>} basename={window.location.pathname || '/content4'}/>
        <Route path='/more' element={<Content5/>} basename={window.location.pathname || '/more'}/>
      
      </Routes>
    </BrowserRouter>
  );
 }
}