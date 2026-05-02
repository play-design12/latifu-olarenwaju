import "./Contact.css";
import { FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="container contact">
      <h1>Contact</h1>
      <p className="subtitle">For bookings and collaborations</p>

      <div className="contact-box">
        <a href="mailto:latifu.olarenwaju@gmail.com" className="contact-item">
          <FaEnvelope />
          <span>Email</span>
        </a>

        <a 
          href="https://instagram.com/latif_ola" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>

        <a 
          href="https://www.tiktok.com/@latif_ola" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaTiktok />
          <span>TikTok</span>
        </a>
      </div>
    </div>
  );
}