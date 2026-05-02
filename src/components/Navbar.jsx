import { Link } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Latifu Olarenwaju</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/photoshoots">Photoshoots</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}