import React, { useState, useEffect } from 'react';
import { Carousel, Card, Row, Col, Button, Tooltip, Modal } from 'antd';
import {
  ClockCircleOutlined,
  CalendarOutlined,
  BellOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import 'animate.css';

const NextArrow = ({ onClick }) => (
  <Tooltip title="Next" placement="top">
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition-transform duration-300 hover:scale-125"
      onClick={onClick}
    >
      <div className="bg-yellow-500 p-3 rounded-full shadow-md">
        <RightOutlined className="text-white text-lg" />
      </div>
    </div>
  </Tooltip>
);

const PrevArrow = ({ onClick }) => (
  <Tooltip title="Previous" placement="top">
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition-transform duration-300 hover:scale-125"
      onClick={onClick}
    >
      <div className="bg-yellow-500 p-3 rounded-full shadow-md">
        <LeftOutlined className="text-white text-lg" />
      </div>
    </div>
  </Tooltip>
);

const TimingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const isSmallDevice = windowWidth < 576;
  const itemsPerSlide = isSmallDevice ? 1 : 2;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const timingEvents = [
    { title: "Mangla Aarti", description: "5:30 am", icon: <ClockCircleOutlined /> },
    { title: "Dhoop Aarti", description: "9:00 am", icon: <CalendarOutlined /> },
    { title: "Sringar Aarti", description: "10:00 am", icon: <ClockCircleOutlined /> },
    { title: "Rajbhog Aarti", description: "12:00 pm", icon: <BellOutlined /> },
    { title: "Uthapan Aarti", description: "5:30 pm", icon: <BellOutlined /> },
    { title: "Sandhya Aarti", description: "6:30 pm", icon: <BellOutlined /> },
    { title: "Sayan Aarti", description: "8:30 pm", icon: <BellOutlined /> },
  ];

  const slides = [];
  for (let i = 0; i < timingEvents.length; i += itemsPerSlide) {
    slides.push(timingEvents.slice(i, i + itemsPerSlide));
  }

  return (
    <div
      className="container mx-auto px-6 py-10"
      style={{ background: 'linear-gradient(to right, #fff9c4, #ffecb3)' }}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-700 tracking-wider">
          Temple Timing Schedule
        </h1>
        <Button
          type="primary"
          className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 rounded-full shadow-md"
          onClick={() => setIsModalVisible(true)}
        >
          View All
        </Button>
      </div>

      <Carousel
        arrows
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        autoplay
        autoplaySpeed={3000}
        dots={false}
        beforeChange={(current, next) => setCurrentSlide(next)}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Row gutter={[16, 24]} justify="center">
              {slide.map((event, eventIndex) => (
                <Col xs={24} md={12} key={eventIndex}>
                  <Card
                    hoverable
                    className="flex flex-col h-full shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                    style={{ background: 'linear-gradient(to top, #fffde7, #fff9c4)' }}
                  >
                    <div className="text-yellow-600 text-5xl mb-3 animate__animated animate__fadeInDown flex justify-center">
                      {event.icon}
                    </div>
                    <h2 className="text-center text-2xl font-bold text-yellow-700 mb-2">
                      {event.title}
                    </h2>
                    <p className="text-center text-gray-700 text-lg mb-4">
                      {event.description}
                    </p>
                    <div className="flex justify-center mt-auto">
                      <Button
                        type="primary"
                        className="bg-yellow-500 hover:bg-yellow-600 transition-transform duration-300 hover:scale-110"
                      >
                        Know More
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>

      <Modal
        title="All Timings"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
      >
        <div>
          {timingEvents.map((event, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-bold text-yellow-700">{event.title}</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default TimingSection;
