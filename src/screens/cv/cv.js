import {Component } from 'react'
import './../../assets/scss/page.scss'
import  Menu from './../../components/menu.js';
import Education from './../category/education.js';
import Contact from './../category/contact.js';
import Skills from './../category/skills.js';
import Aboutme from './../category/aboutme.js';
import my from './../../assets/images/lilis.png'
import Up from './../../assets/images/up.png';

class Cv extends Component{
render(){
  return(
    <div className='CV'>
     
      <div className='first'>
        <Menu/>
        <div className='container'>
          <div className='cover_font'>
            <div className='font1'>Hi, i'm Lilis</div>
            <div className='font2'> I am React Js developer</div> 
          </div>
        
          <div className='cover_mypic'>
            <img src={my} className='my_picture'/>
          </div>
        </div>
        
          
       
      </div> 
     
      <div className='body_cover'>
        <Education/> 
        <Contact/>
        <Skills/>
        /<Aboutme/>
        
      </div>  
      {/* </div> */}
      
      {/* <div className='background_second'>
        <div className='my_picture'>
          <div className='font1'>Hi, i'm Lilis</div>
          <div className='font2'> I am React Js developer
          </div>
        </div> */}
      {/* </div> */}
      {/* <Education/>
      <Skills/>
      <Contact/>
      <Aboutme/> */}
  
    </div>
      
  );
}
}
export default Cv;