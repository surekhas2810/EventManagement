
import React, { useState, useEffect } from 'react';

import './Firstpage.css'

const Firstpage = () => {
    const slides = [
        {
            imageUrl: 'https://iglowstudioz.com/wp-content/uploads/2024/02/Preserving-Traditions-A-Guide-to-Muslim-Wedding-Photography.jpg',
            text: 'Join Us in Celebration',
        },
        {
            imageUrl: 'https://www.wedabout.com/blog/wp-content/uploads/2023/01/Haldi-photoshoot-poses-with-family-for-haldi-ceremony-photography.jpg',
            text: 'Welcome to Our Wedding',
        },
        {
            imageUrl: 'https://media.weddingz.in/images/26d6a53998b7cdf801678e13120329cc/fRH3MmrXm5wo5Fd4bptbwNmU-LdLbTLYiOj-Fag9VlowrrH7VxrOKBFhSqgDoLlk6xMdMDHxg6hg2T5ulBfUmY6uPfFl-uPZYzp8UfFYWYaflb09XY8vS2eNoBAjEmskLNnQ0RMK.jpg',
            text: 'Welcome to Our Wedding',
        },
        {
            imageUrl: 'https://static.wixstatic.com/media/b63811_2898a623ab8f43cfbacb3e276bc7fcad~mv2.jpg/v1/fill/w_1000,h_668,al_c,q_85,usm_0.66_1.00_0.01/b63811_2898a623ab8f43cfbacb3e276bc7fcad~mv2.jpg',
            text: 'Welcome to Our Wedding',
        },
        {
            imageUrl: 'https://static.showit.co/800/d_dinKY2SYCYQjlCKwczyg/29480/kevin_de_bruyne_wedding_photo_wide.jpg',
            text: 'A Day to Remember',
        },
        {
            imageUrl: 'https://images.indianexpress.com/2021/12/anushka-virat-.jpg',
            text: 'A Day to Remember',
        },
        {
            imageUrl: 'https://images.squarespace-cdn.com/content/v1/55efedb8e4b031210ec86fd2/1571933496252-LEN41KY0LPOADTOVX47O/Lemore+Manor+Hereford+Wedding-87.jpg',
            text: 'A Day to Remember',
        },
        {
            imageUrl:'https://assets.cntraveller.in/photos/63e673a64c3e2f7896a1caec/16:9/w_1280,c_limit/Sid%20and%20Kiara.jpg',
            text: 'A Day to Remember',
        },
        
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };
    
        const [events, setEvents] = useState(0);
        const [clients, setClients] = useState(0);
        const [videos, setVideos] = useState(0);
        const [images, setImages] = useState(0);
      
        useEffect(() => {
          const duration = 2000; // duration of the animation in milliseconds
          const stepTime = duration / 385; // steps for events (use the max number)
          
          let start = 0;
          const timer = setInterval(() => {
            start += 1;
            setEvents((prev) => (prev < 385 ? start : 385));
            setClients((prev) => (prev < 325 ? start : 325));
            setVideos((prev) => (prev < 568 ? start : 568));
            setImages((prev) => (prev < 8593 ? start * 22 : 8593)); 
      
            if (start >= 385) { // Clear interval when the max is reached
              clearInterval(timer);
            }
          }, stepTime);
      
          return () => clearInterval(timer);
        }, []);
    return (
        <>
        <div className="slider">
            <div
                className="slides"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundImage: `url(${slide.imageUrl})` }}
                    >
                        <div className="text">{slide.text}</div>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
            </div>
        {/* <div class="more-about">
            <h3>SKIDDLE EVENTS</h3>
            <h1>A Complete Event Management Solution</h1>
            <p>The most successful event is the one that achieves your goals and exceeds your expectations. Sakura Events does just that!</p>
        </div> */}
        <div className="event-intro">
  <p className="event-text">SKIDDLE EVENTS</p>
  <h1>A Complete Event Management Solution</h1>
  <p className="large-text">The Most Successful Event Is The One That Achieves Your Goals And Exceeds Your Expectations.</p>
  <p className="small-text">Sakura Events Does Just That!</p>
  <button className="read-more-btn">Read More About</button>
</div>
<div className="mission-statement">
      <h2>Mission Statement</h2>
      <p>Sakura Events’ primary mission is to plan and execute outstanding events for each client with exceptional professionalism and utmost attention to budgets and details.</p>
      <div className="stats">
        <div>
          <h3>{events}</h3>
          <p>Events</p>
        </div>
        <div>
          <h3>{clients}</h3>
          <p>Clients</p>
        </div>
        <div>
          <h3>{videos}</h3>
          <p>Videos</p>
        </div>
        <div>
          <h3>{images}</h3>
          <p>Images</p>
        </div>
      </div>
    </div>

        </>
    );
};

export default Firstpage;
