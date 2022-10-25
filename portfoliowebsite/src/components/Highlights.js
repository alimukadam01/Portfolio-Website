import React from 'react';
import './Highlights.css';
import ProjectHighlight from './ProjectHighlight';

function Highlights() {

    var myID = document.getElementById('Highlights');

    var HighlightsScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 1200) {
            myID.className = "Highlights show";
        } else {
            myID.className = "Highlights hide";
        }
    };

    window.addEventListener("scroll", HighlightsScrollFunc);

    return (
        <div id="Highlights" className='Highlights'>
            <h1>Project Highlights</h1>
            <div className='highlights-container'>
                <div className='row gy-3 my-3'>

                    <ProjectHighlight
                        title="R.R.S"
                        desc="Developed to suggest user places to live in Karachi based on their mindset."
                        img="images/Highlights/Software/1.png"
                        link='/SoftwareProjectDisplay#RRS'
                    />

                    <ProjectHighlight
                        title="C++ Projects"
                        desc="Multiple C++ projects based on concepts of OOP and Data Structures."
                        img="images/Highlights/Software/2.png"
                        link='/SoftwareProjectDisplay#Cpp'
                    />

                    <ProjectHighlight
                        title="C Projects"
                        desc="Multiple C projects based on concepts of OOP and Data Structures"
                        img="images/Highlights/Software/3.png"
                        link='/SoftwareProjectDisplay#C'
                    />

                    <ProjectHighlight
                        title="AliMukadam.com"
                        desc="You've guessed it right! This website is also a part of my portfolio."
                        img="images/Highlights/Software/4.png"
                        link='/SoftwareProjectDisplay#PortfolioWebsite'
                    />

                    <ProjectHighlight
                        title='Wafflicous!'
                        desc="Designed company logo and branding for a waffle cart placed in Karachi, Pakistan."
                        img="images/Highlights/Graphics/1.jpg"
                        link='/GraphicProjectDisplay#wafflicious'
                    />

                    <ProjectHighlight
                        title="Invitation Cards"
                        desc="Thoughtfully designed Aesthetic Card Designs for Weddings, Parties, Events etc."
                        img="images/Highlights/Graphics/5.jpg"
                        link='/GraphicProjectDisplay#invitations'
                    />

                    <ProjectHighlight
                        title="Digital Portraits"
                        desc="Multiple digitally painted projects containing digital portraits, wedding cards etc"
                        img="images/Highlights/Graphics/4.jpg"
                        link='/GraphicProjectDisplay#digital-portraits'
                    />

                    <ProjectHighlight
                        title="ITEC'22"
                        desc="Designed social content & managed Team Graphics ACM as Director Graphics in ITEC'22"
                        img="images/Highlights/Graphics/2.png"
                        link='/SoftwareProjectDisplay'
                    />
                </div>
            </div>
        </div>
    )
}

export default Highlights;