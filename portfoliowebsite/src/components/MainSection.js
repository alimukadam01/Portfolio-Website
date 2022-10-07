import React from 'react';
import './MainSection.css';

function MainSection() {
    return (
        <>

                <div className="MainSection">
                    <div className='mainsec-conatiner'>
                        <div className='software-btn'>
                            <a className='btn btn-outline-light' href='/SoftwareProjectDisplay'>
                                <h6>Explore my Software side</h6>
                            </a>    
                        </div>

                        <div className="word-carousel-container">
                            <div className="word-carousel">
                                <h2>Hi</h2>
                                <h2 id='word-carousel-name'>I'm Ali Mukadam</h2>
                                <h2>Software Engineer</h2>
                                <h2>Graphic Designer</h2>
                                <h2>It's nice to have you here!</h2>
                            </div>
                        </div>
                        <div className='graphics-btn'>
                            <a className='btn btn-outline-light' href='/GraphicProjectDisplay'>
                                <h6>Explore my Graphics side</h6>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MainSection;