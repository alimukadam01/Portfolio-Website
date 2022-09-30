import React from 'react';
import '../../App';
import MainSection from '../MainSection.js';
import Footer from '../Footer.js';
import AboutMe from '../AboutMe.js';
import Highlights from '../Highlights.js';


function Home(){
    return(
        <>
            <MainSection/>
            <AboutMe/>
            <Highlights/>
            <Footer/>
        </>
        
    )
}

export default Home;