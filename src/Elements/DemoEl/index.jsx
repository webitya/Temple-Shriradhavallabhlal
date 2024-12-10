import React from 'react';
import { Card, Row, Col } from 'antd';

const RadhavallabhSampraday = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Radhavallabh Sampraday Hit Sahitya Utsava</h1>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Shri Hit Harivansh Mahaprabhu ji" hoverable>
            <ul>
              <li>Shri Radhavallabh ji</li>
              <li>Vanshvali</li>
              <li>Temple History</li>
              {/* Add more list items */}
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Festivals & Sewa" hoverable>
            <ul>
              <li>Hitotsava</li>
              <li>Yamunaji Mahotsav</li>
              <li>Guru Purnima</li>
              {/* Add more list items */}
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Temples & Others" hoverable>
            <ul>
              <li>Hit Harivansh Mahaprabhu ji Temple</li>
              <li>Shri Banke Bihari ji Temple</li>
              <li>Mansarovar</li>
              {/* Add more list items */}
            </ul>
          </Card>
        </Col>
      </Row>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Social Activities</h2>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card title="Gau Seva" hoverable>
            <p>Details about Gau Seva...</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Vashtra Vitaran" hoverable>
            <p>Details about Vashtra Vitaran...</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Green Climate" hoverable>
            <p>Details about Green Climate initiatives...</p>
          </Card>
        </Col>
      </Row>

      {/* More sections can be added in a similar fashion */}
    </div>
  );
};

export default RadhavallabhSampraday;
