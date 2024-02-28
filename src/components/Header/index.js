// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="header-container">
    <li className="header-list">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="header-logo"
      />
      <p className="header-item">Wave</p>
    </li>
    <li className="header-list">
      <Link to="/" className="header-item">
        Home
      </Link>
      <Link to="/about" className="header-item">
        About
      </Link>
      <Link to="/contact" className="header-item">
        Contact
      </Link>
    </li>
  </ul>
)
export default Header
