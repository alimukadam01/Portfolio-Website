import React from 'react';
import '../../App';
import {Navbar} from './ components/Navbar';
import {MainSection} from './components/MainSection';
import {Footer} from './components/Footer';
import {AboutMe} from './components/AboutMe';
import {Highlights} from './components/Highlights';


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