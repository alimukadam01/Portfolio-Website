import React from 'react';
import '../../App';
import Cards from '../../components/Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection.js';

function Home(){
    return(
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
        
    )
}

export default Home;
