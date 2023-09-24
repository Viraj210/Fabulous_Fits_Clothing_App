import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper bg-orange-200 py-20">
      <div className="footer-section-one">
      <div className="footer-logo-container">
        <h3 className='px-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Your <span className='text-orange-500'>Style,</span></h3>
        <h3 className='px-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'> <span className='text-orange-500'>Your</span> Signature</h3>
        </div>
        
      </div>
      <div className="footer-section-two">
      <div className="footer-icons ">
          <div className="px-2 py-1"><BsTwitter /></div>
          <div className="px-2 py-1"><SiLinkedin /></div>
          <div className="px-2 py-1"><BsYoutube /></div>
          <div className="px-2 py-1"><FaFacebookF /></div>
        </div>
        <div className="footer-section-columns ">
          <span>No 15,</span>
          <span>Warden Place</span>
          <span>Colombo 03</span>
          <span>Sri Lanka</span>
        </div>
      
        <div className="footer-section-columns px-4">
          <span> 
          Discover the latest trends and elevate your style with us. We're your one-stop destination for fashionable clothing, accessories, and more. Browse our collection, find the perfect outfit, and stay ahead in the world of fashion. Shop now for quality and style that suits you.          </span>
        </div>

        <div className="footer-section-columns">
          <span className="px-2">+9477-1231234</span>
          <span className="px-2">+9471-5675678</span>
          <span className="px-2">info@food.com</span>
          <span className="px-2">hr@food.com</span>
          <span className="px-2">contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
