import { Component } from "react";
import './../assets/scss/page.scss'
import {Link} from 'react-router-dom'
//import Logo from './../assets/images/logo_dark.svg';
import Burger from './burger.js';
import logo from './../assets/images/logo.png'

export default class Menu2 extends Component{
	render(){
    return(
      <div>
        <div id='back' className="menu2">
          {/* <div className="defined"></div> */}
            {/* <img src={Logo} className="logo"/> */}
            <a className="cover_logo2">
              <img src={logo} className="logo2"/>
            </a>
            <a href="#education" className="link2">Education</a>
            <a href="#skills" className="link2"> Skills</a>
            <a href="#contact" className="link2">Contact</a>
            <a href="#aboutme" className="link2">About Me</a>
          
            <div className="second_link2">
              <a href="#home" className="link22"> Home</a>
              <a href='#dnate' className="donate2">❤︎ Donate</a>
            </div>
            <Burger/>
          
        </div>
        
      </div>
      
    
    );
	}
} 