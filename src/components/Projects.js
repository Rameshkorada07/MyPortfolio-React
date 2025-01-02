import React from 'react'
import instagran from './Assets/instagram.png';
import linkedin from './Assets/linkedin.png';
import github from './Assets/github.png';
import clg_blog from './Assets/clg-blog pic.jpg';
import to_do_list from './Assets/to-do-list-pic.jpg';
import jsProjects from './Assets/js-pic.jpg';
import './Projects.css'
import Lists from './Lists';

export default function Projects(props) {
    document.title = `Portfolio -${props.title}`
  return (
    <div>
          <div className="container">
        <div className="top">
            <div className="projects">
                <h3>Projects</h3>
                <div className="projects-content">
                    <div className="project">
                        <div className="info">
                            <img className="pro-img" src={clg_blog} alt=""/>
                        <p className="pro-txt">Lorem ipsum dolor sit amet, consect
                            etur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim ven
                            iam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                            <br/>
                            <br/>
                            <br/>
                            
                            <a href="https://github.com/Rameshkorada07/clg-Blog-template/tree/main">Github/link</a>
                        
                        </p>
                           
                        </div>
                        <div className="project-name">
                            <h3>College-Blog</h3>
                        </div>
                        
                    </div>

                    <div className="project">
                        <div className="info">
                            <img className="pro-img" src={to_do_list} alt=""/>
                        <p className="pro-txt">Lorem ipsum dolor sit amet, consect
                            etur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim ven
                            iam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                            <br/>
                            <br/>
                            <br/>
                            <a href="https://github.com/Rameshkorada07/JS-mini-projects/blob/main/js-practice/to-do-list.html">Github/link</a>
                        
                        </p>
                            
                            
                        </div>
                        <div className="project-name">
                            <h3>To-do-list</h3>
                        </div>
                        
                    </div>

                    <div className="project">
                        <div className="info">
                                <img className="pro-img" src={jsProjects} alt=""/>
                        <p className="pro-txt">Lorem ipsum dolor sit amet, consect
                            etur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim ven
                            iam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in
                            reprehenderit in voluptate
                            <br/>
                            <br/>
                            <br/>
                            <a href="https://github.com/Rameshkorada07/JS-mini-projects/tree/main/js-practice">Github/link</a>
                        </p>
                           
                        </div>
                        <div className="project-name">
                            <h3>JS mini Projects</h3>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
        <Lists name1 ="Home" link1 ="/" name2 ="Contact" link2="/contact" name3 ="About" link3="/about"/>
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
