
import React from 'react';
import './Footer.css';
import { PiTelegramLogo } from "react-icons/pi";
import { VscLocation } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-section logo-section">
            <img src="data:image/png;base64,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" alt="Sakura Events Organizers" class="footer-logo"/>
            <p>We are a team of professionals and our passion is the creation and implementation of creative and grand events.</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>

        <div class="footer-section services-section">
            <h3>Services We Offer</h3>
            <ul>
                <li><a href="#">Wedding Events</a></li>
                <li><a href="#">Corporate Events</a></li>
                <li><a href="#">Social Events</a></li>
            </ul>
        </div>

        <div class="footer-section contact-section">
            <h3>Reach Us (India)</h3>
            <p><i class="fas fa-map-marker-alt"></i> India: 5th Floor Sunteck Centre, Subhash Road, Vile Parle East, Mumbai – 400057</p>
            <p><i class="fas fa-phone-alt"></i> +91 9820054081</p>
            <p><i class="fas fa-envelope"></i> admin@sakura.co.in</p>
        </div>

        <div class="footer-section contact-section">
            <h3>Reach Us (Dubai)</h3>
            <p><i class="fas fa-map-marker-alt"></i> 202, Saha Offices (C), Souk Al Bahar, Downtown, Dubai, UAE</p>
            <p><i class="fas fa-phone-alt"></i> +971 58 586 1908</p>
            <p><i class="fas fa-envelope"></i> info@sakuraevents.ae</p>
        </div>
    </div>

    <div class="footer-bottom">
        <p>© 2022 All rights reserved. Designed by <a href="#">Aarav Infotech</a></p>
    </div>
</footer>

  );
};

export default Footer;
