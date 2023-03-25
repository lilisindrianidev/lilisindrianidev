import {Component } from 'react'
import './../../assets/scss/page.scss'
import Page1 from './../../assets/images/page1/maintenance-release-godot.jpg';
import gdc1 from './../../assets/images/page1/gdc1.jpg';
import gdc2 from './../../assets/images/page1/gdc2.jpg';
import gdc3 from './../../assets/images/page1/gdc3.jpg';
import {Link} from 'react-router-dom';

class part1 extends Component{
  render(){
    return(
    
      
      
      <div className='page2'> 
        <div className='latest'>
          Lates News
        </div>
        <div className='box_page2'>
          {/* <a> */}
            <Link  to="content1" className='container_page2'>
              
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
              
            {/* </div> */}
          </Link>
          
          <div to="content2" className='container_page2_2'>
          {/* <img src={gdc1} className='first_pic'/> */}
            <Link  to="content2" className='new_list'>
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
            
              
            </Link>
            <Link to="content3" className='new_list'>
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
            </Link>
            <Link to="content3" className='new_list'>
              <img src={gdc3} className='first_pic'/>
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
            </Link>
            <div className='button_page2'>
              <Link to="more" className='write_button_page2'>More News</Link>
            </div>
            
          </div>
        </div>
      </div>
      
    
        
    );
  }
}
export default part1;