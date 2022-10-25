import React from 'react';
import './Navbar.css';


function Navbar() {

  return (
    <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href='/'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/#about-me'>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact-me">Contact Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/SoftwareProjectDisplay">Software Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/GraphicProjectDisplay">Graphic Design Projects</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;