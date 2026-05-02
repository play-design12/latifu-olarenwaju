import "./photos.css";
import { useState } from "react";

const images = Object.values(
  import.meta.glob("../assets/images/*.{jpg,jpeg,png}", { eager: true })
).map((img) => img.default);

export default function Photoshoots() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="photos-page">
      {/* <div className="sidebar">
        <h2>Latifu Olarenwaju</h2>
        <p>Fashion model</p>

        <div className="menu">
          <p>Home</p>  
          <p>About</p>
          <p>Contact</p>
        </div>
      </div> */}

      <div className="gallery">
        {images.map((img, i) => (
          <div key={i} className="card" onClick={() => setSelected(img)}>
            <img src={img} alt="shoot" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <img src={selected} alt="full" />
        </div>
      )}
    </div>
  );
}