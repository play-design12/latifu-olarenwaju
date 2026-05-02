import "./Hero.css";
import hero from "../assets/images/hero.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          LATIFU OLARENWAJU,<br />
          FASHION MODEL
        </h1>

        <p className="location">IRE & WORLDWIDE</p>

        <p className="cta">
          Hire me for your extraordinary projects!<br />
          <span>
            For inquiries, bookings, or collaborations, please don't hesitate
            to contact my agent.
          </span>
        </p>

        <button className="arrow-btn" onClick={() => navigate("/contact")}>
          →
        </button>
      </div>

      <div className="hero-right">
        <div className="image-frame">
          <img src={hero} alt="model" />
        </div>
      </div>
    </div>
  );
}