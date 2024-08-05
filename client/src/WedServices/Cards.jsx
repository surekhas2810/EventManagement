import React from 'react'
import './Cards.css'
import { Link} from 'react-router-dom';
const Cards = () => {
  return (
    
    <div class="cards">
    <h1>Our Wedding Services</h1>
    <h3>Creating the Perfect Setting for Your Love Story</h3>
    <div class="services-container">
      
        <div class="service-box">
           <Link to="/Venue"> <img src="https://image.wedmegood.com/resized/540X/uploads/member/131524/1653654528_4b55a1da_763a_4240_963c_0294b811234d.jpg?crop=7,108,1011,569" alt="Venue Selection"/></Link>
            <h2>Venue Selection</h2>
            <p>We help you find the perfect venue for your special day.</p>
        </div>

        <div class="service-box">
            <Link to="/Catering"> <img src="https://img.freepik.com/premium-photo/buffet-table-with-many-dishes-including-food-large-pan-food_662214-17487.jpg" alt="Catering Services"/></Link>
            <h2>Catering Services</h2>
            <p>Delicious and diverse menus to delight your guests.</p>
        </div>

        <div class="service-box">
           <Link to="/Decor"> <img src="https://i.ytimg.com/vi/fSbixM0p6RE/maxresdefault.jpg" alt="Decorations"/></Link>
            <h2>Decorations</h2>
            <p>Beautiful and elegant decor tailored to your taste.</p>
        </div>

        <div class="service-box">
            <Link to="/Photo"><img src="https://crystallinestudio.com/blogmoreimg/13_crystalline.jpg" alt="Photography"/></Link>
            <h2>Photography</h2>
            <p>Capture every moment with professional photography.</p>
        </div>

        

        
    </div>
    </div>
    
       
  )
}

export default Cards