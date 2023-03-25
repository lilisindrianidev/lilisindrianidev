import {Component } from 'react'
import './../../assets/scss/page.scss'

import s1 from './../../assets/images/s1.png';
import s2 from './../../assets/images/s2.png';
import s3 from './../../assets/images/s3.png';
import s4 from './../../assets/images/s4.png';
import s5 from './../../assets/images/s5.png';
import s6 from './../../assets/images/s6.png';
import s7 from './../../assets/images/s7.png';
import s8 from './../../assets/images/s8.png';

class part5 extends Component{
  render(){
    return(
   

      
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
      
    );
  }
}
export default part5;