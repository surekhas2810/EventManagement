import React from 'react';
import './Homepage.css';
import abtus from "../Img/dec1.jpg"
import img1 from "../Img/img1.jpeg"
import img2 from "../Img/img2.png"
import img3 from "../Img/img10.jpeg"
import img4 from "../Img/img4.png"
import img5 from "../Img/img5.png"
import img6 from "../Img/img6.png"
import img7 from "../Img/img7.jpeg"
import img8 from "../Img/img8.png"
import img9 from "../Img/img9.png"
import wedding from "../Img/wedd.jpg"
import ent from "../Img/ent1.jpeg"
import con from "../Img/con1.jpg"
import {Link} from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="overlay">
          <h1 className="hero-text">Your Dream Event, Perfectly Planned and Flawlessly Executed.</h1>
          <button className="book-button">LET'S GET STARTED</button>
        </div>
      </div>

      
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>ABOUT US</h2>
            <p>
              Welcome to our venue management, where dreams come true. We specialize in creating
              unforgettable event experiences with beautiful settings, exceptional service, and
              attention to every detail. Our venue is the perfect place to start your forever.
            </p>
            <p>
              Whether you're planning an intimate gathering or a grand celebration, we are here to
              make your special day truly magical. Explore our services and discover why we are the
              perfect choice for your event.
            </p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="About Us" />
          </div>
        </div>
      </div>
     
     <div class="home-service">
      <h1>SERVICES</h1>
      <div class="services-container">
      <div class="service-box">
           <Link to="/Service"><img src={wedding} alt="Photography"/></Link>
            <h2>Wedding Events</h2>
            <p>We capture the best part for your special day.</p>
        </div>

        <div class="service-box">
            <img src={con} alt="Venue Selection"/>
            <h2>Conference Mettings</h2>
            <p>We help you find the perfect venue for your special day.</p>
        </div>
        <div class="service-box">
            <img src={ent} alt="Music & Entertainment"/>
            <h2>Entertainment</h2>
            <p>Live bands, DJs, and entertainment for all tastes.</p>
        </div>
        </div>
        </div>




      <div className="marquee-container">
        <h2>OUR PARTNERS</h2>
    <div className="marquee">
       <img src={img1} alt="Image1"/>
       <img src={img2} alt="Image2"/>
       <img src={img3} alt="Image3"/>
       <img src={img4} alt="Image4"/>
       <img src={img5} alt="Image5"/>
       <img src={img6} alt="Image6"/>
       <img src={img7} alt="Image6"/>
       <img src={img8} alt="Image6"/>
       <img src={img9} alt="Image6"/>
    </div>
   </div>
    </div>

    
  );
}

export default Homepage;
