import React from 'react';
import "../styles/Contact.css";
import PizzaLeft from "../assets/pizzaLeft.jpg";

function Contact() {
  return (
    <div className='contact'>
        <div 
            className='leftSide'
            style={{backgroundImage: `url(${PizzaLeft})`}}
        ></div>
        <div className='rightSide _container'>
            <h1>Contact Us</h1>
            <form id="contact-form" method='POST'>
                <label htmlFor='name'>Full name</label>
                <input name='name' type='text' placeholder='Enter Full name...'/>
                <label htmlFor='email'>Email</label>
                <input name='email' type='email' placeholder='Enter Email...'/>
                <label htmlFor='message'>Message</label>
                <textarea required name='message' rows="6"></textarea>
                <button type='submit'>
                    Send Message
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact