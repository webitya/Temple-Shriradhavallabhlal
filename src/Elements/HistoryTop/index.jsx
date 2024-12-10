import React from 'react';
import { Layout, Typography, Row, Col, Card, Image } from 'antd';
import 'antd/dist/reset.css'; // Import AntDesign styles

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const historyData = [
  {
    title: 'श्री राधावल्लभो जयति',
    image: '/bg1.jpg', // Replace with your image path
    description: `।। श्री हित हरिवंशचंद्रो जयति ।। 
    करुणानिधि अरु कृपा निधि, श्री हरिवंश उदार। वृन्दावन रस कहन को, प्रगट धरयौ अवतार।।`,
  },
  {
    title: 'श्री हित हरिवंश चंद्र महाप्रभु',
    image: '/bg1.jpg', // Replace with your image path
    description: `प्रेम रसावतार श्री हित हरिवंश चंद्र महाप्रभु भारत वर्ष के धर्माचार्यों की चिर प्राचीन परम्परा की एक अनुपम विभूति हैं। उन्होंने श्री राधाकृष्ण भक्ति के क्षेत्र में एक सर्वथा नवीन रस सिद्धान्त एवं उनकी उपासना प्रणाली का प्रवर्तन किया।`,
  },
  {
    title: 'प्रारंभ और जीवन',
    image: '/bg1.jpg', // Replace with your image path
    description: `श्री हित महाप्रभु के पूर्वज देववन (ज़ि.सहारनपुर उ.प्र) के निवासी थे। उनके पिता श्री व्यास मिश्र गौड़ ब्राहमण थे एवं उस क्षेत्र के प्रख्यात ज्योतिषी थे। उनकी माता का नाम तारा रानी था।`,
  },
  // Add more historical data objects as needed
];

const HistorySection = () => {
  return (
    <Layout style={{ backgroundColor: '#fff', padding: '2rem' }}>
      <Content>
        <Title level={2} style={{ textAlign: 'center', color: '#ff6f00' }}>इतिहास</Title>
        {historyData.map((item, index) => (
          <Card
            key={index}
            style={{ marginBottom: '1rem', border: 'none' }}
            cover={<Image src={item.image} alt={item.title} />}
          >
            <Title level={4} style={{ color: '#ff6f00' }}>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
          </Card>
        ))}
      </Content>
    </Layout>
  );
};

export default HistorySection;
