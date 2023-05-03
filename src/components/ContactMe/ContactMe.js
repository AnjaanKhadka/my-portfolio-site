import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

function AboutMeTitle(props) {
    return (
        <div className="segment-title-holder">
            <div className="segment-title">
                <p className="segment-title-text">{props.title}</p>

                {/* <p className="about-me-title-english">Get to Know Me</p> */}
            </div>
        </div>
    );
}

function ContactInfoIndividual(props) {
    // console.log(props.info)
    const contact_info = props.info!==""? <p className='contact-description'>{props.info}</p>:'';
    return (
        <div className='contact-info-individual-container'>
            <p className='contact-type-header'>{props.title}</p>
            {contact_info}
        </div>
    );
}



function OtherContactIndividual(props){
    function GotoLink(){
        window.open(props.link);
    }
    return(
        <FontAwesomeIcon icon={props.icon} className='other-contact-icon clickable' onClick={GotoLink}/>
    );
}

function OtherContacts(){
    return(
        <div className='other-contacts-container'>
            <OtherContactIndividual icon={faGithub} link="https://github.com/AnjaanKhadka"/>
            <OtherContactIndividual icon={faLinkedin} link="https://www.linkedin.com/in/anjaan-khadka"/>
            <OtherContactIndividual icon={faInstagram} link="https://www.instagram.com/khadka_anjaan/"/>
        </div>
    );
}


function ContactInfo() {
    return (
        <div className='contact-info-container'>
            <ContactInfoIndividual title='Email' info='njn6171@gmail.com' />
            <ContactInfoIndividual title='Phone' info='(977) 9803121230' />
            <ContactInfoIndividual title='Other Contacts' info='' />
            <OtherContacts/>
        </div>
    );
}

function MailMe() {

    const form = useRef();

    // console.log(form)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_3jwwvf7', 'template_zqoys7r', form.current, 'WSPNTtqSCZJ1ERoPt')
            .then((result) => {
                console.log(result.text); 
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='mail-me-container'>
            <form ref={form} onSubmit={sendEmail} className='mail-me-form'>
                {/* <label className='mail-me-form-label'>Name</label> */}
                <input type="text" name="from_name" className='mail-me-input-field' placeholder='Your Name' required minLength={4}/>
                {/* <label className='mail-me-form-label'>Email</label> */}
                <input type="email" name="from_mail" className='mail-me-input-field' placeholder='Your Email' required/>
                {/* <label className='mail-me-form-label'>Message</label> */}
                <textarea name="message"  rows='5' className='mail-me-message-field' placeholder='Your message'required minLength={20}/>
                <input type="submit" value="Send" className='contact-me-submit-btn clickable'/>
            </form>
        </div>
    );
}



function ContactMe(props) {

    return (
        <div>
            <AboutMeTitle title="Contact Me"/>
            <div className='contact-me-container'>
                <div className='contact-me-contents'>
                <ContactInfo />
                <MailMe />
                </div>
            </div>
        </div>
    );
};

// export default forwardRef(ContactMe);
export default ContactMe;
