import './../../assets/scss/page.scss'
import {Component } from 'react'

import Page from './../../assets/images/page1/maintenance-release-godot.jpg';
import {Link} from 'react-router-dom';
import Menu from "./../../components/menu.js"
import Yuri from "./../../assets/images/page1/yuri.jpeg"
import Part6 from './../part6/part6.js';

class part1_content1 extends Component{
  render(){
    return(
    
      
      <div className='CV'>
        <Menu/> 
        <div className='page2_content1'>
       
          <div className='article_cover2_content1'>
            <div  className='article_cover2_content1_container'>
              <div className='cover_part1_content1'>
                <div className='write_part1_content1' > hello</div>
                <a  className="link_part1_content1">
                  <img src={Page}  className="image_part1_content1"/>
                </a>
              </div>
              <div className='title_article_page2_content1'>
                <h1 className='title_page2_content1'>
					        Maintenance release: Godot 4.0.1
                </h1>
                <div className='article_metadata'>
                  <div className='article_author'>
                    <span>By: </span>
                    <img src={Yuri} className="author_image"/>
                    <span className='by'>Yuri Sizov</span>
                  </div>
                  <span className='date'> 20 March 2023</span>
                </div>
                <div className='tags'>
                  <a className='link_tags'>
                    <div className='active'>
                      Release
                    </div>
                  </a>
                </div>
              </div>
              <div className='article_body'>
                <p className='article_body1'>
                  Just three weeks ago we have
                  <a href="" className='colora'> published Godot 4.0</a>
                    , the biggest body of work Godot contributors have 
                    managed to produce in the engine’s entire history. 
                    A backlog of bugs and enhancements comes with that territory,
                    and we’ve been working hard and fast on the most
                    critical fixes during that time. On some smaller and easy-to-implement enhancements too! 
                </p>
                <p className='article_body1'>
                  The result of this work is
                  <strong className='strong'> Godot 4.0.1</strong> 
                  , the first patch release for Godot 4, available now! This version addresses
                  several conditions for crashes and freezes, improves the project converter,
                    and updates the engine documentation and translations. All these improvements will also 
                  be available in the future 4.1 release later this year. And as Godot contributors continue their work on Godot 4.1,
                  some more fixes and improvements will trickle down to future 4.0.x releases.
                </p>
                <p className='article_body1'>
                  One notable change in Godot 4.0.1 that is worth a dedicated mention is related to the project manager.
                  We have received several reports of users accidentally creating a new Godot project in their user directory, 
                  which has led to unfortunate issues. The most critical of these issues is an accidental deletion of the 
                  entire user directory when deleting a project from the project manager. We will be revising the UI and UX of 
                  the related features, but to offer an immediate solution, we have removed the ability to create projects in a 
                  non-empty folder (and in home/documents folders specifically). We have also disabled the ability to delete project 
                  files alongside the removal of the project from the project list.
                </p>
                <p className='article_body1'>
                  <a href="" className='colora'> <strong className='strong'></strong> Download Godot 4.0.1 now</a>
                  or try the 
                  <a href="" className='colora'> online version of the Godot editor</a>
                </p>
                <p className='article_body1'>

                </p>
                <p className='article_body1'>
                  <em className='italica'> 
                    The illustration picture is from a new, fairytale-like demo scene created by 
                    <a className='colora'> Raffaele Picca</a>
                    with Godot 4.0 —
                  </em>
                  <a className='colora'>
                    <strong className='strong'> Lost Desert Temple</strong>
                  </a>
                  <em className='italica'>
                    Raffaele plans to release it as an open source project, so follow him on 
                    <a className='colora'> Twitter</a>
                    to make sure you don’t miss that. And if you’re visiting GDC this week, 
                    <a className='colora'>come by the Godot booth</a>
                    ! You can find Raffaele there and chat about his use of the engine, as well as play a session of
                  </em>
                  <a className='colora'> Beat Invaders</a>!

                </p>
                <h1 className='anchored'>Changes</h1>
                <p className='article_body1'>
                  See The
                  <a className='colora'>
                    <strong className='strong'> curated changelog</strong>
                  </a>
                  , or the full commit history 
                  <a className='colora'> on Github</a> or
                  <a className='colora'> in text from</a>
                  for an exhaustive overview of the fixes in this release.

                </p>
                <p className='article_body1'>
                  Here are the main changes since 4.0-stable:
                </p>
                <ul className='list_changes'>
                  <li className='child_list'>
                    Android: Fix null-pointer dereference when using 
                    <code className='language_plaintext'>
                      gl_compatibility
                    </code>
                    render (
                    <a  href="" className='last_color'>GH-74781</a>)
                  </li>
                  <li className='child_list'>
                    Animation: Check for type mismatch in 
                    <code className='language_plaintext'>
                    PropertyTweener.from()
                    </code>
                    (
                    <a href="" className='last_color'>GH-74781</a>)
                  </li>
                  <li className='child_list'>
                    Audio: Improve logic related to editing audio buses and prevent crashes (
                    <a href="" className='last_color'>GH-74781</a>)
                  </li>
                  <li className='child_list'>
                    Buildsystem: Safeguard Makefile commands for documentation (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    C#: Always show “Create C# solution” option (
                    <a href=""  className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    C#: Fix crash when errors occur before language initialization (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    C#: Get singleton instances using the Core name (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    C#: Ensure that script names (and therefore class names) are valid identifiers (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                     C#: Ensure that script names (and therefore class names) are valid identifiers (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    Audio: Improve logic related to editing audio buses and prevent crashes (
                    <a href="" className='last_color'>GH-74781</a>)
                  </li>
                  <li className='child_list'>
                    Buildsystem: Safeguard Makefile commands for documentation (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    C#: Always show “Create C# solution” option (
                    <a href=""  className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    C#: Fix crash when errors occur before language initialization (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    C#: Get singleton instances using the Core name (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                    C#: Ensure that script names (and therefore class names) are valid identifiers (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                  <li className='child_list'>
                     C#: Ensure that script names (and therefore class names) are valid identifiers (
                    <a href="" className='last_color'>GH-74042</a>)
                  </li>
                </ul>
                <p className='article_body1'></p>
                <h2 className='anchored'>Known incompatibilities</h2>
                <p className='article_body1'>
                  As of now, there are no known incompatibilities with Godot 4.0. 
                  <strong className='strong'> We encourage all users to upgrade to 4.0.1. </strong>
                </p>
                <p className='article_body1'>
                  If you experience any unexpected behavior change in your projects after upgrading to 4.0.1, please 
                  <a href="" className='colora'> file an issue on GitHub</a>.
                </p>
                <h2 className='anchored'>Support</h2>
                <p className='article_body1'>
                  Godot is a non-profit, open source game engine developed by hundreds of contributors on their free time, and a handful of part or full-time developers hired thanks to 
                  <a href="" className='colora'> donations from the Godot community</a>.
                  . A big thank you to everyone who has contributed 
                  <a href="" className='colora'> their time </a>or
                  <a href="" className='colora'> financial support </a>
                  to the project!
                </p>
                <p className='article_body1'>
                  If you’d like to support the project financially and help us secure our future hires, you can do so on 
                  <a href="" className='colora'> Patreon </a>or
                  <a href="" className='colora'> PayPal</a>.
                </p>

              </div>
            </div>
            
          </div>
        </div>
        <Part6/>
      </div>
      
 
    );
  }
}
export default part1_content1;