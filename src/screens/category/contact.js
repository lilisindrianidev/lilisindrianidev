import { Component } from "react";
import './../../assets/scss/page.scss';
import Fb from './../../assets/images/facebook.png';
import Wa from './../../assets/images/whatsapp.png';
import Li from './../../assets/images/linkedin.png';
import Ig from './../../assets/images/instagram.png';
import Up from './../../assets/images/up.png';
import Mail from './../../assets/images/mail.png';
import Phone from './../../assets/images/phone.png';
import Addr from './../../assets/images/address.png';


export default class Contact extends Component{
  render(){
    return(
      <div id="contact" className='contact'>
        <div className='write_contact'>
          <a >CONTACT</a>
          
          <div className='write_contact_2'>
            <div className="box">
              <a  href="" target="_blank">
                <img src={Fb} className="image_contact"/>
              </a>
              <div className="contact_title">Facebook</div>
            </div>
            <div className="box">
              <a href="='" target='_blank'>
                <img src={Wa} className='image_contact'/>
              </a>
              <div className="contact_title">WhatsApp</div>
            </div>
            <div className="box">
              <a href="" target='_blank'>
                <img src={Li} className='image_contact'/>
              </a>
              <div className="contact_title">LinkedIn</div>
            </div>
            <div className="box">
              <a href="https://www.instagram.com/lilis.indrii/" target='_blank'>
                <img src={Ig} className="image_contact"/>
              </a>
              <div className="contact_title">Instagram</div>
            </div>
          </div>
          <div className='other_write_contact_2'>
            <div className="box_2">
              <a href="https://www.instagram.com/lilis.indrii/" target='_blank'>
                <img src={Mail} className="other_image_contact"/>
              </a>
              <div className="contact_title_2"> lilisindriani.blog@gmail.com</div>
            </div>
            <div className="box_2">
              <a href="https://www.instagram.com/lilis.indrii/" target='_blank'>
                <img src={Phone} className="other_image_contact"/>
              </a>
              <div className="contact_title_2"> 082122534565</div>
            </div>
            <div className="box_2">
              <a href="https://www.instagram.com/lilis.indrii/" target='_blank'>
                <img src={Addr} className="other_image_contact"/>
              </a>
              <div className="contact_title_2"> 
                RT 1, RW 1, Desa Tanggeran, Kecamatan Paninggaran,51164,
                Kabupaten Pekalongan, Jawa Tengah, Indonesia
              </div>
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