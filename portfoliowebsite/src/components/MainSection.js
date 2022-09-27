import React from 'react';
import './MainSection.css';

function MainSection() {
    return (
        <>

                <div className="MainSection">
                    <div className='mainsec-conatiner'>
                        <div className='software-btn'>
                            <button className='btn btn-outline-warning'>
                                <h6>Explore my Software side</h6>
                            </button>    
                        </div>
                        <div className='main-caption'>
                            <h2>Hi, I'm </h2><h1>Ali Mukadam<br/></h1><h6>Software Engineer. Graphic
                            Desginer.<br/></h6><h2> It's nice to have you here!</h2>
                            <button className='btn btn-light'>
                                Get Started
                            </button>
                        </div>
                        <div className='graphics-btn'>
                            <button className='btn btn-outline-warning'>
                                <h6>Explore my Graphics side</h6>
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default MainSection;