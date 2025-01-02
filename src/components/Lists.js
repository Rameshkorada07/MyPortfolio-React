import React from 'react'
import './Lists.css';
import {Link} from 'react-router-dom'

export default function Lists(props) {
  return (
    <div>
      <div className="lists">
            <ul>
                <li><Link to={props.link1}>{props.name1}</Link></li>
                <li><Link to={props.link3}>{props.name3}</Link></li>
                <li><Link to={props.link2}>{props.name2}</Link></li>
            </ul>
        </div>
    </div>
  )
}
