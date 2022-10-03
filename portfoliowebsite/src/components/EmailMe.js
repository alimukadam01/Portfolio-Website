import React from 'react';
import './EmailMe.css';
import emailjs from 'emailjs-com';


function EmailMe() {

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
    <div className='emailMe-container'>
        <form onSubmit={sendEmail}>
            <h3>Place an Order!</h3>
            <input type="text" name='name' placeholder='Your Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <input type="text" name='phone' placeholder='Your Phone No.' required/>
            <textarea name='message' rows="4" placeholder="What's on your mind?"></textarea>
            <button className="btn btn-outline-dark" type='submit'>Send</button>
        </form>
    </div>
  )
}

export default EmailMe;