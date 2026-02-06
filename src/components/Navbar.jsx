import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  /*
  function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = easing(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easing(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  var skillsLink = document.querySelector('nav a[href="#skills"]');
  skillsLink.addEventListener('click', function() {
    smoothScroll('#skills', 1000);
  })

  var experienceLink = document.querySelector('nav a[href="#experience"]');
  experienceLink.addEventListener('click', function() {
    smoothScroll('#experience', 1000);
  })
*/
  function projectsPage() {
    useNavigate(`/projects`);
  }
    

  return (
    <nav className="navbar">
      <strong className="title">CHuang</strong>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
