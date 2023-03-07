import { Component } from "react";
import './../../assets/scss/page.scss';
import Up from './../../assets/images/up.png';

export default class Skills extends Component{
  render(){
    return(
      <div id="skills" className='skills'>
        <div className='write_skills'>
          <a >SKILLS</a>
          <div className="wrap_skills">
            <div className='write_skills_2'> 
              <div className="write_skills_2">Working in a Team:
                <div className="space_write_skills"> Organized event for Art</div>
              </div>  
              <div className="write_skills_2"> Leadership:
                <div className="space_write_skills"> Lead of Theater division, in UKM Kesenian UTDI</div>
              </div>
           
              <div className="write_skills_2"> IT Skills:
                <div className="space_write_skills"> Programming Language(ReactJs, Laravel, MySql)
                  <div className="detail_skills">Projects:</div>
                  <div className="detail_skills"><li>Tangeran Village Correspondence Web-based Using Naive Bayes Method (Laravel, ReactJs)</li></div>
                </div>
              </div>
              <div className="write_skills_2"> Written communication:
                <div className="space_write_skills"> Contributor of anthology short story Bahasa Rembulan University Panca Sakti, Tegal</div>
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