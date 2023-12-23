import './../../assets/scss/page.scss'
import {Component } from 'react'
import {Link} from 'react-router-dom';
import Header1 from './../../assets/images/logo.svg'
import Header2 from './../../assets/images/logo_page.svg'
import First2 from './../../assets/images/first2.png'
import Solution1 from './../../assets/images/business.png' 
import SponsoredB from './../../assets/images/sponsor.png' 
import Page1 from './../class/page1.js'

class page extends Component{
  render(){
    return(
      <div className='page'>
        <div className='dekstop_page'>
          <div className='header_page'>
            <div className='first_header'>
              <img src={Header1} className='image_first_header'/>
              <nav className='nav'>
                <span className='nav_item'>Home</span>
                <span className='link_nav'>desty page</span>
                <span className='nav_item'>desty store</span>
                <span className='nav_item'>Market</span>
                <span className='nav_item'>Blog</span>
                <span className='nav_item'>karir</span>
                <span className='nav_item'>Pusat bantuan</span>
              </nav>
              <div className='language'>
                <div className='language_item1'>ID</div>
                <div className='language_item2'>EN</div>
              </div>
            </div>
            <div className='second_header'>
              <div className='header_content'>
                <img src={Header2} className="second_image"/>
                <div className='right_content'>
                  <span className='button1'>DAFTAR</span>
                  <span className='button2'>MASUK</span>
                </div>
              </div>
            </div>
          </div>
          <div className='first'>
            <div className='first_page'>
              <h1 className='title_first'>
                <span className='link_in_bio'>Link-in-bio</span> untuk
                <br/>
                semua penjual
              </h1>
              <div className='subfirst'>
                dengan fitur lengkap
                <strong className='strong'> GRATIS </strong>
                untuk kamu
              </div>
              <div className='first_button'> buat page gratis sekarang 👉</div>
              <img src={First2} className="image_first"/>
            </div>
          </div>
          <section className='solution'>
            <section className='wrap_solution'>
              <section className='wrap_solution1 hello0'>
                <img src={Solution1} className='image_solution'/>
              </section>
              <section className='wrap_solution2'>
                <div className='bisnis_solution2 hello'>
                  <span className='span_bisnis'>Bisnis</span>
                  <line className='line_bisnis'></line>
                </div>
                <h2 className='sub_bisnis hello2'>
                  Satu link untuk hubungkan semua
                  <span className='span_sub_bisnis'>bisnismu</span>
                </h2>
                <p className='paraf_bisnis hello2'>
                  Hubungkan bisnis dan marketplace-mu dalam satu Page.
                </p>
                <div className='imglist'>
                  <img src={SponsoredB} className='sponsored_list'/>
                </div>
              </section>
            </section>
            <section className='floor2'>
              <section  className='floor2_text'>
                <header className='header_floor2'>
                  <span className='span_header_floor2'>Konten</span>
                    <div className='line_header_floor2'></div>
                </header>
                <h2 className='sub_floor2'> Berbagi
                  <span className='span_sub_floor2'> konten</span>,
                  tingkatkan penjualan
                </h2>
              </section>
            </section>
          </section>
        </div>
      </div>
    )
  }
}
export default page;