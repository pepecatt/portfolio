import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <strong className="title">CHuang</strong>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;