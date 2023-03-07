import React, { Component } from "react";
import '../assets/scss/page.scss';
import {Link, BrowserRouter, Route, Redirect} from 'react-router-dom';

class hamburger extends Component{
  constructor(props){
    super(props)
    this.state = {
      burger:false
    }
  }
  hamburger = () => {
    if(this.state.burger === true){
      this.setState({burger:false})
    }else{
      this.setState({burger:true})
    }
  }
  render(){
    return(
      <div >
        <>
        {this.state.burger== false &&
          <div className="before">
             <div className='logo_white' ></div>
            <div className='burger_white' onClick={this.hamburger}></div>
           </div>
        }
        </>
        
        {this.state.burger &&
       //<div className="cover_burger">
        <div className="cover_burger">
        <div className="logo2"></div>
        <div className='burger' onClick={this.hamburger}>
          <div className='burger_background'>
            
            <div className='background_menu'>
              <div>
                <a className="menuItem" href="/">Home</a>
              </div>
              <div>
                <a className="menuItem" href="/tampilUsaha">Edit Surat Usaha</a>
              </div>
              
              <div>
                <a className="menuItem" href="/editAdmin">Edit Admin</a>
              </div>
             
              <div>
                <a className="menuItem" href="/laporan">Laporan</a>
              </div>
              
              <div>
                <a className="menuItem" href="/tampilPengantar">Edit Surat Pengantar</a>
              </div>
              
              <div>
                <a className="menuItem" href="/editPenduduk">Edit Penduduk</a>
              </div>
             
              <div>
                <a className="menuItem" href="/editKepalaDesa">Edit Kepala Desa</a>
              </div>
              
           
            </div>  
            
   
   
  
            </div>  
            </div>
          
            </div> 
            } 
        
        

        
       
        
      </div>

        


    );
  }
  
}
export default hamburger;
 