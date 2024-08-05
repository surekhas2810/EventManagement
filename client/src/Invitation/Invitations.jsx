import React, { useState } from 'react';
import './Invitation.css';
import invi1 from '../Img/invi1.jpg'
import invi2 from '../Img/invi2.jpg'
import invi3 from '../Img/invi6.jpg'
import invi4 from '../Img/invi4.jpeg'
import invi5 from '../Img/invi5.jpg'
import invi6 from '../Img/invi7.jpg'
// Sample images and descriptions
const cards = [
  { image: invi3, cost: '$150' },
  { image: 'https://as1.ftcdn.net/v2/jpg/03/18/55/34/1000_F_318553497_sL0nJBoquYwvUxEPR7u69g1HgYZ0LzK4.jpg', cost: '$250' },
  { image: 'https://marketplace.canva.com/EAE9-H2CJ3I/1/0/1135w/canva-pink-gold-free-wedding-invitation-BHHrDUu1o2o.jpg', cost: '$100' },
  { image: invi2, cost: '$300' },
  { image: 'https://thecraftgallery.in/cdn/shop/files/FullSizeRender_88298320-5afa-40ec-938b-da32bbd44972.jpg?v=1684822761', cost: '$450' },
  { image: invi5, cost: '$200' },
  
  
];

const Invitations = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div class="invite">
      <h1 className="page-title"> Invitation Card </h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card-invite"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={card.image} alt={`Card ${index + 1}`} className="card-image" />
            {hoveredIndex === index && (
              <div className="card-overlay">
                <p className="card-description">Cost: {card.cost}</p>
                
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
  );
};

export default Invitations;
