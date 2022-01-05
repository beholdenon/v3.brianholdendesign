import React from 'react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import './Contact.scss';

function Contact(props) {
  const clearPlaceholder = (id) => {
    document.getElementById(id).setAttribute('placeholder', '');
  }

  const setPlaceholder = (id, text) => {
    document.getElementById(id).setAttribute('placeholder', text);
  }

  ContactForm();

  return (
    <div className="section contact">
      
      <SectionHeader headline={props.landingItems[0].fields.connectHeadline} description={props.landingItems[0].fields.connectDescription} />

      <form id="contact-form" method="post" action="/contact" data-aos="fade-up" data-aos-duration="600">
        <div className="form"  data-aos="fade-up" data-aos-duration="600">
        <div className="row-2">
          <input className="input-field" type="text" id="fname" name="fname" placeholder="Name" onFocus={() => clearPlaceholder('fname')} onBlur={() => setPlaceholder('fname', 'Name')} />
          <input className="email" type="text" id="email" name="email" placeholder="Email" onFocus={() => clearPlaceholder('email')} onBlur={() => setPlaceholder('email', 'Email')} />
        </div>
        <textarea name="message" id="message" rows="30" placeholder="Message" onFocus={() => clearPlaceholder('message')} onBlur={() => setPlaceholder('message', 'Message')}></textarea>
        <input type="submit" className="button" value="Send" />
        </div>
      </form>
    </div>
 );
}

export default Contact;