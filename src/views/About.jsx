import Navbar from "../components/Navbar";
import "./About.css";

function AboutView() {
  return (
    <>
      <Navbar />
      <div className="main-page">
        <section id="hero" className="hero">
          <div className="hero-left">
            <img className="portrait" src="/src/images/portrait.jpeg"></img>
            <div className="hero-buttons">
              <a className="resume-btn" href="" target="_blank">
                <img className="resume" src="src\icons\apps\download-minimalistic-svgrepo-com.svg"></img>
                Resume
              </a>
              <button
                href="https://www.linkedin.com/in/catherine-huang-3b6449348/"
                target="_blank"
              >
                <img 
                  className="linkedin"
                  src="src\icons\apps\linkedin-svgrepo-com.svg"></img>
              </button>
              <button href="https://github.com/pepecatt" target="_blank">
                <img
                  className="github"
                  src="src\icons\apps\github-142-svgrepo-com.svg"
                ></img>
              </button>
              <button href="mailto:c365huan@uwaterloo.ca" target="_blank">
                <img 
                className="email"
                src="src\icons\apps\mail-svgrepo-com.svg"></img>
              </button>
            </div>
          </div>
          <div className="hero-right">
            <h1 className="name1">Catherine</h1>
            <h1 className="name2">Huang</h1>
            <p className="about-me">
              Nanotechnology Engineering student at the University of Waterloo,
              I'm curious and excited to explore everything my degree offers!
              I'm passionate about learning and trying new things, getting out
              of my comfort zone and becoming the best version of myself.
            </p>
            <p className="about-me2">
              One of the ways I'm working towards that is by gaining new skills,
              whether it's through student design teams or my own personal
              projects (such as this website!)
            </p>
            <p className="about-me3">
              In my free time, I like listening to music, reading fantasy and
              mystery novels, and drinking bubble tea!
            </p>
          </div>
        </section>

        <section id="skills" href="skills">
          <h1>Skills</h1>
          <p>Highlighted are the skills I'm learning right now!</p>
          <div className="programming">
            <h2>Programming</h2>
            <ul className="programming-icons">
              <li>
                <img src="src\icons\icons1\java-svgrepo-com.svg" />
                Java
              </li>
              <li>
                <img src="src\icons\icons1\python-svgrepo-com.svg" />
                Python
              </li>
              <li className="learning">
                <img src="src\icons\icons1\C_Programming_Language.svg" />C{" "}
              </li>
              <li className="learning">
                <img src="src\icons\icons1\C++_Logo.svg" />
                C++{" "}
              </li>
              <li>
                <img src="src\icons\icons1\html-5-svgrepo-com.svg" />
                HTML{" "}
              </li>
              <li>
                <img src="src\icons\icons1\css-3-svgrepo-com.svg" />
                CSS{" "}
              </li>
              <li>
                <img src="src\icons\icons1\javascript-svgrepo-com.svg" />
                JavaScript{" "}
              </li>
            </ul>
          </div>
          <div className="frameworks-tools">
            <h2>Frameworks & Tools</h2>
            <ul className="frameworks-tools-icons">
              <li>
                <img src="src\icons\icons1\react-svgrepo-com.svg" />
                React{" "}
              </li>
              <li>
                <img src="src\icons\icons1\numpy-svgrepo-com.svg" />
                Numpy{" "}
              </li>
              <li>
                <img src="src\icons\icons1\pandas-svgrepo-com.svg" />
                Pandas{" "}
              </li>
              <li>
                <img src="src\icons\icons1\firebase.svg"></img>Firebase Auth
              </li>
              <li>
                <img src="src\icons\icons1\imdb-svgrepo-com.svg"></img>IMDb
                API{" "}
              </li>
            </ul>
          </div>
          <div className="software">
            <h2>Software</h2>
            <ul className="software-icons">
              <li>
                <img src="src\icons\icons2\solidworks.svg"></img>SolidWorks{" "}
              </li>
              <li className="learning">
                <img src="src\icons\icons2\matlab-svgrepo-com.svg"></img>
                MATLAB{" "}
              </li>
              <li>
                <img src="src\icons\icons2\excel-svgrepo-com.svg"></img>
                Excel{" "}
              </li>
              <li>
                <img src="src\icons\icons2\word-svgrepo-com.svg"></img>Word{" "}
              </li>
              <li>
                <img src="src\icons\icons2\git-svgrepo-com.svg"></img>Git &
                GitHub{" "}
              </li>
              <li>
                <img src="src\icons\icons2\vs-code-svgrepo-com.svg"></img>VS
                Code{" "}
              </li>
              <li>
                <img src="src\icons\icons2\intellij-svgrepo-com.svg"></img>
                IntelliJ IDEA{" "}
              </li>
              <li>
                <img src="src\icons\icons2\KiCad-Logo.svg"></img>KiCad{" "}
              </li>
              <li className="learning">
                <img src="src\icons\icons2\stm32.png"></img>STM32CubeIDE{" "}
              </li>
              <li>
                <img src="src\icons\icons2\photoshop-cc-logo-svgrepo-com.svg"></img>
                Adobe Photoshop{" "}
              </li>
              <li>
                <img src="src\icons\icons2\adobe-after-effects-svgrepo-com.svg"></img>
                Adobe After Effects{" "}
              </li>
              <li>
                <img src="src\icons\icons2\capcut-svgrepo-com.svg"></img>
                Capcut{" "}
              </li>
            </ul>
          </div>
          <div className="hardware-lab">
            <h2>Hardware & Lab</h2>
            <ul className="hardware-lab-icons">
              <li>PCBs, </li>
              <li>Microcontrollers: </li>
              <li>ATmega328P,</li>
              <li className="learning">STM32, </li>
              <li>Soldering, </li>
              <li>Breadboarding, </li>
              <li>Micropipetting </li>
            </ul>
          </div>
          <div className="hardware-lab">
            <h2>Languages</h2>
            <ul className="hardware-lab-icons">
              <li>English, </li>
              <li>French (B1), </li>
              <li>Chinese (Intermediate)</li>
            </ul>
          </div>
        </section>

        
      </div>
    </>
  );
}

export default AboutView;
