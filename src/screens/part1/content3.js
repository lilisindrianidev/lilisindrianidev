import './../../assets/scss/page.scss'
import {Component } from 'react'
import gdc3 from './../../assets/images/page1/gdc2.jpg';
import {Link} from 'react-router-dom';
import Menu from "./../../components/menu.js"
import Yuri from "./../../assets/images/page1/yuri.jpeg"
import Part6 from './../part6/part6.js';

class part1_content3 extends Component{
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
                  <img src={gdc3}  className="image_part1_content1"/>
                </a>
              </div>
              <div className='title_article_page2_content1'>
                <h1 className='title_page2_content1'>
					        Release candidate: Godot 4.0.1 RC 2
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
                  The first patch release of Godot 4 is almost ready. Following on the heels of 
                  <a href="" className='colora'> the biggest release in the history of Godot </a>
                  , 4.0.1 is focused on the most 
                  critical issues, as well as smaller usability improvements that we can fit with confidence they will not introduce any new problems and regressions. A couple of days ago we released the first Release Candidate, and it’s already the time for another preview, with the stable
                  release being just around the corner.
                </p>
                <p className='article_body1'>
                  Please give it a try if you can. It should be safe to migrate your existing projects to 4.0.1, but to make sure of that we
                  need your help testing the changes. If there are no significant regressions reported with release candidates, a stable version is going to be published soon. Don’t forget to always make backups when moving versions, 
                  even minor. Better yet, prefer using a version control system, such as Git, and commit a version of your project before the migration.
                </p>
                <h1 className='anchored'>Highlights</h1>

                <p className='article_body1'>
                  This release candidate includes some changes which may interest a lot of users:
                </p>
                <ul className='list_changes'>
                  <li className='child_list'>
                    You can no longer create new projects in non-empty folders, as well as your OS-specific user/home folder. We also removed the ability to delete local files when removing a project from the project list (
                    <em className='last_color'>GH-74974</em>)
                    <ul className='list_changes'>
                      <li className='child_list'>
                        Both of these functionalities are situationally useful, 
                        but also create many opportunities for undesirable side-effects. We had several reports from users accidentally creating projects in their home directory and making the editor 
                        import everything stored there, as well as others who accidentally deleted their entire user directory. This makes these functionalities too 
                        dangerous to leave as is, and we would prefer to revisit them when we can make a better UI that prevents such accidents.
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className='article_body1'>
                  <a className='colora'>
                    Jump to the <strong className='strong'>
                      Download 
                    </strong>
                    section.
                  </a>
                </p>
                <p className='article_body1'>
                  <a className='colora'>
                    As usual, you can try it live with the 
                    <strong  className='strong'>
                      online version of the Godot editor 
                    </strong></a>
                    updated for this release.
                </p>
                <hr/>
                <p className='article_body1'>
                  <em className='italica'>The illustration picture is from</em>
                  <strong className='strong'> Lumberyard Bistro </strong>
                  <em className='italica'>
                    a demo scene originally created by the Amazon Lumberyard team in 2017 (Creative Commons CC-BY 4.0) and then ported to Godot 4.0 by 
                    <a href="" className='colora'> Logan Preshaw</a> 
                    . You can learn more about the process and get the scene 
                    <a href="" className='colora'> on Github</a>
                    , and you can follow Logan 
                    <a href="" className='colora'> on Twitter</a>
                    . The picture also features human models from 
                    <a href="" className='colora'> Renderpeople</a>
                    , not included with the demo.
                  </em>
                </p>
                <h2 className='anchored'>What's new</h2>
                <p className='article_body1'>
                  See the full changelog 
                  <a className='colora'> on Github </a>
                  for an overview of all changes 
                  <a className='colora'> since 4.0.2-rc1</a>
                  (13 commits – excluding merge commits ― from 11 contributors).
                </p>
                <p className='article_body1'>
                  Some of the most notable feature changes in this update are:
                </p>
                <ul className='list_changes'>
                  <li className='child_list'>
                    Editor: Fix MultiNodeEdit not cleared after deleting nodes (
                    <a className='colora'>GH-74795</a>).
                  </li>
                  <li className='child_list'>
                    Editor: Disallow creating a project in the Home or Documents folder (
                    <a className='colora'>GH-74964</a>).
                  </li>
                   <li className='child_list'>
                    Editor: Fix error when opening Inspector’s dots menu (
                    <a className='colora'>GH-74974</a>).
                  </li>
                   <li className='child_list'>
                    Input: Fix InputEventConfigurationDialog modifies original event (
                    <a className='colora'>GH-74858</a>).
                  </li>
                   <li className='child_list'>
                    Navigation: Allow negative NavigationAgent2D path debug line_width for thin lines (
                    <a className='colora'>GH-74976</a>).
                  </li>
                   <li className='child_list'>
                    Navigation: Fix NavigationAgent3D debug path duplicated points (
                    <a className='colora'>GH-74795</a>).
                  </li>
                   <li className='child_list'>
                    Project converter: Add conversion for common Theme Overrides (
                    <a className='colora'>GH-74624</a>).
                  </li>
                  <li className='child_list'>
                    As well as several improvements to the documentation.
                  </li>
                </ul>
                <h2 className='anchored'>Downloads</h2>
                <p className='article_body1'>
                  The downloads for this dev snapshot can be found directly on our repository:
                  <ul className='list_changes'>
                    <li className='child_list'>
                      <a className='colora'> Standard build </a>  (GDScript, GDExtension).
                    </li>
                    <li className='child_list'>
                      <a className='colora'> Net SDk 6.0</a>  (C#, GDScript, GDExtension).
                      <ul className='list_changes'>
                        <li className="child_list">
                          Requires <a className='colora'>.NET SDK 6.0</a> or
                          <a className='colora'> 7.0 </a>  installed in a standard location.
                        </li>
                      </ul>
                    </li>
                  </ul>

                </p>
                <h2 className='anchored'>Known issues</h2>
                <p className='article_body1'>
                  There are currently no known issues introduced by this release.
                </p>
                <p className='article_body1'>
                  With every release we accept that there are going to be various issues, which have already been reported but haven’t been fixed yet. See the GitHub issue tracker for a complete list of 
                  <a href="" className='colora'> known bugs</a>.
                </p>
                <h2 className='anchored'>Bug reports</h2>
                <p className='article_body1'>
                  As a tester, you are encouraged to 
                  <a href="" className='colora'> open bug reports </a>
                  if you experience issues with this release. Please check the 
                  <a href="" className='colora'> existing issue on Github</a>
                  first, using the search function with relevant keywords, to ensure that the bug you experience is not already known.
                </p>
                <p className='article_body1'>
                  In particular, any change that would cause a regression in your projects is very important to report (e.g. if something that worked fine in 4.0, but no longer works in 4.0.1 RC 2).
                </p>
                <h2 className='anchored'>Support</h2>
                <p className='article_body1'>
                  Godot is a non-profit, open source game engine developed by hundreds of contributors on their free time, and a handful of part or full-time developers hired thanks to 
                  <a href="" className='colora'> donations from the Godot community </a>
                  . A big thank you to everyone who has contributed 
                  <a href="" className='colora'> financial support </a>
                  to the project!
                </p>
                <p className='article_body1'>
                  If you’d like to support the project financially and help us secure our future hires, you can do so on 
                  <a href="" className='colora'> Patreon </a> or
                  <a href="" className='colora'> PayPal </a>
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
export default part1_content3;