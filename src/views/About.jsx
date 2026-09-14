import Navbar from "../components/Navbar";
import "./About.css";
import { assets } from "../assets";

function AboutView() {
  return (
    <>
      <div className="bar">
        <Navbar />
      </div>
      <div className="main-page">
        <section id="hero" className="hero">
          <div className="hero-container">
            <div className="hero-left">
              <img className="portrait" src={assets.about.portrait}></img>
              <div className="hero-buttons">
                <a
                  className="resume-btn"
                  href={assets.about.resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="resume" src={assets.about.downloadIcon}></img>
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/catherine-huang-3b6449348/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedin"
                    src={assets.about.linkedinIcon}
                  ></img>
                </a>
                <a
                  href="https://github.com/pepecatt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="github" src={assets.about.githubIcon}></img>
                </a>
                <a
                  href="mailto:c365huan@uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="email" src={assets.about.emailIcon}></img>
                </a>
              </div>
            </div>
            <div className="hero-right">
              <h1 className="name1">Catherine</h1>
              <h1 className="name2">Huang</h1>
              <p className="about-me">
                Nanotechnology Engineering student at the University of
                Waterloo, I'm curious and excited to explore everything my
                degree offers! I'm passionate about learning and trying new
                things, getting out of my comfort zone and becoming the best
                version of myself.
              </p>
              <p className="about-me2">
                One of the ways I'm working towards that is by gaining new
                skills, whether it's through student design teams or my own
                personal projects (such as this website!)
              </p>
              <p className="about-me3">
                In my free time, I like listening to music, reading fiction
                novels, and drinking bubble tea!
              </p>
            </div>
          </div>
        </section>

        <section id="skills" href="skills">
          <h1>Skills</h1>
          <p>Highlighted are the skills I'm learning right now!</p>
          <div className="skills-div">
            <h3>Programming</h3>
            <ul className="skills-icons">
              <li>
                <img src={assets.skills.pythonIcon} alt="Python" />
                Python
              </li>
              <li>
                <img src={assets.skills.javaIcon} alt="Java" />
                Java
              </li>
              <li className="learning">
                <img src={assets.skills.cIcon} alt="C" />C
              </li>
              <li className="learning">
                <img src={assets.skills.cppIcon} alt="C++" />
                C++
              </li>
              <li className="learning">
                <img src={assets.skills.RIcon} alt="R" />R
              </li>
              <li>
                <img src={assets.skills.htmlIcon} alt="HTML" />
                HTML
              </li>
              <li>
                <img src={assets.skills.cssIcon} alt="CSS" />
                CSS
              </li>
              <li>
                <img src={assets.skills.jsIcon} alt="JavaScript" />
                JavaScript
              </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Frameworks & Tools</h3>
            <ul className="skills-icons">
              <li>
                <img src={assets.skills.reactIcon} alt="React" />
                React
              </li>
              <li>
                <img src={assets.skills.numpyIcon} alt="Numpy" />
                Numpy
              </li>
              <li>
                <img src={assets.skills.pandasIcon} alt="Pandas" />
                Pandas
              </li>
              <li>
                <img src={assets.skills.firebaseIcon} alt="Firebase" />
                Firebase Auth
              </li>
              <li>
                <img src={assets.skills.imdbIcon} alt="IMDb API" />
                IMDb API
              </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Software</h3>
            <ul className="skills-icons">
              <li>
                <img src={assets.skills.solidworksIcon} alt="SolidWorks" />
                SolidWorks
              </li>
              <li>
                <img src={assets.skills.matlabIcon} alt="MATLAB" />
                MATLAB
              </li>
              <li>
                <img src={assets.skills.excelIcon} alt="Excel" />
                Excel
              </li>
              <li>
                <img src={assets.skills.wordIcon} alt="Word" />
                Word
              </li>
              <li>
                <img src={assets.skills.gitIcon} alt="Git" />
                Git & GitHub
              </li>
              <li>
                <img src={assets.skills.vscodeIcon} alt="VS Code" />
                VS Code
              </li>
              <li>
                <img src={assets.skills.intellijIcon} alt="IntelliJ" />
                IntelliJ
              </li>
              <li>
                <img src={assets.skills.kicadIcon} alt="KiCad" />
                KiCad
              </li>
              <li>
                <img src={assets.skills.stm32Icon} alt="STM32CubeIDE" />
                STM32CubeIDE
              </li>
              <li className="learning">
                <img src={assets.skills.shopifyIcon} alt="Shopify" />
                Shopify
              </li>
              <li>
                <img src={assets.skills.photoshopIcon} alt="Photoshop" />
                Adobe Photoshop
              </li>
              <li>
                <img src={assets.skills.afterEffectsIcon} alt="After Effects" />
                Adobe After Effects
              </li>
              <li>
                <img src={assets.skills.capcutIcon} alt="CapCut" />
                CapCut
              </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Hardware & Lab</h3>
            <ul className="skills-hl">
              <li>PCBs, </li>
              <li>Microcontrollers: ATmega328P,</li>
              <li>Soldering, </li>
              <li>3D Printing, </li>
              <li>Breadboarding, </li>
              <li>Micropipetting </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Languages</h3>
            <ul className="skills-hl">
              <li>English, </li>
              <li className="learning">French (B1), </li>
              <li>Chinese (Intermediate)</li>
            </ul>
          </div>
        </section>

        <section id="about-experience">
          <h1>Experience</h1>

          <div className="experience-cards-div">
            {/* DATA ANALYST */}
            <article className="experience-card">
              <div className="experience-sidebar">
                <p className="experience-type">Research Experience</p>

                <h2>Data Analyst</h2>

                <div className="experience-workplace">
                  <h3>Yip Lab</h3>
                  <p>Donnelly Centre for Cellular and Biomolecular Research</p>
                  <p>University of Toronto</p>
                </div>

                <div className="experience-meta">
                  <p>May – August 2026</p>
                  <p>Toronto, ON</p>
                </div>
              </div>

              <div className="experience-content">
                <p className="experience-summary">
                  Developed an interactive Python tool that enabled a team of
                  six postgraduate researchers to analyze and visualize
                  time-resolved fluorescence microscopy data
                </p>

                <ul className="experience-points">
                  <li>
                    Developed an interactive Python and Napari tool to visualize
                    fluorescence microscopy data, molecular trajectories, and
                    anisotropy changes over time
                  </li>

                  <li>
                    Built a NumPy and Pandas data-processing pipeline to parse
                    ImageJ TrackMate XML outputs and quantify particle
                    displacement, speed, direction, trajectory duration, and
                    frame-by-frame motion
                  </li>

                  <li>
                    Implemented trajectory classification and interactive
                    visualization features, including vector fields, particle
                    paths, anisotropy profiles, and per-track statistics, to
                    help researchers examine particle behaviour and movement
                    patterns
                  </li>
                </ul>
              </div>
            </article>

            {/* DEAR DAISIE */}
            <article className="experience-card">
              <div className="experience-sidebar">
                <p className="experience-type">Entrepreneurship</p>

                <h2>Co-Founder</h2>

                <img
                  className="deardaisie-logo"
                  src={assets.experience.dearDaisieLogo}
                  alt="Dear Daisie"
                />

                <div className="experience-meta">
                  <p>December 2025 – Present</p>
                  <p>Remote</p>
                </div>
              </div>

              <div className="experience-content">
                <p className="experience-summary">
                  Co-founded a meaningful gift brand, Dear Daisie, selling 20+
                  plush flower bouquets accompanied by original narratives
                  inspired by each flower's symbolism
                </p>

                <ul className="experience-points">
                  <li>
                    Designed the brand’s website using Lovable and integrated
                    Shopify to support online product sales.
                  </li>

                  <li>
                    Managed social media marketing and coordinated with a
                    manufacturer to transform conceptual designs into finished
                    products.
                  </li>
                </ul>

                <a
                  className="experience-link"
                  href="https://www.deardaisie.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit deardaisie.com →
                </a>
              </div>
            </article>
          </div>

          <a className="seemore-btn" href="/experience">
            See photos →
          </a>
        </section>

        <section id="projects">
          <div className="section-heading">
            <h1>Featured Projects</h1>
          </div>

          <div className="projects-div">
            <article className="featproject-card">
              <div className="project-image-container">
                <img
                  src={assets.electrium.pcb3DView}
                  alt="Electric skateboard tail light PCB"
                />

              </div>

              <div className="featproject-content">
                <h2>Electric Skateboard Tail Light System</h2>

                <p className="project-description">
                  Designed an automatic braking indicator using an ATmega328P
                  microcontroller and accelerometer, including a custom PCB
                  designed in KiCad and assembled using SMD soldering.
                </p>

                <div className="project-footer">
                  <p>ATmega328P · KiCad · PCB Design</p>

                  <a className="read-more" href="/projects">
                    View schematics →
                  </a>
                </div>
              </div>
            </article>

            <article className="featproject-card">
              <div className="project-image-container">
                <img
                  src={assets.imdb.imdbWeb}
                  alt="Film database web application"
                />

              </div>

              <div className="featproject-content">
                <h2>Film Database Web Application</h2>

                <p className="project-description">
                  Developed a streaming-inspired web application that retrieves
                  movie information from an IMDb API and uses Firebase
                  Authentication to support personalized user accounts.
                </p>

                <div className="project-footer">
                  <p>React · JavaScript · Firebase</p>

                  <a className="read-more" href="/projects/#filmweb">
                    View project →
                  </a>
                </div>
              </div>
            </article>
          </div>

          <a className="seemore-btn" href="/projects">
            See all projects →
          </a>
        </section>
      </div>


      <footer className="footer">
        <p>© 2026 Catherine Huang · Built with React</p>
      </footer>
    </>
  );
}

export default AboutView;
