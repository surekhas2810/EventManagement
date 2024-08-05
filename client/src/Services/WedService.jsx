import React from 'react'
import './WedService.css'
import { Link} from 'react-router-dom';
import pic from '../Img/sangeet.jpg'
const WedService = () => {
  return (
    // <div>WedService</div>
    <div class="cards">
    <h1>Our Wedding Services</h1>
    <h3>Creating the Perfect Setting for Your Love Story</h3>
    
    <div className="main-content">
       
        <div className="content">
          <div className="image-section">
            <img src="https://www.theweddingschool.in/wp-content/uploads/2018/09/download.jpg"/>
          </div>
          <div className="services-section">
            <h3>SERVICES  WE OFFER:</h3>
            <ul>
              <li>Wedding décor and design services</li>
              <li>Event flow management</li>
              <li>Destination wedding planning & venue selection</li>
              <li>Entertainment activities for wedding guests</li>
              <li>Wedding guest's management</li>
              <li>Pre-wedding event decoration & party organization</li>
              <li>Wedding invitation & other communication services</li>
              <li>Providing with best catering servicesand photographers</li>
              {/* <li>Transport & logistics management</li>
              <li>Food and beverages services</li>
              <li>Styling & personal shopper</li>
              <li>Vendor Management</li> */}
            </ul>
          </div>
        </div>
      </div>
   
    <div class="heading">
            <h2>Wedding Events Service Offerings</h2>
            </div> 
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

export default WedService