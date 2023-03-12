import { Component } from "react";
import './../../assets/scss/page.scss';
import Up from './../../assets/images/up.png';

export default class Aboutme extends Component{
  render(){
    return(
      <div id="aboutme" className="aboutme"> 
        <div className="write_aboutme">
          ABOUT ME
        </div>
        <div className="wrap_aboutme">
          <div className="write_aboutme_2">
            My names Lilis Indriani, you can call me Lili. I was born in
            Pekalongan, April 24th 2000. 
            
            
            
            My mom is Mutirah and my dad is Daryono.
            I have 2 brothers Slamet Siswanto and Ridwan and the all are elders, i have newphew as well, his name is 
            Muhammad Airlangga Sidiq. I have my Grandma and few uncles and aunts.

          </div>
          <div className="write_aboutme_2">
          I did coding since i was 18 that was 
            when i was confused to what degree i should choose,
            then i saw my brother doing coding, and i curius about that,
            for me that was something new and i needed to try 
            until i found myself had interes to coding and my fist Programming language 
            i've learned was C, i learned about color and shape, that 
            is basic, but that is when my interest started.
            I decided to learn it in Universiy. But 
          </div>
          <p></p>
        </div>
          
        
        <a href="#back" >
          <img src={Up} className="up"/>
          <a className="link_up">Back</a>
        </a>
      </div>
    );  
  }
}