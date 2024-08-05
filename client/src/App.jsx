
import './App.css'
import CateringMenu from './CateringMenu/CateringMenu.jsx';
 import Photography from './Photography/Photography.jsx'
import Homepage from './EventHome/Homepage.jsx'
// import Venue from './Venue/Venue.jsx'
// import Decors from './Decorations/Decors.jsx'
// import Invitations from './Invitation/Invitations.jsx'
 import Booking from './BookingPage/Booking.jsx'
// import Nav from './NavBar/Nav.jsx'
// import Footer from './Footer/Footer.jsx'
import {BrowserRouter , Route,Routes} from "react-router-dom";

import Venue from './Venue/Venue.jsx'
import Decorations from './Decorations/Decors.jsx'
import Footer from './Footer/Footer.jsx';
import Cards from './WedServices/Cards.jsx';
import WedService from './Services/WedService.jsx';
import Firstpage from './assets/Firstpage.jsx'

function App() {
  
return (
  <div>
<Firstpage/>
   
  </div>
    // <BrowserRouter>
    // <div>
      
    //  <Routes>
    //     <Route path='/' element={<Homepage/>}/>
    //     <Route path='/Service' element={<WedService/>}/>
    //     <Route path='/Venue' element={<Venue/>}/>
    //     <Route path='/Catering' element={<CateringMenu/>}></Route>
    //     <Route path="/Photo" element={<Photography/>}></Route>
    //     <Route path='/Decor' element={<Decorations/>}></Route>
    //     <Route path='/Booking' element={<Booking/>}></Route>
        
    //     </Routes>
       
    //      </div>
    //     </BrowserRouter>  
    
  )
}

export default App
