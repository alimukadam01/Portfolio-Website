import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div id={ props.id } className='Project' style={{backgroundImage: `url(${props.imgLink})`}}>
      <div className='Project-Description-Container'>
        <h1>{ props.title }</h1>
        <h4>{ props.mainText }</h4>
        <h5>{ props.subText }</h5>
        <div className='Buttons'>
          <a className='btn btn-light' href={ props.projLink }>
            Check this out { props.platform }
          </a>
          <a className='btn btn-success' href={ props.buyLink }>
            Order Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project;