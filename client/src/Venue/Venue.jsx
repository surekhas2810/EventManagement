import React, { useState } from 'react';
import './Venue.css';
import ven1 from '../Img/venue1.jpg';
import ven2 from '../Img/venue2.jpg';
import ven3 from '../Img/venue3.jpg';
import ven4 from '../Img/venue4.jpg';
import ven5 from '../Img/venue5.jpg';
import ven6 from '../Img/venue6.jpg';
import ven7 from '../Img/venue7.jpg';
import ven8 from '../Img/venue8.jpg';
import ven9 from '../Img/venue10.jpg';
import ven10 from '../Img/dec3.jpg';
import ven11 from '../Img/venue11.jpg';
import ven12 from '../Img/venue12.jpg';
import ven13 from '../Img/dec2.jpg';
import { FaStar } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const venues = [
  {
    name: 'TTD Kalyana Mandapam',
    location: 'Himayath Nagar',
    state:' Hyderabad',
    rating: 4.7,
    guests: '500-750 Guests',
    number:"807234656",
    images: ven1,
  },
  {
    name: 'Ashok Garden',
    location: 'Asbestos Colony Rd',
    rating: 3.9,
    state:'Chennai',
    guests: '300-500 Guests',
    number:"90764656",
    images: ven2,
   
  },
  {
    name: 'Dream Valley Resorts',
    location: 'Himayath Nagar',
    state:' Bangalore',
    rating: 4.5,
    guests: '100-500 Guests',
    number:"607234656",
    images: ven3,
    
  },
  {
    name: 'Ramoji Film City',
    location: 'Ramoji Film City',
    state:' Hyderabad',
    rating:3.5,
    guests: '500-750 Guests',
    number:"707234656",
    images: ven4,
  },
  {
    name: 'Chandravaas',
    location: 'Himayath Nagar',
    state:'Bangalore',
    rating: 4.1,
    guests: '300-500 Guests',
    number:"899234656",
    images: ven5,
  },
  {
    name: 'Rainbow Retreat',
    location: 'Himayath Nagar',
    state:' Hyderabad',
    rating: 4.3,
    guests: '200-750 Guests',
    number:"80088756",
    images: ven6,
  },
  {
    name: 'Tirupati Devashthanam',
    location: 'Himayath Nagar',
    state:'Coimbatore',
    rating: 3.4,
    guests: '500-750 Guests',
    number:"989774656",
    images: ven7,
   
  },
  {
    name: 'Krishna Hall',
    location: 'Himayath Nagar',
    state:'Madurai',
    rating: 3.3,
    guests: '150-350 Guests',
    number:"674347890",
    images: ven8,
   
  },
  {
    name: 'Harshi Resorts',
    location: 'Himayath Nagar',
    state:'Madurai',
    rating: 3.5,
    guests: '500-750 Guests',
    number:"898734656",
    images: ven9,
    
  },
  {
    name: 'Palace House',
    location: 'Himayath Nagar',
    state:' Chennai',
    rating: 4.5,
    guests: '500-750 Guests',
    number:"767234656",
    images: ven10,
   
  },
  {
    name: 'Olive Resorts',
    location: 'Himayath Nagar',
    state:' Coimbatore',
    rating: 4.3,
    guests: '500-750 Guests',
    number:"91234656",
    images: ven11,
   
  },
  {
    name: 'Malks Mandabham',
    location: 'Himayath Nagar',
    state:' Chennai',
    rating: 4.4,
    guests: '500-750 Guests',
    number:"976723426",
    images: ven12,
    
  },
  {
    name: 'JPR Kalyana Mandapam',
    location: 'Himayath Nagar',
    state:'Madurai',
    rating: 3.5,
    guests: '250-400 Guests',
    number:"8765431289",
    images: ven13,
   
  },
];

const Venue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [guests, setGuests] = useState('');
  const [filteredVenues, setFilteredVenues] = useState(venues);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const checkAvailability = (venue) => {
    if (!guests) {
      return true; 
    }
    const guestRange = venue.guests.match(/(\d+)-(\d+)/);
    const minGuests = parseInt(guestRange[1]);
    const maxGuests = parseInt(guestRange[2]);
    return guests >= minGuests && guests <= maxGuests;
  };

  const handleSearchClick = () => {
    const filtered = venues.filter((venue) => {
      return (
        venue.state.toLowerCase().includes(searchTerm.toLowerCase()) &&
        checkAvailability(venue)
      );
    });
    setFilteredVenues(filtered);
  };

  return (
    <div className="wed-venue">
      <div className="title-venue">
        <h1>Top Venues</h1>
        <h3>Best Venues For Your Forever Destination</h3>
      </div>
      <div className="venue-page">
        <div className="top-bar">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search for Venue, Locality"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearchClick}>Search</button>
          </div>
          <input
            type="number"
            placeholder="Number of Guests"
            value={guests}
            onChange={handleGuestsChange}
          />
        </div>
        {filteredVenues.length === 0 ? (
          <p>No venues available for the selected venue and number of guests.</p>
        ) : (
          <div className="venue-list">
            <h1></h1>
            {filteredVenues.map((venue, index) => (
              <div className="venue-card" key={index}>
                <img
                  src={venue.images}
                  alt={venue.name}
                  className="venue-main-image"
                />
                <div className="venue-details">
                  <h2>{venue.name}</h2>
                  <p style={{ display: 'flex', alignItems: 'center' }}>
                  <FaStar style={{ marginRight: '5px', color: 'gold' }} />
                  <span style={{ color: 'white' }}>{venue.rating}/5</span> 
                </p>
                  <p>{venue.location}</p>
                  <p>{venue.state}</p>
                  {/* <p>Rating: {venue.rating} / 5</p> */}
                  <p>Guests: {venue.guests}</p>
                  <br></br>
                  <button className="phone-button"><FaPhone /> {venue.number}</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Venue;