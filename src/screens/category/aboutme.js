import { Component } from "react";
import './../../assets/scss/page.scss';
import Up from './../../assets/images/up.png';

export default class Aboutme extends Component{
  render(){
    return(
      <div id="aboutme" className="aboutme"> 
        <div className="write_aboutme">
         <a>ABOUT ME</a>
          <div className="write_aboutme_2">My name is Lilis Indriani, i was born in Pekalongan April 24th 2000. i Live in Tanggeran, paninggaran, Pekalinga. 
          my mother's name is Mutirah and my father Daryono.
          i have elder siblings who they are Slamet Siswanto and Ridwan. for now i have nephew from my brother,
          his name is Muhammad Airlangga Sidiq, we usually call him Angga.
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