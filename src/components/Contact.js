import React from 'react'
import instagram from './Assets/instagram.png';
import linkedin from './Assets/linkedin.png';
import github from './Assets/github.png';
import project_pic1 from './Assets/project-pic1.jpg';
import project_pic2 from './Assets/project-pic2.jpg';
import phoneCall_pic from './Assets/phone-call.png';
import './Contact.css'
import {Link} from 'react-router-dom'
import Lists from './Lists';

export default function Contact(props) {
    document.title = `Portfolio -${props.title}`
  return (
    <div>
      <div class="container">
        <div class="top contact-top">
            <div class="contact">
                <h3>Contact</h3>
                <div class="contact-content">
                    <div class="button">
                        <div class="contact-left">
                            <div>
                            <img class="contact-img" src={project_pic1} alt=""/>
                            </div>
                            <div>
                                <img class="contact-img" src={project_pic2} alt=""/>
                            </div>
                        </div>
                        <div>
                            <button class="contact-btn">Contact <img src={phoneCall_pic} alt=""/></button>
                        </div>

                    </div>
                    
                    <div class="contact-right">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7383.382474156463!2d73.36257465!3d22.289683000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1732849083113!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>

        <Lists name1 ="Home" link1 ="/" name2 ="About" link2="/about" name3 ="Projects" link3="/projects"/>

    </div>
    <div class="about-footer">
        <hr className='hr'/>
        <div class="footer-icons contact-footer">
            <a href="https://www.linkedin.com/in/ramesh-korada-8566622b5/"><img src={linkedin} alt=""/></a>
            <a href=""><img src={instagram} alt=""/></a>
            <a href=""><img src={github} alt=""/></a>
        </div>
    </div>

    </div>
  )
}
