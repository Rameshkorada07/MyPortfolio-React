import React, { useState } from 'react'
import profile3 from './Assets/profile3.jpg';
import cancel from './Assets/cancel.png';
import menu from './Assets/menu.png';
import right_arrow from './Assets/right-arrow.png';
import './Home.css';
import {Link} from 'react-router-dom'
import Lists from './Lists';

export default function Home(props) {
   document.title = `Portfolio -${props.title}`

   const [style,setStyle] = useState({right:"-170px"})

   let showMenu = ()=> {
    setStyle({right:"0"})
   }

   let hideMenu = ()=> {
    setStyle({right:"-170px"})
   }
   
  return (
    <div>
      <div className="container">
        <div className="top">
            <div className="nav">
                <div className="left">
                    <p>vinaykorada2004@gmail.com</p>
                    <button>Copy</button>
                    <button>CV</button>
                </div>

                <div className="right-sub">

                    <div id="nav-links" className="right" style={style}>
                    
                        <div>
                            <img onClick={hideMenu} className="cancel-btn" src={cancel} alt=""/>
                        </div>
                            
    
                            <a href="https://www.linkedin.com/in/ramesh-korada-8566622b5/">Linkedin</a>
                            <a href="https://github.com/Rameshkorada07">Github</a>
                            <a href="">Instagram</a>  
                    </div>
    
                    <div>
                        <img onClick={showMenu} className="menu-btn" src={menu} alt=""/>
                    </div>

                </div>
               
            </div>
            
            <div className="middle">
                <div className="mid-first">
                    <img className="profile-pic" src={profile3} alt=""/>
                    <p>Ramesh👋</p>
                </div>
                <div className="mid-second">
                    <h3>UI/UX Designer | Frontend Developer</h3>
                    <p>Less is more.</p>
                </div>
                <div className="mid-last">
                    <button>Let's Talk <img src={right_arrow} alt=""/></button>
                </div>
                
            </div>
        </div>

        <Lists name1 ="About" link1="/about" name2 ="Contact" link2="/contact" name3 ="Projects" link3="/projects"/>
        
    </div>
    <div className="footer">
        <div className="services">
            <p className="services-txt">Services</p>
        <hr/>
        </div>
        
        <div className="foot-content">
            <div className="foot-left">
                <h3>UI.UX</h3>
                <p>Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's 
                    standard dummy text</p>
            </div>
            <div className="foot-right">
                <h3>Reactjs</h3>
                <p>Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's 
                    standard dummy text</p>
            </div>
        </div>
    </div>

    </div>
  )
}
