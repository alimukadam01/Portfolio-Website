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
                <li><h3><i className='fa fa-phone' />+92 331 3689402</h3></li>
                <li><h3 id="email"><i className='fa fa-envelope' />amurtaza907@gmail.com</h3></li>
              </ul>
            </div>
            <div className='footer-col'>
            <h2>Follow Me</h2>
              <div className='footer-social-links'>
                <a href='https://www.instagram.com/ali.murtaza01/' ><i className='fab fa-instagram'></i></a>
                <a href='https://www.facebook.com/ali.murtaza.5203/' ><i className='fab fa-facebook'></i></a>
                <a href='https://www.linkedin.com/in/ali-murtaza-1ab316234/' ><i className='fab fa-linkedin-in'></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;