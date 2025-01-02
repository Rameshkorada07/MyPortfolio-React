import React from 'react'
import instagran from './Assets/instagram.png';
import linkedin from './Assets/linkedin.png';
import github from './Assets/github.png';
import './About.css'
import {Link} from 'react-router-dom'
import Lists from './Lists';

export default function About(props) {
    document.title = `Portfolio -${props.title}`
  return (
    <div>
      <div className="container">
        <div className="top">
            <div className="about">
                <div className="about-name">
                    <h2>About me</h2>
                </div>
                <div className="about-content">
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
                                <br/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</p>
                                    <br/>
                    </div>

                    <div className="img">
                    
                    </div>

                    

                </div>

            </div>
        </div>
        <Lists name1 ="Home" link1 ="/" name2 ="Contact" link2="/contact" name3 ="Projects" link3="/projects"/>
    </div>

    <div className="about-footer">
        <hr/>
        <div className="footer-icons">
            <a href="https://www.linkedin.com/in/ramesh-korada-8566622b5/"><img src={linkedin} alt=""/></a>
            <a href=""><img src={instagran} alt=""/></a>
            <a href=""><img src={github} alt=""/></a>
        </div>
    </div>

    </div>
  )
}
