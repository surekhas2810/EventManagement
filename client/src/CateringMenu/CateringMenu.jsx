import React, { useState } from 'react';
import './Catering.css';
import { FaPhone } from "react-icons/fa6";
import { VscLocation } from "react-icons/vsc";
import { FaStar } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";


import food1 from "../Img/food1.jpg";
import food2 from "../Img/food2.jpg";
import food3 from "../Img/food3.jpg";
import food4 from "../Img/food4.jpg";
import food5 from "../Img/food5.jpg";
import food6 from "../Img/food6.jpg";
import food7 from "../Img/food7.jpg";
import food8 from "../Img/food8.jpg";
import food9 from "../Img/food9.jpg";

const CateringMenu = () => {
  
  const projectDetails = [
    {
      images: [food1, food2, food3],
      rating:5,
      title: "GOURMET DELIGHTS",
      description: "Experience the best gourmet food in town.",
      location:"Film City, Bangalore",
      number:"9086436271",
      customer:"31653 ratings",
    },
    {
      images: [food4, food5, food6],
      rating:4,
      title: "ANANDHAM CATERING",
      description: "Perfect catering for all your special events.",
      location:"Gandhipuram, Coimbatore",
      number:"7384527395",
      customer:"21723 ratings",
    },
    {
        images: [food7, food8, food9],
        rating:3,
        title: "ROYAL CATERING",
        description: "Elevating Every Occasion with Culinary Excellence",
        location:"11th Main Road Anna Nagar, Chennai",
        number:"6354728596",
        customer:"98643 ratings",
      },
      {
        images: [food8, food6, food3],
        rating:5,
        title: "HARIBHAVANAM",
        description: "Experience the best gourmet food in town.",
        location:"Chrompet, Chennai",
        number:"9086436271",
        customer:"5363 ratings",
      },
  ];

  const [currentIndexes, setCurrentIndexes] = useState(new Array(projectDetails.length).fill(0));

  const nextSlide = (projectIndex) => {
    setCurrentIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      newIndexes[projectIndex] = (prevIndexes[projectIndex] + 1) % projectDetails[projectIndex].images.length;
      return newIndexes;
    });
  };

  const prevSlide = (projectIndex) => {
    setCurrentIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      newIndexes[projectIndex] = (prevIndexes[projectIndex] - 1 + projectDetails[projectIndex].images.length) % projectDetails[projectIndex].images.length;
      return newIndexes;
    });
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  return (
    <div class="catering">
<h2 className="catering-title">CATERING SERVICES</h2>
<h3>Savor the Moment with Different Catering.</h3>
    <div className="cat-container">
     
      <div className="full-container" id="project">
        {projectDetails.map((project, index) => (
          <div className="cat-container2" key={index}>
            <div className="image-slider">
              <button className="slider-button prev" onClick={() => prevSlide(index)}>‹</button>
              <img src={project.images[currentIndexes[index]]} alt={`Project ${index + 1} Image`} className="project-image" />
              <button className="slider-button next" onClick={() => nextSlide(index)}>›</button>
            </div>

            <div className="description-box">
              <h2 className="topic">{project.title}</h2>
              
              <h2 className="rating">
                {renderStars(project.rating)} <span className="customer-name">{project.customer}</span>
              </h2>

              <p className="para">{project.description}</p>
              <h2 className="location">
              <VscLocation /> {project.location}
              </h2>
             
              <button className="hover-button"><TfiEmail /> Send Enquiry</button>
              <button className="hover-button"><FaPhone /> {project.number}</button>
              <button className="hover-button"><BsWhatsapp /> Whatsapp</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CateringMenu;
