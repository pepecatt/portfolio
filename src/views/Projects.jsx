import Navbar from "../components/Navbar";
import "./Projects.css";

function ProjectsView() {
  return (
    <>
      <Navbar />
      <h1 className="projects-h1">Projects</h1>
      <div className="projects-list">
        <div className="project-card">
          <div className="project-card-text">
            <h3>Electric Skateboard Tail Light System</h3>
            <p>
              Designed and implemented the tail light system using the
              ATmega328P microcontroller, designed PCB in KiCad, soldered SMD
              components, verified functionality using a multimeter and
              oscilloscope.
            </p>
            <ul className="project-skills">
              <li>PCBs </li>
              <li>Microcontrollers: ATmega328P</li>
              <li>Soldering </li>
              <li>
                <img src="src\icons\icons3\KiCad-Logo.svg"></img>
                KiCad
              </li>
            </ul>
            <p className="read-more"> Schematics and more →</p>
          </div>
          <img src="src\images\proj-electrium\mergedlights.jpg"></img>
        </div>

        <div className="project-card">
          <div className="project-card-text">
            <h3>This Website</h3>
            <p>
              A self-coded portfolio website to showcase my skills and projects. A fun
              passion project!
            </p>
            <ul className="project-skills">
              <li>
                <img src="src\icons\icons2\react-svgrepo-com.svg" />
                React
              </li>
              <li>
                <img src="src\icons\icons1\html-5-svgrepo-com.svg" />
                HTML
              </li>
              <li>
                <img src="src\icons\icons1\css-3-svgrepo-com.svg" />
                CSS
              </li>
              <li>
                <img src="src\icons\icons1\javascript-svgrepo-com.svg" />
                JavaScript
              </li>
            </ul>
            <p className="read-more"> Github link →</p>
          </div>
          <img src="src\images\proj-electrium\mergedlights.jpg"></img>
        </div>

        <div className="project-card">
          <div className="project-card-text">
            <h3>(Current) Aircraft </h3>
            <p>
              ddddd
            </p>
            <ul className="project-skills">
              <li>PCBs </li>
              <li>Microcontrollers: ATmega328P</li>
              <li>Soldering </li>
              <li>
                <img src="src\icons\icons3\KiCad-Logo.svg"></img>
                KiCad
              </li>
            </ul>
            <p className="read-more"> Schematics and more →</p>
          </div>
          <img src="src\images\proj-electrium\mergedlights.jpg"></img>
        </div>
        
      </div>
    </>
  );
}

export default ProjectsView;
