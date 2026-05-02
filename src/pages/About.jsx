import "./About.css";

const images = Object.values(
  import.meta.glob("../assets/images/headshots/*.{jpg,jpeg,png}", { eager: true })
).map((img) => img.default).slice(0, 6);

export default function About() {
  return (
    <div className="about-page">
      
      {/* LEFT SIDE */}
      <div className="about-left">
        <h1>About Me</h1>

        <div className="stats">
          <p><strong>Height:</strong> 6'3"</p>
          <p><strong>Eyes:</strong> Brown</p>
          <p><strong>Hair:</strong> Black</p>
          <p><strong>Chest:</strong> 38"</p>
          <p><strong>Waist:</strong> 34"</p>
          <p><strong>Shoes:</strong> EU 48.5 / UK 12–13</p>
        </div>

        <div className="section">
          <h3>Experience</h3>
          <p>
            Modelling, Acting, Fashion Model, Stand-in / Camera Tester, 
            Background Extra.
          </p>
        </div>

        <div className="section">
          <h3>Selected Work</h3>
          <ul>
            <li>Netflix – Vikings Valhalla Season 3 (Stand-in / Camera Tester)</li>
            <li>Education in Ireland – International Ad</li>
            <li>Zero Tolerance – Department of Justice</li>
            <li>Bingo & Beats – Events Campaign</li>
            <li>UCD Take Me Out – Contestant</li>
            <li>Abbey Theatre – Allen Kiely</li>
          </ul>
        </div>

        <div className="section">
          <h3>Brands & Collaborations</h3>
          <ul>
            <li>The Shoot Ireland</li>
            <li>Humble Times Apparel</li>
            <li>Contzd</li>
            <li>DEBE</li>
            <li>Ocean1Official</li>
            <li>MLUXE</li>
            <li>Project Linkage</li>
          </ul>
        </div>

        <div className="section">
          <h3>Runway & Shows</h3>
          <ul>
            <li>DCU Fashion Show – 2022</li>
            <li>DCU Fashion Show – March 13, 2023</li>
            <li>Cultural Day Runway – May 28, 2023</li>
            <li>Black History Month Runway – Oct 7, 2023</li>
          </ul>
        </div>

        <div className="section">
          <h3>Other Roles</h3>
          <p>
            Police Officer (Twig), Basketballer (Silver)
          </p>
        </div>

        <div className="section links">
          <h3>Media</h3>
          <a href="https://youtu.be/UKcrvT6Dx4A" target="_blank">Zero Tolerance Campaign</a>
          <a href="https://youtu.be/b5nVSj5Vye4" target="_blank">Education in Ireland Ad</a>
          <a href="https://www.instagram.com/reel/DMz26sGIEbh/" target="_blank">Bingo & Beats</a>
        </div>

      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="about-right gallery">
        {images.map((img, i) => (
        <div key={i} className="card">
          <img src={img} alt="model" />
        </div>
      ))}
      </div>
    </div>
  );
} 