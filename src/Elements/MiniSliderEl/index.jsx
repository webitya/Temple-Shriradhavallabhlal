import React, { useState } from 'react';
import { Carousel, Card, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const NextArrow = ({ onClick }) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
    <div
      className="bg-yellow-100 p-2 rounded-full hover:bg-gray-600 transition duration-300"
      onClick={onClick}
    >
      <RightOutlined className="text-yellow-500" />
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
    <div
      className="bg-yellow-100 p-2 rounded-full hover:bg-gray-600 transition duration-300"
      onClick={onClick}
    >
      <LeftOutlined className="text-yellow-500" />
    </div>
  </div>
);

const MiniSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    { title: "Hitotsava", description: "Details about Hitotsava...", image: "/bg1.jpg" },
    { title: "Vyahula Utsav", description: "Details about Vyahula Utsav...", image: "/ca1.jpg" },
    { title: "Radhasthami", description: "Details about Radhasthami...", image: "/ca2.jpg" },
    { title: "Khichadi Utsav", description: "Details about Khichadi Utsav...", image: "/ca3.jpg" },
    { title: "Jhulan Utsav", description: "Details about Jhulan Utsav...", image: "/bg1.jpg" },
    { title: "Sharad Purnima", description: "Details about Sharad Purnima...", image: "/ca1.jpg" },
    { title: "Maharas", description: "Details about Maharas...", image: "/ca2.jpg" },
    { title: "Guru Purnima", description: "Details about Guru Purnima...", image: "/ca3.jpg" },
    { title: "Haryali Teej", description: "Details about Haryali Teej...", image: "/bg1.jpg" },
    { title: "Nauka Utsav", description: "Details about Nauka Utsav...", image: "/ca1.jpg" },
    { title: "Janamashtami", description: "Details about Janamashtami...", image: "/ca2.jpg" },
    { title: "Radhasthami", description: "Details about Radhasthami...", image: "/ca3.jpg" },
  ];

  const isSmallDevice = window.innerWidth < 576; // Adjust based on your needs
  const itemsPerSlide = isSmallDevice ? 3 : 6;

  const slides = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    slides.push(items.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="container mx-auto px-2 py-3 relative">
      <div className='p-0 m-0 flex justify-between'>
        <h1>All About Seva</h1>
        <h1 className='text-yellow-800'>View All</h1>
      </div>
      <Carousel
        arrows
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        autoplay
        dots={false}
        beforeChange={(current, next) => setCurrentSlide(next)}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Row gutter={[16, 16]} justify="center">
              {slide.map((item, itemIndex) => (
                <Col xs={8} md={4} key={itemIndex}>
                  <Card
                    hoverable
                    cover={<img alt={item.title} src={item.image} />}
                    className="flex flex-col h-full" // Makes cards equal height
                  >
                    <Card.Meta title={item.title} className="mt-auto" /> {/* Ensures title stays at the bottom */}
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MiniSlider;
