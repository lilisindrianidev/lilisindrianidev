import './../../assets/scss/page.scss'
import {Component } from 'react'
import {Link} from 'react-router-dom';
import Header1 from './../../assets/images/logo.svg'
import Header2 from './../../assets/images/logo_page.svg'
import First2 from './../../assets/images/first2.png'
import Solution1 from './../../assets/images/business.png' 
import SponsoredB from './../../assets/images/sponsor.png' 

class page1 extends Component{
  render(){
    return(
      
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
      </section>
       
    )
  }
}
export default page1;