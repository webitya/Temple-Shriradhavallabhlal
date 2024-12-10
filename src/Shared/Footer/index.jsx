import React from 'react';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './FooterEl.css'; // Custom styles

const AppFooter = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Left section: Social Media Icons */}
        <div className="footer-left">
          <div className="social-icons">
            <InstagramOutlined />
            <FacebookOutlined />
            <YoutubeOutlined />
            <WhatsAppOutlined />
          </div>
          <div className="footer-address">
            <p>Ganga Harmu Ranchi, Near Naman Vidya School, Ranchi</p>
          </div>
        </div>

        {/* Center section: Logo */}
        <div className="footer-center">
          <img src="/logo.png" alt="Logo" className="footer-logo" style={{boxShadow:"none"}}/>
        </div>

        {/* Right section: WhatsApp Inquiry */}
        <div className="footer-right">
          <p className="inquiry-text">Connect on WhatsApp for any inquiry or services</p>
          <Button icon={<WhatsAppOutlined />} className="inquiry-button">
            Enquiry Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
