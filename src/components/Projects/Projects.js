import { React, useEffect, useRef, useState } from "react";
import "./Projects.css";
import Project_data from "./../../data/Project_data.json";

import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function FadeInSection(props) {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    
    return (
      <div
        className={`fade-in-section project-card-container ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }


const project_images = importAll(require.context('./../../images/project_images', false, /\.(png|jpe?g|svg)$/));


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
function LinksButton(props) {
    // return (
    //     <div className="links-button">
    //         <FontAwesomeIcon icon={props.icon} className="links-button-icon" />
    //         <p className="links-button-text">{props.text}</p>
    //     </div>
    // );
    function open_link() {
        // console.log(props);
        window.open(props.link);
    }

    if (props.link !== 0) {
            return (<button className="project-card-links-individual clickable" onClick={open_link}>
        <FontAwesomeIcon icon={props.icon} className="about-me-button-icon" />
        <p>
            {props.title}
        </p>
    </button>);
    }
    else{
        return(<></>);
    }
}


function ProjectCard(props) {
    // return(
    //     <div className="project-card">
    //         <div className="project-card-image-holder">
    //             <img className="project-card-image" src ={project_images[props.image]}></img>
    //         </div>
    //         <div className="project-card-text-holder">
    //             <p className="project-card-title">{props.title}</p>
    //             <p className="project-card-description">{props.description}</p>
    //             <div className="project-card-clickables">
    //                 <button className="project-card-button clickable">View Project</button>
    //                 <button className="project-card-button clickable">View Code</button>
    //             </div>
    //         </div>
    //     </div>
    // );
    const handleSearch = (algorithm, task) => {
        const addOn = task ? `+for+${task}` : "";
        const searchQuery = `https://www.google.com/search?q=${algorithm}${addOn}`;
        window.open(searchQuery);
    };
    const algorithms_used = props.algorithms.map((algorithm, index) => {
        return (<p className="project-card-algorithm-used-individual clickable" key={index} onClick={() => handleSearch(algorithm, props.task)}>{algorithm}</p>);
    }, []);



    const ref = useRef(null);

    const [height, setHeight] = useState(0);
    // const [width, setWidth] = useState(0);

    useEffect(() => {
        setHeight(ref.current.offsetHeight);
        // setWidth(ref.current.offsetWidth);

        // 👇️ if you need access to parent
        // of the element on which you set the ref
        // console.log(ref.current);
        // console.log(ref.current.offsetHeight);
        // console.log(ref.current.offsetWidth);
    }, []);
    const hover_height = {
        "minHeight": 325 - height,
    };
    // console.log(hover_height)

    return (
        // <div className="project-card-container">
        <FadeInSection>
            <div className="project-card-image-holder-new" style={hover_height}>
                <img className="project-card-image-new" src={project_images[props.image]} alt=""></img>
            </div>
            <div className="project-card-text-container" ref={ref}>
                <p className="project-card-title-new">{props.title}</p>
                <div className="project-card-algorithms">
                    {algorithms_used}
                </div>
                <p className="project-card-description">{props.description}</p>
                <div className="project-card-links">
                    <LinksButton icon={faGithub} link={props.links.Github} title="View Code" />
                    <LinksButton icon={faFileLines} link={props.links.Documentation?props.links.Documentation:0} title="View Docs"/>
                </div>
            </div>
        </FadeInSection>
        // </div>

    );

}

function Projects() {
    const project_cards = Project_data.map((project, index) => {
        return (<ProjectCard key={index} image={project.Image ? project.Image : "default.png"} title={project.Name} description={project.Description} algorithms={project.Algorithms} task={project.Task} links={project.Links} />);
    }, []);

    return (
        <>
            <AboutMeTitle title="My Projects" />
            <div className="projects-card-holder">
                    {project_cards}
            </div>

        </>
    );
}

export default Projects;