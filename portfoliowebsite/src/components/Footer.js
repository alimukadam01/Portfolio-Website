import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='footer-row'>
            <div className='footer-col'>
              <h2>Get in touch</h2>
              <ul>
                <li><a href='/'><i className='fa fa-phone' />+92 331 3689402</a></li>
                <li><a href='/' ><i className='fa fa-envelope' />amurtaza907@gmail.com</a></li>
              </ul>
            </div>
            <div className='footer-col'>
            <h2>Follow Me</h2>
              <div className='footer-social-links'>
                <a href='/' ><i className='fab fa-instagram'></i></a>
                <a href='/' ><i className='fab fa-facebook-f'></i></a>
                <a href='/' ><i className='fab fa-linkedin-in'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;