import React from 'react';
import { Col, Row } from 'antd';
import './TempleDesign3.css'; // CSS for custom styles

const AboutShriHitNimishGoswami = () => {
  return (
    <section className="about-section md:p-8 px-4 py-10">
      

      <Row gutter={[24, 24]} align="middle">
        {/* Left Column with Image */}
        <Col xs={24} md={12} className="flex justify-center mb-8">
          <img
            src="/bg1.jpg" // Replace with your image path
            alt="Shri Hit Nimish Goswami Ji Maharaj"
            className="rounded-lg custom-image shadow-lg"
          />
        </Col>

        {/* Right Column with Text */}
        <Col xs={24} md={12} className="text-center mb-8">
          <div className="text-container">
          <h2 className="about-header text-center mb-12">
        About Shri Hit Nimish Goswami Ji Maharaj
      </h2>
            <h3 className="text-golden font-bold text-3xl mb-6">
              Spiritual Wisdom and Guidance
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              Shri Hit Nimish Goswami Ji Maharaj is known for his deep spiritual wisdom and compassionate guidance. His teachings emphasize the importance of devotion and connection with the divine, inspiring many on their spiritual journeys.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutShriHitNimishGoswami;
