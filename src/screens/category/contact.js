import { Component } from "react";
import './../../assets/scss/page.scss';
import Fb from './../../assets/images/facebook.png';
import Wa from './../../assets/images/whatsapp.png';
import Li from './../../assets/images/linkedin.png';
import Ig from './../../assets/images/instagram.png';
import Up from './../../assets/images/up.png';

export default class Contact extends Component{
  render(){
    return(
      <div id="contact" className='contact'>
          <div className='write_contact'>
            <a >CONTACT</a>
           <div className="box">
              <div className='write_contact_2'>
                <a  href="" target="_blank">
                  <img src={Fb} className="image_contact"/>
                </a>
                <a href="='" target='_blank'>
                  <img src={Wa} className='image_contact'/>
                </a>
                <a href="" target='_blank'>
                  <img src={Li} className='image_contact'/>
                </a>
                <a href="https://www.instagram.com/lilis.indrii/" target='_blank'>
                  <img src={Ig} className="image_contact"/>
                </a>
                
              </div>
              <div className="hmm">
                <div className="contact_title">Facebook</div>
                <div className="contact_title">WhatsApp</div>
                <div className="contact_title">LinkedIn</div>
                <div className="contact_title">Instagram</div>
                
              </div>
           </div>
             
          </div>
          <a href="#back" >
            <img src={Up} className="up"/>
            <a className="link_up">Back</a>
          </a>
        </div>

    );
  }
}