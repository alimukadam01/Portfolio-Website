import React from 'react';
import './MainSection.css';

function MainSection() {
    return (
        <>

                <div className="MainSection">
                    <div className='mainsec-conatiner'>
                        <div className='software-btn'>
                            <a className='btn btn-outline-warning' href='/SoftwareProjectDisplay'>
                                <h6>Explore my Software side</h6>
                            </a>    
                        </div>
                        <div className='main-caption'>
                            <div className="wordCarousel">
                                <div>
                                    <ul className="flip4">
                                        <li><h2>It's nice to have you here!</h2></li>
                                        <li><h4>Software Engineer. Graphic Designer.</h4></li>
                                        <li><h1>I'm Ali Mukadam</h1></li>
                                        <li><h2>Hi!</h2></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='graphics-btn'>
                            <a className='btn btn-outline-warning' href='/GraphicProjectDisplay'>
                                <h6>Explore my Graphics side</h6>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MainSection;