import React from 'react';
import styles from './WhatsAppIcon.module.css';

const WhatsAppIcon = () => {
  const phoneNumber = "923155871988";
  const message = "Hi Fayaz Jewellers, I'm interested in your jewellery.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className={styles.whatsappFloat} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppIcon;
