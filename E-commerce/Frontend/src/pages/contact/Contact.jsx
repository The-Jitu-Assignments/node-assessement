import React from 'react';
import './contact.css';
import { AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

const style = {
  size: '2em',
}

const Contact = () => {
  return (
    <div className='contact--page'>
      <h2>
        Contact Us
      </h2>
      <div className='contact--details'>
        You can reach us through the following links.
      </div>
      <div className='contact--icons'>
        <AiFillLinkedin size={'2rem'} />
        <AiFillTwitterSquare size={'2rem'} />
        <AiFillInstagram size={'2rem'} />
      </div>
    </div>
  )
}

export default Contact;