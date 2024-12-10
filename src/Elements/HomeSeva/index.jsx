import React from 'react';
import { Card, Button } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import './SevaList.css'; // Custom CSS for dharmik look

const sevaList = [
  { title: "Poshak Seva", image: "/bg1.jpg" },
  { title: "Ashtyam Seva", image: "/bg1.jpg" },
  { title: "Itra Seva", image: "/bg1.jpg" },
  { title: "Dehri Poojan Seva", image: "/bg1.jpg" },
  { title: "Bhoga Seva (Bal Bhog, Raj Bhog, Shayan Bhog)", image: "/bg1.jpg" },
  { title: "Vyahula Utsav (Vivah Utsav)", image: "/bg1.jpg" },
  { title: "Phool Bangla & Jhulan Utsav (Summers)", image: "/bg1.jpg" },
  { title: "Khichri Utsav & Chadmabhesh Jhanki", image: "/bg1.jpg" },
  { title: "Shringar Seva", image: "/bg1.jpg" },
  { title: "Chappan Bhog (Annakut)", image: "/bg1.jpg" }
];


const HomeOnlineSeva = () => {
  return (
    <>
    <h1 className="text-4xl font-extrabold mb-6 text-center">
  ऑनलाइन सेवा
</h1>
    <div className="seva-cards-container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sevaList.map((seva, index) => (
        <Card
          key={index}
          className="seva-card bg-white shadow-lg rounded-lg overflow-hidden border-2 border-yellow-400"
          cover={<img alt={seva.title} src={seva.image} className="seva-card-image" />}
          hoverable
        >
          <h3 className="text-center text-xl font-bold text-yellow-800">{seva.title}</h3>
          <Button 
            type="primary" 
            icon={<WhatsAppOutlined />} 
            className="whatsapp-button mt-4 w-full"
            href="https://wa.me/yournumber"
            target="_blank"
          >
            Inquire on WhatsApp
          </Button>
        </Card>
      ))}
    </div>
    </>
  );
};

export default HomeOnlineSeva;
