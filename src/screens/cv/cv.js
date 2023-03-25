import {Component } from 'react'
import './../../assets/scss/page.scss'
import  Menu from './../../components/menu.js';

import my from './../../assets/images/lilis.png'
import Part1 from './../part1/part1.js'
import Part2 from './../part2/part2.js'
import Part3 from './../part3/part3.js'
import Part4 from './../part4/part4.js'
import Part5 from './../part5/part5.js'
import Part6 from './../part6/part6.js'


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
     
      <Part1/>
      <Part2/>
      <Part3/>
      <Part4/>
      <Part5/>
      <Part6/>
      
     
    </div>
      
  );
}
}
export default Cv;