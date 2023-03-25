import {Component } from 'react'
import './../../assets/scss/page.scss'
import page41 from './../../assets/images/page41.png';
import page42 from './../../assets/images/page42.png';
import page43 from './../../assets/images/page43.png';



class part3 extends Component{
render(){
  return(
    

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
      
      
  );
}
}
export default part3;