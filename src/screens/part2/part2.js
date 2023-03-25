import {Component } from 'react'
import './../../assets/scss/page.scss'

import page31 from './../../assets/images/page3_1.png';
import page32 from './../../assets/images/page3_2.png';
import page33 from './../../assets/images/page3_3.png';
import page34 from './../../assets/images/page3_4.png';
import page35 from './../../assets/images/page3_5.svg';
import page36 from './../../assets/images/page3_6.svg';

import page41 from './../../assets/images/page41.png';
import page42 from './../../assets/images/page42.png';
import page43 from './../../assets/images/page43.png';

import tree from './../../assets/images/tree.png';


class part2 extends Component{
render(){
  return(
    
      <div className='page3'>
        <h2 className='font_page3'>A different way to make games</h2>
        <div className='wall_page3'>
          <div className='background_page3'>
            <img src={page31} className='image_page3'/>
            <div className='wrap_articles'>
              <h4 className='title_image_page3'>Innovative design</h4>
              <p className='article_page3'>
                Godot's Node and Scene system 
                gives you both power and flexibility to create evrything.
              </p>
            </div>
            
          </div>
          <div className='background_page3'>  
            <img src={page32} className='image_page3'/>
            <div className='wrap_articles'>
              <h4 className='title_image_page3'>Use the right language for the job</h4>
              <p className='article_page3'>
                Keep your code modular with an object-oriented API using Godot's own
                GDScript, C#, C++, or bring your own using GDNative.
              </p>
            </div>
            
          </div>
          <div className='background_page3'>  
            <img src={page33} className='image_page3'/>
            <div className='wrap_articles'>
              <h4 className='title_image_page3'>Dedicated 2D engine</h4>
              <p className='article_page3'>
                Make crisp and performant 2D games with Godot's dedicated 2D
                rendering engine with real 2D pixel coordinates and 2D nodes.
              </p>
            </div>
            
          </div>
          <div className='background_page3'>  
            <img src={page34} className='image_page3'/>
            <div className='wrap_articles'>
              <h4 className='title_image_page3'>Simple and powerful 3D</h4>
              <p className='article_page3'> 
                Godot's 3D nodes give you everything you need to build, animate,
                and render your 3D worlds and characters.
              </p>
            </div>
            
          </div>
          <div className='background_page3'>  
            <img src={page35} className='image_page3'/>
            <div className='wrap_articles'>
              <h4 className='title_image_page3'>Release on all platforms</h4>
              <p className='article_page3'>
                Deploy your game on desktop, mobile, and the web in seconds. Godot
                even supports consoles through third party publishers.
              </p>
            </div>
            
          </div>
          <div className='background_page3'>    
            <img src={page36} className='image_page3'/>
            <div className='wrap_articles'>
              <h4 className='title_image_page3'><h4>Open Source</h4></h4>
              <p className='article_page3'>
                Deploy your game on desktop, mobile, and the web in seconds. Godot
                even supports consoles through third party publishers.
              </p>
            </div>
            
          </div>
          
        </div>
        <div className='cover_button_page3'>
          <a className='button_page3'> Learn more about usin Godot</a>
        </div>
        
      </div>
      
  );
}
}
export default part2;