import React from 'react';
import './ProjectHighlight.css';

function ProjectHighlight(props) {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3'>
      <div className="card">
        <img className="card-img-top" src={ props.img } alt="/"/>
        <div className="card-body">
            <h5 className="card-title">{ props.title }</h5>
            <p className="card-text">{ props.desc }</p>
            <a href={props.link} className="btn btn-outline-light">Check this out!</a>
        </div>
    </div>
    </div>
    
  )
}

export default ProjectHighlight