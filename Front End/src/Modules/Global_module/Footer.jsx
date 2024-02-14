import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // Solid icons for email and phone
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Brands icons for social media
import stylesF from '../../css/footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={stylesF.footer}>
      <div className={stylesF.footerContent}>
        <div className={stylesF.footerSection}>
          <h5>About Us</h5>
          <p>This is Automate-Email-Messages distribution application.</p>
        </div>
        <div className={stylesF.footerSection}>
          <h5>Contact Us</h5>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@example.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890</p>
        </div>
        <div className={stylesF.footerSection}>
          <h5>Follow Us</h5>
          <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
          <p><FontAwesomeIcon icon={faTwitter} /> Twitter</p>
          <p><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
