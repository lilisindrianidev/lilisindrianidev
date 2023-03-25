import {Component } from 'react'
import './../../assets/scss/page.scss'
import  Menu from './../../components/menu2.js';

import my from './../../assets/images/lilis.png'
import Search from './../../assets/images/page1/search.svg';
import Part6 from './../part6/part6.js'


class More extends Component{
  render(){
    return(
      <div className='CV'>
        <Menu/>
        <div className='more_head'>
          <div className='container_more'>
            <div className='main_more'>
              <h1 className="last_more">
                Blog
              </h1>
            </div>
          </div>
        </div>
        <div className='more_page'>
          <form  className='more_searchBar'>
            <input type="hidden"/>
            <input type="text" className='form_search_more' placeholder='Search articles'/>
            <button className='form_button'>
              <img src={Search} className="button_image"/>
            </button>
          </form>
          <h3 className='title_more'>Categories</h3>
          <div className='tags_more'>
            <a className='link_tags'>
              <div className='tags_active'>All</div>
            </a>
            <a className='link_tags'>
              <div className='tags_active2'>News</div>
            </a>
            <a className='link_tags'>
              <div className='tags_active2'>Progress Report</div>
            </a>
            <a className='link_tags'>
              <div className='tags_active2'>Events</div>
            </a>
            <a className='link_tags'>
              <div className='tags_active2'>Release</div>
            </a>
            <a className='link_tags'>
              <div className='tags_active2'>Pre-release</div>
            </a>
            <a className='link_tags'>
              <div className='tags_active2'>Showcase</div>
            </a>
          </div>
        </div>
        
        
        <Part6/>
        
      
      </div>
        
    );
  }
}
export default More;