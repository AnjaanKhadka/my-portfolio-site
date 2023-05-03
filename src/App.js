import { React, useRef,useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';





function App() {

  const AboutMe_ref = useRef(null);
  const Projects_ref = useRef(null);
  const ContactMe_ref = useRef(null);

  function ScrollToAboutMe() {
    AboutMe_ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  function ScrollToProjects() {
    Projects_ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  function ScrollToContactMe() {
    ContactMe_ref.current.scrollIntoView({ behavior: 'smooth' });
  }
  const current = new Date().getHours();
  const [isDay,toggleTheme] = useState((current<18 && current>6));
  // console.log(isDay);
  const ChangeTheme = () => {
    console.log('ChangeTheme');
    toggleTheme(!isDay);
  }

  // callback()
  // console.log(isDay);
  const systemTheme = {
    backgroundColor: isDay?"#EFF7F6":"#1b3130",
    color: isDay?"#1F271B":"#EFF7F6"
  }



  return (
    <div className='main-body' style={systemTheme}>

      <Navbar f1={ScrollToAboutMe} f2={ScrollToProjects} f3={ScrollToContactMe} theme={isDay} toggleTheme={ChangeTheme}/>
      <div ref={AboutMe_ref}>
        <AboutMe f3={ScrollToContactMe}/>
      </div>
      <div ref={Projects_ref}>
        <Projects />
      </div>
      <div ref={ContactMe_ref}>
        <ContactMe />
      </div>

    </div>
  );
}

export default App;
