import './../../assets/scss/page.scss'
import {Component } from 'react'
import gdc1 from './../../assets/images/page1/gdc1.jpg';
import {Link} from 'react-router-dom';
import Menu from "./../../components/menu2.js"
import Yuri from "./../../assets/images/page1/yuri.jpeg"
import Part6 from './../part6/part6.js';

class part1_content2 extends Component{
  render(){
    return(
    
      
      <div className='CV'>
        <Menu/> 
        <div className='page2_content1'>
       
          <div className='article_cover2_content1'>
            <div  className='article_cover2_content1_container'>
              <div className='cover_part1_content1'>
                <div className='write_part1_content1' > </div>
                <a  className="link_part1_content1">
                  <img src={gdc1}  className="image_part1_content1"/>
                </a>
              </div>
              <div className='title_article_page2_content1'>
                <h1 className='title_page2_content1'>
					        
					Godot Arrives in the Epic Games Store
				
                </h1>
                <div className='article_metadata'>
                  <div className='article_author'>
                    <span>By: </span>
                    <img src={Yuri} className="author_image"/>
                    <span className='by'>Yuri Sizov</span>
                  </div>
                  <span className='date'> 20 March 2023</span>
                </div>
                <div className='tags'>
                  <a className='link_tags'>
                    <div className='active'>
                      Release
                    </div>
                  </a>
                </div>
              </div>
              <div className='article_body'>
                <p className='article_body1'>
                  We are honored to announce that Epic Games is offering Godot Engine a place on the Epic Games Store. Starting today, you can choose to use EGS to 
                  <a href="" className='colora'> download the engine</a>
                  and keep it up to date with every release.
                </p>
                <p className='article_body1'>
                Epic Games is a long-time supporter of Godot, and thanks to 
                  <a className='colora'> their contributions</a> 
                  we have been able to improve our rendering pipeline as well as our built-in scripting language,
                  GDScript – the fruits of that work are now visible in the newly released Godot 4.0!
                </p>
                <p className='article_body1'>
                  The Godot build you can download from EGS is the exact same open source release as on other platforms. Being present on more storefronts opens a new convenient avenue for more users to find the engine and begin their game development journey.
                  You can of course still download Godot Engine from other platforms, or clone its source code from the 
                  <a className='colora'> Git repository</a>
                  and build it yourself. And if you do, you are more than welcome to contribute to Godot’s development too! 
                </p>
                <p className='article_body1'>
                  We are excited to continue our friendship with Epic Games and to be published on the Epic Games Store. 
                  We believe this will bring new opportunities for growth and development for Godot and its community. Thank you for your continued support and we look forward to seeing what you create!
                </p>
               
              </div>
            </div>
            
          </div>
        </div>
        <Part6/>
      </div>
      
 
    );
  }
}
export default part1_content2;