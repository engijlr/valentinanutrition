import { Link } from "react-router-dom";
import Logo from "../assets/logo2.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="...">
            Recipes
          </Link>
          <Link className="link" to="...">
            Services
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
