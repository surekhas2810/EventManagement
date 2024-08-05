import React, { useState } from 'react';
import './Photography.css'
import { FaStar } from "react-icons/fa6";

import eng1 from "../Img/eng1.jpg";
import prewed2 from "../Img/prewed2.jpeg";
import rec1 from "../Img/rec1.jpeg";
import rec2 from "../Img/rec2.jpeg";
import prewed5 from "../Img/prewed5.jpeg";
import wed2 from "../Img/wed2.jpg";
import wed3 from "../Img/wed3.jpg";
import prewed6 from "../Img/prewed6.jpg";
import haldi3 from "../Img/haldi3.jpg";
import haldi4 from "../Img/haldi4.jpeg";
import prewed4 from "../Img/prewed4.jpg";
import wed4 from "../Img/wed4.jpg";
import ring3 from "../Img/ring3.jpg";
import bw from "../Img/bw.jpg"
import haldi1 from "../Img/haldi.jpg";
import ring1 from "../Img/ring6.jpg";
import {Link} from "react-router-dom"


const Photography = () => {
  
  const services = [
    
    { id: 1, title: "Mangalyam Photography", description:"Mangalyam Photography is wedding photography and videography company based in Coimbatore. A wedding celebration is one of the most extraordinary occasions of your lives and hence it should be celebrated with full fulfilment. Thus each of these precious moments and events needs to be captured by a trained cinematographer by capturing all your loved ones." , price: 75000, category:"Wedding", image: wed2 ,rating: 4.5, location: "Gandhipuram,Coimbatore"},
    { id: 2, title: "Black & White Photography", description: "Located in Coimbatore, AK Photography is a photography and videography service provider. In the realm of weddings, where emotions speak louder than words, capturing those moments beautifully is paramount. Amidst the multitude of decisions involved in planning a wedding, the choice of a photography service provider holds great significance. ", price: 172000, category: "Reception", image: bw,rating: 4.7, location: "Vadapalani,Chennai"},
    { id: 3, title: "Monk Photography", description: "Monk Photography is a wedding photography service located in Coimbatore. The couple getting married usually desires to get the pictures clicked perfectly as a wedding is a lifetime occasion for them, and they want to treasure the memories forever. Photos are one of the best ways to travel back in time and relive precious memories.", price: 180000, category: "Pre-Wedding", image: prewed4,rating: 4.1, location: "East thambaram,Chennai" },
    { id: 4, title: "Candid Shoots", description: "Capture your love before the big day.Legendary Media Works is a wedding photography and videography company based out of Coimbatore. They are a team of highly professional photographers and videographers who will be there with you all the moment being a bay capturing your memories. They also guarantee that all your special moments are captured for all time in the most beautiful and candid way. ", price: 51300, category: "Haldi", image: haldi3,rating: 3.5, location: "Madurai" },
    { id: 5, title: "Studio Boy Pictures", description: "Studio Boy Pictures is the leading wedding photography services provider in India Gate, Central Delhi. They are your one-stop wedding photography vendor, where state-of-the-art equipment and a team of skilled photographers specialise in creating stunning photos. They offer unique and customised services at an affordable price with premium quality outputs", price: 81000, category: "Pre-Wedding", image: prewed2,rating: 4.0, location: "RS Puram,coimbatore" },
    { id: 6, title: "Big Dream Photography", description: "Big Dream Photography is a company based in the city of Madurai that can offer you a range of photography and videography services to choose from for your big day celebrations. Weddings are the most festive celebration in the life of the people starting a wonderful journey together and forge wonderful memories for life.To them, photography is the art of capturing your real-life moments to remember them forever", price: 71500, category: "Reception", image: rec1,rating: 4.5, location: "Pasumalai,Madurai" },
    { id: 7, title: "Aerial shots", description: "Aerial shots of your special day.Weddings by Saiii is a wedding photographer located in Coimbatore. Everyone desires a wedding film that is unique and engaging, and Weddings by Saiii is a company that aims to deliver perfectly shot and well-edited films that brings out genuine emotions and moments in full glory. ", price: 102000, category: "Reception", image: rec2,rating: 3.9, location: "E.C.R,Chennai" },
    { id: 8, title: "Ashokarsh", description: "Ashokarsh is the leading wedding photography services provider in India Gate, Central Delhi. They are your one-stop wedding photography vendor, where state-of-the-art equipment and a team of skilled photographers specialise in creating stunning photos. They offer unique and customised services at an affordable price with premium quality outputs", price: 150000, category: "Wedding", image:wed4,rating: 4.5, location: "K.K nagar,Madurai" },
    { id: 9, title: "Classic Shoots", description: "Capture your love before the big day.We are passionate about their work and feel happy about portraying the real and sweet emotions of people through photographs and videos.They offer unique and customised services at an affordable price with premium quality outputs", price: 130000, category: "Haldi", image:haldi4,rating: 4.5, location: "Chromepet,Chennai" },
    { id: 10, title: "Sam Photography",
      description: "Sam Photography, located in Chennai, is renowned for its expertise in wedding photography and videography. Your wedding day is undeniably one of the most precious occasions in your life, deserving to be documented flawlessly by a team of talented storytellers. Every fleeting moment, filled with love and emotion, deserves to be captured by professionals who excel in their craft.", price: 100000, category: "Engagement", image: ring3,rating: 4.3, location: "Chennai" },
      { id: 11, title: "Mr & Mrs Photography", description: "This wedding photography and videography company based in Coimbatore. A wedding celebration is one of the most extraordinary occasions of your lives and hence it should be celebrated with full fulfilment. Thus each of these precious moments and events needs to be captured by a trained cinematographer who can give you the most memorable wedding pictures that you can revisit again with all your loved ones.", price:199999, category: "Wedding", image: wed3 ,rating: 3.5, location: "Podanur,Coimbatore"},
      { id: 12, title: "Vintage Style", description: "Retro vibes for your wedding.Mr & Mrs Photography is a wedding photography and videography service based in Ganapathy. As the name suggests, the team specialises in wedding photography. They are passionate about their work and feel happy about portraying the real and sweet emotions of people through photographs and videos", price: 91800, category: "Pre-Wedding", image: prewed6,rating: 4.1, location: "Chennai" },
      { id: 13, title: "Lights Onn Photography", description:"Lights Onn Photography, the Best Wedding Photography in Madurai has passionate Top Professional Photographers in Madurai at nominal Wedding Photography Packages. We offer Marriage Photography and the Best Candid Photography for Pre-wedding and Post-wedding Outdoor shoot at Awesome Locations, Engagement, Wedding and Reception Photography in Various Traditional out-looks", price: 70000, category: "Engagement", image: eng1 ,rating: 4.5, location: "Adyar,Chennai"},
      { id: 14, title: "Fairy Flash", description: "A wedding celebration is one of the most extraordinary occasions of your lives and hence it should be celebrated with full fulfilment. Thus each of these precious moments and events needs to be captured by a trained cinematographer.To them, photography is the art of capturing your real-life moments to remember them forever.", price: 72000, category: "Pre-Wedding", image: prewed5 ,rating: 4.5, location: "Podanur,Coimbatore"},
      { id: 15, title: "Snapshot Photography", description: "A haldi celebration is one of the most extraordinary occasions of your lives and hence it should be celebrated with full fulfilment. Thus each of these precious moments and events needs to be captured by a trained cinematographer who can give you the most memorable wedding pictures that you can revisit again with all your loved ones.", price: 170000, category: "Haldi", image: haldi1 ,rating: 4.5, location: "Adambakkam,Chennai"},
      { id: 16, title: "Peacock Photography", description: "Peacock Photography is wedding photography and videography company based in Coimbatore. A wedding celebration is one of the most extraordinary occasions of your lives and hence it should be celebrated with full fulfilment. Thus each of these precious moments with all your loved ones.", price: 170000, category: "Engagement", image: ring1 ,rating: 3.8, location: "Podanur,Coimbatore"},
    

    ];
    
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPriceRanges(prevPriceRanges =>
      prevPriceRanges.includes(priceRange)
        ? prevPriceRanges.filter(p => p !== priceRange)
        : [...prevPriceRanges, priceRange]
    );
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(prevRatings =>
      prevRatings.includes(rating)
        ? prevRatings.filter(r => r !== rating)
        : [...prevRatings, rating]
    );
  };

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(service.category);
    const matchesPrice = selectedPriceRanges.length === 0 || (
      selectedPriceRanges.includes('low') && service.price <= 85000 ||
      selectedPriceRanges.includes('medium') && service.price > 85000 && service.price <= 150000 ||
      selectedPriceRanges.includes('high') && service.price > 150000
    );
    
    
    
    return matchesCategory && matchesPrice ;
  });

  return (
    <div class="photography">
      <h1>Photography</h1>
      <h2>Capture your special moments</h2>
    <div className="photography-page">
      
      <aside className="filter-box">
        <h2 >SPECIAL FILTERS</h2>

        
        <div className="filter-group">
          <h3>Category</h3>
          {['Pre-Wedding', 'Wedding', 'Haldi', 'Reception', 'Engagement'].map(category => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                onChange={() => handleCategoryChange(category)}
                checked={selectedCategories.includes(category)}
              />
              {category}
            </label>
          ))}
        </div>

        
        <div className="filter-group">
          <h3 className="price">Price Range</h3>
          {[
            { label: '₹50000 - ₹100000 ', value: 'low' },
            { label: '₹100000 - ₹150000 ', value: 'medium' },
            { label: '₹150000+', value: 'high' },
          
          ].map(price => (
            <label key={price.value}>
              <input
                type="checkbox"
                value={price.value}
                onChange={() => handlePriceChange(price.value)}
                checked={selectedPriceRanges.includes(price.value)}
              />
              {price.label}
            </label>
          ))}
        </div>

        
      </aside>

      <div className="services-grid">
        {filteredServices.map(service => (
          <div className="service-box-photo" key={service.id}>
            <img src={service.image} alt={service.title} className="service-phtghy-image" />
            <div className="service-photo-text">
              <h3>{service.title}</h3>
              <p style={{ display: 'flex', alignItems: 'center' }}>
                  <FaStar style={{ marginRight: '5px', color: 'gold' }} />
                  <span style={{ color: 'white' }}>{service.rating}</span> <span style={{ marginLeft: '5px', color: 'lightgrey' }}>{service.location}</span>
                </p>
              <p>{service.description}</p>
              <p>Price: ₹{service.price}</p>
              <Link to="/Booking"><button className='wed-photo'>Book Now</button></Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Photography;
  
  