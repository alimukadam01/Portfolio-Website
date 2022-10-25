import React from 'react';
import './EmailMe.css';
import emailjs from 'emailjs-com';


function EmailMe() {
  var myID = document.getElementById('emailMe');

  var emailMeScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 2200) {
      myID.className = "emailMe-container show";
    } else {
      myID.className = "emailMe-container hide";
    }
  };

  window.addEventListener("scroll", emailMeScrollFunc);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o49d8x5', 'template_kfx6xz9', e.target, 'k55pa5KA61pm414tF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    console.log('Email Sent!');
  };

  return (
    <div id='emailMe' className='emailMe-container'>
      <form onSubmit={sendEmail}>
        <h2>Place an Order!</h2>
        <input type="text" name='name' placeholder='Your Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <input type="text" name='phone' placeholder='Your Phone No.' required />
        <textarea name='message' rows="4" placeholder="What's on your mind?"></textarea>
        <button className="btn btn-outline-light" type='submit'>Send</button>
      </form>
    </div>
  )
}

export default EmailMe;