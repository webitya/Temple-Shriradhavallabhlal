import React from 'react';
import { Col, Row } from 'antd';
import './TempleDesign.css'; // Custom styles for classic look

const AboutShriHitHarivansh = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFEDB4] to-[#FFEDB4] md:p-8 px-4 !my-2">
      

      <Row gutter={[16, 16]} className='py-10'>
        <Col xs={24} md={12}>
          <div className="text-left max-w-xl mx-auto">
          <h2 className="temple-header">
        About Shri Hit Harivansh Mahaprabhu
      </h2>
            <p className="text-lg md:text-2xl leading-relaxed mb-6 font-serif text-[#461257]">
              Shri Hit Harivansh Mahaprabhu, revered as a divine incarnation, is celebrated for his profound teachings and devotion to Radha-Krishna. He emphasized the significance of pure love (bhakti) as a means to attain spiritual enlightenment and union with the divine. His life was dedicated to the upliftment of humanity and the propagation of love, compassion, and spiritual wisdom.
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold text-[#5F2C70] mb-4">
              Legacy
            </h3>
            <p className="text-lg md:text-xl leading-relaxed font-serif text-[#461257]">
              Shri Hit Harivansh Mahaprabhu’s legacy continues to inspire countless souls. His life is a beacon of hope and guidance for seekers on the spiritual path, reminding us that love and devotion can transcend all barriers and lead us to the divine.
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold text-[#5F2C70] mb-4">
              Teachings
            </h3>
            <p className="text-lg md:text-xl leading-relaxed font-serif text-[#461257]">
              His teachings focus on the importance of bhakti (devotion) and the transformative power of love. He encouraged his followers to cultivate compassion, humility, and a deep connection with the divine, urging them to see the divine presence in every being.
            </p>

            <h3 className="text-3xl md:text-4xl font-semibold text-[#5F2C70] mb-4">
              Influence
            </h3>
            <p className="text-lg md:text-xl leading-relaxed font-serif text-[#461257]">
              The influence of Shri Hit Harivansh Mahaprabhu is seen across various spiritual traditions, where his teachings on love and compassion continue to inspire individuals on their spiritual journeys.
            </p>
          </div>
        </Col>

        {/* Right Column with Only Image */}
        <Col xs={24} md={12} className="flex justify-center">
          <img
            alt="Shri Hit Harivansh Mahaprabhu"
            src="/Sant Darshan/12.jpg"
            className="rounded-lg h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </Col>
      </Row>
    </section>
  );
};

export default AboutShriHitHarivansh;
