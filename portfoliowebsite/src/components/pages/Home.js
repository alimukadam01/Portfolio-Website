import React from 'react';
import '../../App';
import MainSection from '../MainSection.js';
import Footer from '../Footer.js';
import AboutMe from '../AboutMe.js';
import Highlights from '../Highlights.js';
import EmailMe from '../EmailMe';


function Home(){
    return(
        <>
            <MainSection/>
            <AboutMe/>
            <Highlights/>
            <EmailMe/>
            <Footer/>
        </>
        
    )
}

export default Home;