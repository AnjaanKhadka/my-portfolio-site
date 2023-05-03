import React from "react";

import "./AboutMe.css";
import logo from "./../../images/profile-photo.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faDownload } from '@fortawesome/free-solid-svg-icons'



// aaaunuhos jaan banau: cfpg'; hfg agf{"}"}F

function OpenCVFile(){
    window.open('https://drive.google.com/file/d/1DRFZjOMomMxj-exCvu7BwUXbjFYLu5dy/view?usp=share_link')
}

function ClickableButton(props) {
    // console.log(props.f)
    return (
        <button className="about-me-button clickable" onClick={props.f}>
            <div className="about-me-button-div">
                <FontAwesomeIcon icon={props.icon} className="about-me-button-icon" />
                <p>{props.text}</p>
            </div>
        </button>
    )
}


function AboutMeTitle() {

    return (
        <div className="about-me-title-holder">
            <div className="about-me-title">
                <p className="about-me-title-nepali">hfg agf{"}"}F</p>
                <p className="about-me-title-english">Get to Know Me</p>
            </div>
        </div>
    );
}



function AboutMeBody(props) {

    return (
        <div className="about-me-card-holder">
            <div className="about-me-text-card">
                <p className="about-me-text-description">
                    Hi! I am Anjaan Khadka, a Computer engineer keen on AI, Ml, deep learning, data science, and slightly in Web Development. I would be happy to be helpful in any of my topics of interest. Want to know more? Feel free to contact me.
                </p>
                <div className="about-me-clickables">
                    <ClickableButton icon={faDownload} text="Get My CV" f={OpenCVFile}/>
                    <ClickableButton icon={faMessage} text="Message Me" f={props.f3}/>


                    {/* <button className="about-me-get-my-cv">
                        Get My CV
                    </button>
                    <button className="about-me-contact-me">
                        <FontAwesomeIcon icon={faMessage}/>
                        <p>Message Me</p>
                    </button> */}
                </div>
            </div>
            <img className="about-me-image" src={logo} alt="Anjaan Khadka"></img>
        </div>
    )
}



function AboutMe(props) {
    
    return (
        <>
            <div className="Navbar-adjustment-padding">

            </div>
            <AboutMeTitle />
            <AboutMeBody f3={props.f3}/>
        </>
    );
}


export default AboutMe;