import {Component } from 'react'
import './../../assets/scss/page.scss'

import tree from './../../assets/images/tree.png';


class part4 extends Component{
render(){
  return(
    
     
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
      
  );
}
}
export default part4;