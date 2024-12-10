import React from 'react';
import { Card, Col, Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './TempleDesign2.css'; // CSS for custom styles

const AboutShriHitRadhavallabh = () => {
  return (
    <section className="temple-section py-20 my-2">
     

      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={10}>
          <Card className="temple-card" cover={
              <img
                alt="Shri Hit Radhavallabh Lal"
                src="/bg1.jpg"
                className="temple-card-image"
              />
            }>
            {/* <div className="temple-card-content">
              <h3 className="temple-card-title">
                <InfoCircleOutlined className="icon" /> Life and Legacy
              </h3>
              <p className="temple-card-text">
                Shri Hit Radhavallabh Lal’s life is a testament to the power of love and devotion. His teachings continue to guide individuals on the spiritual path, emphasizing that through love, one can attain the highest truth and bliss.
              </p>
            </div> */}
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <div className="temple-content">
          <h2 className="temple-header">About Shri Hit Radhavallabh Lal</h2>
            <p className="temple-paragraph">
              Shri Hit Radhavallabh Lal is a revered figure known for his deep devotion and spiritual teachings. He exemplifies the essence of love and compassion in every aspect of life. His life and teachings inspire many to seek a deeper connection with the divine through bhakti (devotion).
            </p>

            <h3 className="temple-subheader">Philosophy</h3>
            <p className="temple-paragraph">
              Shri Hit Radhavallabh Lal's philosophy revolves around the unconditional love for Radha-Krishna, emphasizing that true devotion transcends rituals and is rooted in love and sincerity. His teachings encourage followers to embrace a path of love, service, and devotion.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AboutShriHitRadhavallabh;
