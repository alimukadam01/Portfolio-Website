import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>Adventure Awaits!</h1>
        <p>Ready to embark on a journey you're going to remember for a lifetime?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get Started Now!
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Watch Trailer 
                <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection