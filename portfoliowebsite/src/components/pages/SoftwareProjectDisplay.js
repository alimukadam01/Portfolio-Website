import React from 'react';
import './ProjectDisplay.css';
import Project from '../Project.js';

function SoftwareProjectDisplay() {
  return (
    <>
        <Project 
          title='Residential Recommendation System' 
          mainText='Based on AI, developed to suggest user places to live in Karachi based on their social & moral mindset.'
          subText='Scikit learn, Pandas, Django, Html, CSS, Bootstrap'
          projLink='https://github.com/alimukadam01/AIModel'
          imgLink='http://localhost:3000/images/Software/1.png'
          platform='on Github'
          id='RRS'
        />

      <Project 
        title='C++ Projects' 
        mainText='Multiple C++ projects based on concepts of OOP and Data Structures.'
        subText='C++'
        projLink='https://github.com/alimukadam01/Cpp-Projects'
        imgLink='http://localhost:3000/images/Software/2.jpg'
        platform='on Github'
        id='Cpp'
      />
        
      <Project 
        title='C Projects' 
        mainText='Multiple C projects based on concepts of OOP and Data Structures.'
        subText='C'
        projLink='https://github.com/alimukadam01/C-Projects'
        imgLink='http://localhost:3000/images/Software/3.jpg'
        platform='on Github'
        id='C'
      />

      <Project 
        title="AliMukadam.com" 
        mainText="You've guessed it right! This website is also a part of my portfolio."
        subText='Html, CSS, JavaScript, React JS'
        projLink='https://github.com/alimukadam01/Portfolio-Website'
        imgLink='http://localhost:3000/images/Software/4.png'
        platform='on Github'
        id='PortfolioWebsite'
      />
    </>
  )
}

export default SoftwareProjectDisplay;