import {Component } from 'react'
import './../../assets/scss/page.scss'
import  Menu from './../../components/menu.js';
import Education from './../category/education.js';
import Contact from './../category/contact.js';
import Skills from './../category/skills.js';
import Aboutme from './../category/aboutme.js';
import my from './../../assets/images/lilis.png'
import Up from './../../assets/images/up.png';
import Page1 from './../../assets/images/maintenance-release-godot.jpg';
import gdc1 from './../../assets/images/gdc1.jpg';
import gdc2 from './../../assets/images/gdc2.jpg';

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

import s1 from './../../assets/images/s1.png';
import s2 from './../../assets/images/s2.png';
import s3 from './../../assets/images/s3.png';
import s4 from './../../assets/images/s4.png';
import s5 from './../../assets/images/s5.png';
import s6 from './../../assets/images/s6.png';
import s7 from './../../assets/images/s7.png';
import s8 from './../../assets/images/s8.png';

import p71 from './../../assets/images/71.png';
import p72 from './../../assets/images/72.png';
import p73 from './../../assets/images/73.png';
import p74 from './../../assets/images/74.png';
import p75 from './../../assets/images/75.png';

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
     
     
      <div className='page2'> 
        <div className='latest'>
          Lates News
        </div>
        <div className='box_page2'>
          <div className='container_page2'>
           
            <img src={Page1} className="image_page2"/>
            
            <div className='box_content'>

              <h3 className='main'>Maintenance release: Godot 3.5.2</h3>
              <p className='write_box_content'>
                We've just released Godot 4.0 after 3+ years of intense development,
                but we also still support the existing 3.5 stable branch. This
                maintenance release fixes a handful of issues which have been solved
                in the past few months, and could be backported to the 3.5 branch.
              </p>
            </div>
            
          </div>
          <div  className='container_page2_2'>
          {/* <img src={gdc1} className='first_pic'/> */}
            <div className='new_list'>
              <img src={gdc1} className='first_pic'/>
              <div>
                <h3 className='title_article'>
                Maintenance release: Godot 3.5.2
                </h3>
                <p className='first_article'>
                  We are going to be at the Game
                  Developers Conference (GDC) 
                  2023, which will 
                  take place in San Franci...
                </p>
              </div>
           
             
            </div>
            <div className='new_list'>
              <img src={gdc2} className='first_pic'/>
              <div>
                <h3 className='title_article'>
                  Godot &amp; Friends at GDC 2023
                </h3>
                <p className='first_article'>
                  We are going to be at the Game
                  Developers Conference (GDC) 
                  2023, which will 
                  take place in San Franci...
                </p>
              </div>
            </div>
            <div className='new_list'>
              <img src={gdc2} className='first_pic'/>
              <div>
                <h3 className='title_article'>
                Godot 4.0 sets sail: All aboard for new horizons
                </h3>
                <p className='first_article'>
                  We are going to be at the Game
                  Developers Conference (GDC) 
                  2023, which will 
                  take place in San Franci...
                </p>
              </div>
            </div>
            <div className='button_page2'>
              <a className='write_button_page2'>More News</a>
            </div>
            
          </div>
        </div>
      </div>
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
      <div className='page4'>
        <div className='font_page4'>Get involved</div>
        <p className='after_font_page4'>
          Join the community and help 
          create a game engine that belongs to everybody.
        </p>
        <div className='picture_flex'>
          <div className='cover_picture_page4'>
            <img src={page41} className="pictures_page4"/>
            <h4 className='title_content_page4'>Code</h4>
            <p className='content_page4'>
              If you know how to code, you can help by fixing bugs and working with engine contributors towards the
              implementation of new features.
            </p>
            <div className='button_page4'>
              <a className='hello4'>Learn more</a>
            </div>
          </div>
          <div className='cover_picture_page4'>
            <img src={page42} className="pictures_page4"/>
            <h4 className='title_content_page4'>Document</h4>
            <p className='content_page4'>                  
              Documentation quality is essential in a game engine; help make it better by updating the API reference, writing
              new guides or submitting corrections.
            </p>
            <div className='button_page4'>
              <a className='hello4'>Learn more</a>
            </div>
          </div>
          <div className='cover_picture_page4'>
            <img src={page43} className="pictures_page4"/>
            <h4 className='title_content_page4'>Report</h4>
            <p className='content_page4'>
              Found a problem with the engine? Don't forget to report it so that developers can track it down.
            </p>
            <div className='button_page4'>
              <a className='hello4'>Learn more</a>
            </div>
          
          </div>
        </div>  
      </div>
      <div id ="donations"className='page5'>
        <div className='content4'>
          <img src={tree} className="tree"/>
          <h3 className='donate'>Donate</h3>
          <div className='article_page5'>
            You don't need to be an engine developer to help Godot. Consider donating to speed up development and make
            Godot Engine even more awesome!
          </div>
          <div className='button5'>
            <a className='write_button5'>Learn more</a>
          </div>
        </div>
      </div>
      <div className='page6'>
        <h2 className='font6'>
          Sponsored by
        </h2>
        <div className='sponsored'>
          <div className='sponsored_grey'>
            <img src={s1} className='pic_s'/>
          </div>
          <div className='sponsored_grey'>
            <img src={s2} className='pic_s'/>
          </div>
          <div className='sponsored_grey'>
            <img src={s3} className='pic_s'/>
          </div>
        </div>
        <div className='sponsored'>
          <div className='sponsored_white'>
            <img src={s4} className='pic_w'/>
          </div>
          <div className='sponsored_white'>
            <img src={s5} className='pic_w'/>
          </div>
          <div className='sponsored_white'>
            <img src={s6} className='pic_w'/>
          </div>
          <div className='sponsored_white'>
            <img src={s7} className='pic_w'/>
          </div>
          <div className='sponsored_white'>
            <img src={s8} className='pic_w'/>
          </div>
        </div>
      </div>
      <div className='page7'>
        <div className='cover_page7'>
          <div className='one'>
            
            © 2007-2023 Juan Linietsky, Ariel Manzur and 
            <a href='' className='linkone'> contributors</a>.
            <br/>
            Godot is a member of the 
            <a href='' className='linkone'> Software Freedom Conservancy</a>.
            <br/>
            Kindly hosted by
            <a href='' className='linkone'> TuxFamily.org</a>.
            <br/>
            <a href='' className='linkone'> Website source code on
            GitHub</a>.
          </div>
          <div className='wraptwo'>  
            <ul className='two'>
              <li className='title7'>
                <strong className='strong'>Get Godot</strong>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Download</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Web Editor</a>
              </li>
              <li>&nbsp;</li>
              <li className='title7'>
                <strong className='strong'>Public Relations</strong>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Blog</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Communities and Events</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Press Kit</a>
              </li>
            </ul> 
            <ul className='two'>
              
              <li className='title7'>
                <strong className='strong'>About Godot</strong>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Features</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Showcase</a>
              </li>
              <li className='title7'>
                <a  href='' className='linktwo'>Education</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> License</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Code of Conduct</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Privacy Policy</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Donate</a>
              </li>
            </ul>
            <ul className='two'>
              
              <li className='title7'>
                <strong className='strong'>Project Team</strong>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Govemance</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'> Teams</a>
              </li>
              <li>&nbsp;</li>
              <li className='title7'>
                <strong className='strong'>Extra Resorces</strong>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'>Asset Library</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'>Documentation</a>
              </li>
              <li className='title7'>
                <a href='' className='linktwo'>Code repositorty</a>
              </li>
            </ul>
            
          </div>
          <h4 className='three'>
            <a className='titlethree'>Contact us</a>
            <div className='wrap_picture_page7'>
              <img src={p71} className="picture_page7"/>
              <img src={p72} className="picture_page7"/>
              <img src={p73} className="picture_page7"/>
              <img src={p74} className="picture_page7"/>
              <img src={p75} className="picture_page7"/>
            </div>
          </h4>    
        </div>
      </div>
    
     
    </div>
      
  );
}
}
export default Cv;