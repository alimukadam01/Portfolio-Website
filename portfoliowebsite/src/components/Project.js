import React from 'react';
import './Project.css';

function Project() {
  return (
    <div className='Project'>
      <div className='Project-Container'>
        <h1>Project</h1>
        <h4>This text contains a description of the project.</h4>
        <h6>This text contains the libraries and methods.</h6>
        <button className='btn btn-light'>
          Check this out on Github
        </button>
      </div>
    </div>
  )
}

export default Project;