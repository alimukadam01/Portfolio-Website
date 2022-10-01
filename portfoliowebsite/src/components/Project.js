import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className='Project' style={{backgroundImage: `url(${props.imgLink})`}}>
      <div className='Project-Description-Container'>
        <h1>{ props.title }</h1>
        <h4>{ props.mainText }</h4>
        <h5>{ props.subText }</h5>
        <a className='btn btn-outline-warning' href={ props.projLink }>
          Check this out on Github
        </a>
      </div>
    </div>
  )
}

export default Project;