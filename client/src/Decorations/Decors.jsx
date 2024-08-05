import React from 'react';
import './Decors.css';

import dec1 from '../Img/dec1.jpg';
import dec2 from '../Img/dec2.jpg';
import dec3 from '../Img/venue14.jpg';
import dec4 from '../Img/haldec.jpg';
import dec5 from '../Img/haldec2.jpg';
import dec6 from '../Img/haldec3.jpg';
import dec7 from '../Img/venue8.jpg';
import dec8 from '../Img/dec3.jpg';
import dec9 from '../Img/venue13.jpg';


const cardData = [
  {
    id: 1,
    frontImage: dec9,
    backImage: dec9,
    frontText: 'Aisha Decors',
    backText: 'BK.Pudur,Coimbatore'
  },
  {
    id: 2,
    frontImage: dec2,
    backImage: dec2,
    frontText: 'Kovai Wedding Decors',
    backText: 'Ukkadam,Coimbatore'
  },
  {
    id: 3,
    frontImage: dec3,
    backImage: dec3,
    frontText: 'Shree Decors',
    backText: 'Anna Nagar,Madurai'
  },
  {
    id: 4,
    frontImage: dec4,
    backImage: dec4,
    frontText: 'Priya Decors',
    backText:'Madurai'
  },
  {
    id: 5,
    frontImage: dec5,
    backImage: dec5,
    frontText: 'Aishwarayam Decors',
    backText: 'Saravanampaty,Coimbatore'
  },
  {
    id: 6,
    frontImage: dec6,
    backImage: dec6,
    frontText: 'Sai Decors',
    backText: 'Porur,Chennai'
  },
  {
    id: 7,
    frontImage: dec1,
    backImage: dec1,
    frontText: 'Surekha Decors',
    backText: 'Gandhinagar,Coimbatore'
  },
  {
    id: 8,
    frontImage: dec8,
    backImage: dec8,
    frontText: 'Surya Decors',
    backText: 'Pollachi'
  },
  {
    id: 9,
    frontImage: dec7,
    backImage: dec7,
    frontText: 'Sandsesha',
    backText: 'Vadapalani,Chennai'
  }
];

const Decors = () => {
  return (
    <div class="heading">
    <h1>DECORATIONS</h1>
    
    <div className="decoration">
      <h3>Wedding Decorations</h3>
      <div className="card-container">
        {cardData.slice(0, 3).map((card) => (
          <div key={card.id} className="card">
            <div className="card-inner">
              <div
                className="card-front"
                style={{
                  backgroundImage: `url(${card.frontImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="overlay">
                  <h2>{card.frontText}</h2>
                </div>
              </div>
              <div
                className="card-back"
                style={{
                  backgroundImage: `url(${card.backImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="overlay">
                  <h2>{card.backText}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>HALDI DECORATIONS</h3>
      <div className="card-container">
        {cardData.slice(3, 6).map((card) => (
          <div key={card.id} className="card">
            <div className="card-inner">
              <div
                className="card-front"
                style={{
                  backgroundImage: `url(${card.frontImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="overlay">
                  <h2>{card.frontText}</h2>
                </div>
              </div>
              <div
                className="card-back"
                style={{
                  backgroundImage: `url(${card.backImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="overlay">
                  <h2>{card.backText}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
   

    <h3>Sangeet and cocktail</h3>
      <div className="card-container">
        {cardData.slice(6,9).map((card) => (
          <div key={card.id} className="card">
            <div className="card-inner">
              <div
                className="card-front"
                style={{
                  backgroundImage: `url(${card.frontImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="overlay">
                  <h2>{card.frontText}</h2>
                </div>
              </div>
              <div
                className="card-back"
                style={{
                  backgroundImage: `url(${card.backImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="overlay">
                  <h2>{card.backText}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Decors;
