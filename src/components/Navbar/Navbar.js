import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

// function ScrollToAboutMe() {
//   const AboutMe_id = document.getElementById('AboutMe');
//   if (AboutMe_id) {
//     AboutMe_id.scrollIntoView({ behavior: 'smooth' });
//   }
// }
// function ScrollToProjects() {
//   const Projects_id = document.getElementById('Projects');
//   if (Projects_id) {
//     Projects_id.scrollIntoView({ behavior: 'smooth' });
//   }
// }

// function ScrollToContactMe() {
//   console.log('ScrollToContactMe')
//   const ContactMe_id = document.getElementById('ContactMe');
//   console.log(ContactMe_id)
//   if (1) {
//     ContactMe_id.scrollIntoView({ behavior: 'smooth' });
//   }
// }



function Navbar(props) {
 
  const iconStyle = {
    color: props.theme?"#1F271B":"#EFF7F6"
  }
  const backgroundStyle = {
    // backgroundImage: props.theme?"linear-gradient(#EFF7F6,#EFF7F6,95%, #eff7f600)":"linear-gradient(#1b3130,#1b3130,95%, #1b313000)"
    backgroundColor: props.theme?"#EFF7F6":"#1b3130"
  }
  return (
    <div className="navbar" style={backgroundStyle}>
      <h1 className="name-title clickable" onClick={props.f1}>cGhfg v8\sf</h1>
      <div className="links">
        <p className="link-item clickable" onClick={props.f2}>Projects</p>
        <p className="link-item clickable" onClick={props.f3} val1={"ContactMe"}>Contact Me</p>
        <div>
        <FontAwesomeIcon icon={props.theme?faMoon:faSun} style={iconStyle} className="theme-icon clickable" size="xl" onClick={props.toggleTheme} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;