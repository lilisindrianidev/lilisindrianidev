import React, { Component } from "react";
import '../assets/scss/page.scss';
import {Link, BrowserRouter, Route, Redirect} from 'react-router-dom';
import logo2 from '../assets/images/logo.png';
import white from '../assets/images/logo_dark.png';
import wb from '../assets/images/bur.png';


class hamburger extends Component{
  constructor(props){
    super(props)
    this.state = {
      burger:false
    }
  }
  hamburger = () => {
    if(this.state.burger === true){
      this.setState({burger:false})
    }else{
      this.setState({burger:true})
    }
  }
  render(){
    return(
      <div >
        <>
         {this.state.burger== false && 
        //  <div className="menu">
           <div className="defined">
            <div className="before">
              <a className="cover_logo_white">
                <img src={white} className='logo_white'/> 
              </a>
              
              <div className="cover_burger_white">
                <img src={wb} className='burger_white'  onClick={this.hamburger}/>
              </div>
            </div>
           </div> 
          //  </div> 
         }
        </>
        
        {this.state.burger &&
        
        <div className="defined2">
          <div className="before2">
            <a className="cover_logo_white2">
              <img src={logo2} className='logo_white2'/> 
            </a>
            
            <div className="cover_burger_white2">
              <img src={wb} className='burger_white2'  onClick={this.hamburger}/>
            </div>
          </div>
          <div className="menu_burger">
            <ul className="left_menu">
              <li className="item_burger1">
                <a  className="link_burger">Education</a>
              </li>
              <li className="item_burger1">
                <a  className="link_burger">Skills</a>
              </li>
              <li className="item_burger1">
                <a  className="link_burger">Contact</a>
              </li>
              <li className="item_burger1">
                <a  className="link_burger">About Me</a>
              </li>
              <li className="item_burger1">
                <a  className="link_burger">Home</a>
              </li>
            </ul>
          </div>
        </div>
         
      
            /* <div className="cover_burger">
              <a className="cover_logo">
                <img src={logo2}
                className="logo2"/>
              </a>         
              <div className='burger' onClick={this.hamburger}>
                <div className='burger_background'>
                  
                  <div className='background_menu'>
                    <div>
                      <a className="menuItem" href="#home">Home</a>
                    </div>
                    <div>
                      <a className="menuItem" href="#education">Education</a>
                    </div>
                    
                    <div>
                      <a className="menuItem" href="#skills">Skills</a>
                    </div>
                  
                    <div>
                      <a className="menuItem" href="#contact">Contact</a>
                    </div>
                    
                    <div>
                      <a className="menuItem" href="#aboutme">About Me</a>
                    </div>
                    
                  
                    
                
                  </div>  
                  
        
        
        
                </div>  
              </div>
                
            </div>  */
    
      } 
        
        

        
       
        
      </div>

        


    );
  }
  
}
export default hamburger;
 