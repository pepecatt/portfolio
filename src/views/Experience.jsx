import Navbar from "../components/Navbar";
import "./Experience.css";
import { assets } from "../assets";

function ExperienceView() {
  return (
    <>
      <div className="bar">
        <Navbar />
      </div>

      <main className="experience-page">
          <h1>Experience</h1>

        <section className="experience-card">
          <div className="accent-line" aria-hidden="true" />

          <div className="card-header">
            <div>
              <p className="company">Yip Lab, Donnelly Centre for Cellular & Biomolecular Research, University of Toronto</p>
              <h2>Data Analyst</h2>
            </div>

            <div className="meta">
              <span>May – August 2026</span>
              <span>Toronto, ON</span>
            </div>
          </div>

          <div className="card-body">
            <div className="summary">
              <h3>What I worked on</h3>
              <p>
                Developed an interactive Python tool that enabled a team of six 
                postgraduate researchers to analyze and visualize time-resolved 
                fluorescence microscopy data.
              </p>
            </div>

            <div className="highlights">
              <h3>Key contributions</h3>
              <ul>
                <li>
                  <span>01</span>
                  Developed an interactive Python and Napari tool to visualize 
                  fluorescence microscopy data, molecular trajectories, and anisotropy 
                  changes over time.
                </li>
                <li>
                  <span>02</span>
                  Built a NumPy and Pandas data-processing pipeline to parse ImageJ 
                  TrackMate XML outputs and quantify particle displacement, speed, 
                  direction, trajectory duration, and frame-by-frame motion.
                </li>
                <li>
                  <span>03</span>
                  Implemented trajectory classification and interactive visualization 
                  features including vector fields, particle paths, anisotropy profiles, 
                  and per-track statistics, to help researchers examine particle 
                  behaviour and movement patterns
                </li>
              </ul>
            </div>
          </div>

          <div className="tool-preview">
            <div className="screenshot-container">
              <img
                src={assets.experience.visualization}
                alt="Screenshot of the microscopy data visualization tool"
              />
            </div>
          </div>

          <div className="experience-skills">
              <li>
                <img src={assets.skills.pythonIcon} />
                Python
              </li>
              <li>
                <img src={assets.skills.numpyIcon} />
                Numpy
              </li>
              <li>
                <img src={assets.skills.pandasIcon} />
                Pandas
              </li>
              <li>Data Analysis</li>
          </div>
        </section>
      </main>
    </>
  );
}

export default ExperienceView;
