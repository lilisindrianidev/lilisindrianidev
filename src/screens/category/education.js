import { Component } from "react";
import '../../assets/scss/page.scss';
import Up from './../../assets/images/up.png';

export default class Education extends Component{
  render(){
    return(
      <div id="education" className='education'>
          <div className='education_write'>
            EDUCATION
            <div className='wrap_education'>
              <div className='education_write_2'>
                <div className='space_write_education'>SDN TANGGERAN</div> 
                <div className='space_write_education'> Graduated in 2012</div>
              </div>
              <div className='education_write_2'>
                  SMP N 1 PANINGGARAN
                <div className='space_write_education'>Graduated in 2015</div>
              </div>
              <div className='education_write_2'>
                SMA N 1 PANINGGARAN
                <br/>
                <div className='space_write_education'> Extraculiculer:</div>
                <div className='space_write_education'> Theater</div>
                <br/>
                <div className='space_write_education'> Extraculiculer:</div>
                <div className='space_write_education'> Theater</div>
              </div>
              <div className='education_write_2'>
                UNIVERSITAS TEKNOLOGI DIGITAL INDONESIA 
                <div className='space_write_education'>- Bachelor of Computer</div>
                <div className='space_write_education'>- Computer Science</div>
                <div className='space_write_education'>- Graduated in 2023</div>
                <div className='space_write_education'>- GPA 3.64</div>
                <br/>
                <div className='space_write_education'>Relavant course:</div>
                <div className='space_write_education'><li>Programming Language (Laravel, JavaScript, Kotlin, Java )</li> </div>
                <div className='space_write_education'>- Artificial intelligence</div>
                <div className='space_write_education'>- Networking</div>
                <div className='space_write_education'>- Big Data</div>
              </div>
              {/*  */}
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