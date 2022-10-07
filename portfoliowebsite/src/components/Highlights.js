import React from 'react';
import './Highlights.css';
import ProjectHighlight from './ProjectHighlight';

function Highlights() {
  return (
    <div className='Highlights'>
        <h1>Project Highlights</h1>
        <div className='highlights-container'>
            <div className='row gy-3 my-3'>
                
                    <ProjectHighlight 
                        title="R.R.S"
                        desc="Developed to suggest user places to live in Karachi based on their mindset."
                        img="images/Highlights/Software/1.png"
                        link='/SoftwareProjectDisplay'
                    />
                    
                    <ProjectHighlight 
                        title="C++ Projects"
                        desc="Multiple C++ projects based on concepts of OOP and Data Structures."
                        img="images/Highlights/Software/2.png"
                        link='/SoftwareProjectDisplay'
                    />
                    
                    <ProjectHighlight 
                        title="C Projects"
                        desc="Multiple C projects based on concepts of OOP and Data Structures"
                        img="images/Highlights/Software/3.png"
                        link='/SoftwareProjectDisplay'             
                    />
                    
                    <ProjectHighlight 
                        title="AliMukadam.com"
                        desc="You've guessed it right! This website is also a part of my portfolio."
                        img="images/Highlights/Software/4.png"
                        link='/SoftwareProjectDisplay'
                    />
                
                    <ProjectHighlight 
                        title='Wafflicous!'
                        desc="Designed company logo and branding for a waffle cart placed in Karachi, Pakistan."
                        img="images/Highlights/Graphics/1.jpg"
                        link='/GraphicProjectDisplay'
                    />
                    
                    <ProjectHighlight 
                        title="Invitation Cards"
                        desc="Thoughtfully designed Aesthetic Card Designs for Weddings, Parties, Events etc."
                        img="images/Highlights/Graphics/5.jpg"
                        link='/GraphicProjectDisplay'
                    />
                    
                    <ProjectHighlight 
                        title="Digital Portraits"
                        desc="Multiple digitally painted projects containing digital portraits, wedding cards etc"
                        img="images/Highlights/Graphics/4.jpg"
                        link='/GraphicProjectDisplay'
                    />

                    <ProjectHighlight 
                        title="R.R.S"
                        desc="Developed to suggest user places to live in Karachi based on their mindset."
                        img="images/Highlights/Software/1.png"
                        link='/SoftwareProjectDisplay'
                    />
            </div>
        </div>
    </div>
  )
}

export default Highlights;