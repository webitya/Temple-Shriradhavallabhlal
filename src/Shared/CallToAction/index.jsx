
import React from 'react';
import { Card, Button } from 'antd';
import 'antd/dist/reset.css'; // Import AntDesign styles

const { Meta } = Card;

const CallToAction = () => {
  return (
    <section style={{ backgroundColor: '#f0f2f5', padding: '3rem 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <Card
          bordered={false}
          style={{
            background: '#ffffff',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Meta
            title={<h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>आपकी सहायता से हम धर्म सेवा को बढ़ावा दे सकते हैं</h2>}
            description={<p style={{ fontSize: '18px' }}>हमारे साथ जुड़कर आप मंदिर की सेवाओं और आयोजन में योगदान दे सकते हैं। आपके सहयोग से हम और भी प्रभावी सेवा प्रदान कर सकते हैं।</p>}
          />
          <div style={{ marginTop: '2rem' }}>
            <Button
              type="primary"
              size="large"
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}
            >
              आज ही संपर्क करें
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
