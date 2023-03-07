import { Component } from "react";
import './../assets/scss/page.scss'
import {Link} from 'react-router-dom'
import Logo from './../assets/images/logo_dark.svg';
import Burger from './burger.js';

export default class Menu extends Component{
	render(){
    return(
      <div>
        <div id='back' className="menu">
          {/* <img src={Logo} className="logo"/> */}
          <div className="logo"></div>
          <a href="#education" className="link">Education</a>
          <a href="#skills" className="link"> Skills</a>
          <a href="#contact" className="link">Contact</a>
          <a href="#aboutme" className="link">About Me</a>
         
          <div className="second_link">
            <a href="#home" className="link2"> Home</a>
            <a href='#dnate' className="donate">❤︎ Donate</a>
          </div>
          <Burger/>
        </div>
        
      </div>
      
    
    );
	}
} 