import React from 'react';
import { Card, Col, Row, Typography, Divider } from 'antd';
import { HomeOutlined } from '@ant-design/icons';


const { Title, Paragraph } = Typography;

const RadhavallabhJi = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>About Sri Radhavallabh Ji</Title>
      <Row gutter={16}>
        <Col span={24}>
          <Card
            title={<span><HomeOutlined style={{ marginRight: '10px' }} />Sri Radhavallabh Temple</span>}
            bordered={false}
            style={{ marginBottom: '20px' }}
          >
            <Paragraph>
              The Sri Radhavallabh Temple is located in Vrindavan, Mathura district, Uttar Pradesh, India, near the famous Banke Bihari Temple. The primary deity here is Krishna, who is revered as Shri Radhavallabh Ji, translating to “the consort of Shree Radha.” A distinctive feature of this temple is the placement of a crown next to Krishna's idol to denote the presence of Shree Radha.
            </Paragraph>
            <Paragraph>
              The term ‘RadhaVallabh’ signifies the inseparable unity of Lord Krishna and Shree Radha. According to Krishna, “I am never separated from Radha though many people view and count us as separate. Those who believe us to be divided are uneducated and deluded.”
            </Paragraph>
            <Divider />
            <Title level={2}>Divine Darshan</Title>
            <Paragraph>
              It is believed that only those with devotion and purity in heart can truly experience the divine darshan of the idol. Goswami Tulsidasji’s verse, “Nirmal man jan so mohi paava, mohi kapat, chhal, chhidr na bhaava,” emphasizes that purity of heart is essential to reach God. Shri Radhavallabh Ji epitomizes the pure divine love, representing the ultimate essence of love that is the basis of creation.
            </Paragraph>
            <Paragraph>
              The deity’s eyes are said to be incredibly mesmerizing, and gazing into them can lead to an intense experience of joy and loss of self-consciousness.
            </Paragraph>
            <Divider />
            <Title level={2}>Temple Features</Title>
            <Paragraph>
              The Radha Vallabh Mandir is known for its unique feature of replacing the idol of Shree Radha Rani with a crown placed near Krishna's idol. This signifies her presence in a unique way. Only those with pure devotion can witness this divine form.
            </Paragraph>
            <Paragraph>
              The temple celebrates Radha Ashtami, the birthday of Shree Radha Rani, with great devotion for nine days. The Radha Vallabh Mandir is also renowned for the Vyahula rituals, which are regular processions of the divine wedding ceremonies.
            </Paragraph>
            <Divider />
            <Title level={2}>Temple Timings</Title>
            <Paragraph strong>Summer Timings:</Paragraph>
            <Paragraph>Morning: 08:00 am – 12:00 pm</Paragraph>
            <Paragraph>Evening: 05:30 pm – 09:30 pm</Paragraph>
            <Paragraph>Mangla Aarti: 05:00 am – 06:30 am</Paragraph>
            <Paragraph>Dhoop Aarti: 08:00 am – 08:30 am</Paragraph>
            <Paragraph>Shringar Aarti: 08:30 am – 09:30 am</Paragraph>
            <Paragraph>Raj Bhog Aarti: 12:15 pm – 12:30 pm</Paragraph>
            <Paragraph>Utthapan Aarti: 05:30 pm – 06:00 pm</Paragraph>
            <Paragraph>Dhoop Sandhya Aarti: 06:00 pm – 06:30 pm</Paragraph>
            <Paragraph>Sandhya Aarti: 07:30 pm – 08:00 pm</Paragraph>
            <Paragraph>Shayan Aarti: 09:00 pm – 09:30 pm</Paragraph>
            <Paragraph strong>Winter Timings:</Paragraph>
            <Paragraph>Mangla Aarti: 06:30 am</Paragraph>
            <Paragraph>Morning: 09:00 am – 12:00 pm</Paragraph>
            <Paragraph>Evening: 06:30 pm – 08:30 pm</Paragraph>
            <Divider />
            <Title level={2}>Temple History</Title>
            <Paragraph>
              The Radha Vallabh Sampradaya was founded by the bhakti poet Sant Hit Harivansh Mahaprabhu in 1535. The temple was established in 1585 by Sundardas Bhatnagar, a disciple of Shri Vanchandra Ji, the son of Hit Harivansh Mahaprabhu.
            </Paragraph>
            <Paragraph>
              According to legend, Lord Shiva bestowed the idol of Shri Radhavallabh Ji upon Shri Atmadev, in recognition of his devotion. Hit Harivansh Mahaprabhu later married Atmadev’s daughters and took the idol to Vrindavan, establishing the temple.
            </Paragraph>
            <Divider />
            <Title level={2}>Ashtyam Seva</Title>
            <Paragraph>
              The daily worship includes eight services (Ashtyam Seva) offered to Shri Radhavallabh Ji, each performed with love and care. These include Mangla Arti, Dhoop Shringar Arti, Shringar Arti, Raj Bhog Arti, Utthapan Arti, Dhoop Sandhya Arti, Sandhya Arti, and Shayan Arti.
            </Paragraph>
            <Divider />
            <Title level={2}>About Harivansh Mahaprabhu Ji</Title>
            <Paragraph>
              Shri Hit Harivansh Chandra Mahaprabhu, born in 1530, was a prominent Vaishnava saint and poet. He founded the Radha Vallabh Sampradaya and composed several important texts including “Radha Sudha Nidhi,” “Yamunashtak,” “Hit Chaurasi,” and “Hita Safut Vani.”
            </Paragraph>
            <Divider />
            <Title level={2}>Radhavallabh Sampradaya</Title>
            <Paragraph>
              The Sampradaya focuses on the love and devotion to Shri Radha Rani, considering her to be the Supreme Being. Unlike other sects, which emphasize worship of Krishna as the supreme deity, the Radhavallabh Sampradaya highlights the divine love between Krishna and Radha.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RadhavallabhJi;
