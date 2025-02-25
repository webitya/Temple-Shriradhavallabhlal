import React, { useState } from 'react';
import { Carousel, Card, Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const NextArrow = ({ onClick }) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
    <div
      className="bg-purple-500 p-2 rounded-full hover:bg-purple-700 transition duration-300"
      onClick={onClick}
    >
      <RightOutlined className="text-white" />
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
    <div
      className="bg-purple-500 p-2 rounded-full hover:bg-purple-700 transition duration-300"
      onClick={onClick}
    >
      <LeftOutlined className="text-white" />
    </div>
  </div>
);

const SahityaHSlider= () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    { title: "Yamunashtak", image: "/HitSahityaPdfCover/1.jpg" },
    { title: "Hit Chaurasi ji", image: "/HitSahityaPdfCover/2.jpg" },
    { title: "Sfut Vani", image: "/HitSahityaPdfCover/3.jpg" },
    { title: "Vrindavan dham ko mandal", image: "/HitSahityaPdfCover/4.jpg" },
    { title: "Karuna Beli", image: "/HitSahityaPdfCover/5.jpg" },
    { title: "Vrindavan Satlila", image: "/HitSahityaPdfCover/6.jpg" },
    { title: "Sewak Vani", image: "/HitSahityaPdfCover/7.jpg" },
    { title: "Shrihit Mangal Gaan", image: "/HitSahityaPdfCover/8.jpg" },
    { title: "Ashtyam Padawali", image: "/HitSahityaPdfCover/9.jpg" },
    { title: "Utsav Patrika", image: "/HitSahityaPdfCover/10.jpg" },
  ];

  const isSmallDevice = window.innerWidth < 576; // Adjust based on your needs
  const itemsPerSlide = isSmallDevice ? 3 : 6;

  const slides = [];
  for (let i = 0; i < items.length; i += itemsPerSlide) {
    slides.push(items.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="container mx-auto px-2 py-3 relative">
      <div className="p-0 m-0 flex justify-between items-center mb-4">
        {/* Elegant, smaller font size and style for the header */}
        <h1 className="text-xl md:text-2xl font-semibold text-purple-700 tracking-wide">
        श्रीहित रसोपासना एवं संतों की वाणी 

        </h1>
       
        <Link to="/hit-sahitya">
        <h1 className="text-purple-500 hover:text-purple-800 transition cursor-pointer font-medium text-base md:text-lg border border-purple-500 px-4 py-1 rounded-full hover:bg-purple-50">
          View All
        </h1>
        </Link>
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
             <Link to="/hit-sahitya" target='_blank'>
             <Row gutter={[16, 16]} justify="center">
              {slide.map((item, itemIndex) => (
                <Col xs={8} md={4} key={itemIndex}>
                  <Card
                    hoverable
                    cover={<img alt={item.title} src={item.image} />}
                    className="flex flex-col h-full shadow-lg transform hover:scale-105 transition duration-300"
                  >
                    <Card.Meta title={item.title} className="p-0 mt-auto text-center font-small text-purple-700" />
                  </Card>
                </Col>
              ))}
            </Row></Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SahityaHSlider;
