import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className='aboutme'>
      <div className='aboutme-container'>
        <div className='aboutme-pic-container'>
          <img className='aboutme-pic' src='images/WappDP.jpeg'/>
        </div>
        <div className='caption'>
          <h1>About Me</h1>
          <p className='caption-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a  
          type specimen book. It has survived not only five centuries, but also the  
          leap into electronic typesetting, remaining essentially unchanged. It was 
          popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;