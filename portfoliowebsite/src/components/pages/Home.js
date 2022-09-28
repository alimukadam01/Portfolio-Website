import React from 'react';
import '../../App';
import Navbar from './Components/Navbar.js';
import MainSection from './Components/MainSection.js';
import Footer from './Components/Footer.js';
import AboutMe from './Components/AboutMe.js';
import Highlights from './Components/Highlights.js';


function Home(){
    return(
        <>
            <Navbar/>
            <MainSection/>
            <AboutMe/>
            <Highlights/>
            <Footer/>
        </>
        
    )
}

export default Home;