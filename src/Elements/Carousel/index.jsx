import React, { useRef } from 'react'; 
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Carousel.css';

const CarouselEl = () => {
  const carouselRef = useRef();

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  // Array of slide data
  const slides = [
    { id: 1, imageUrl: "/Carousel2/1.jpg" },
    { id: 2, imageUrl: "/Carousel2/2.jpg" },
    { id: 3, imageUrl: "/Carousel2/3.jpg" },
    { id: 4, imageUrl: "/Carousel2/4.jpg" },
    { id: 5, imageUrl: "/Carousel2/5.jpg" },
    { id: 6, imageUrl: "/Carousel2/6.jpg" },
  ];

  return (
    <div className="relative w-full">
      <Carousel autoplay ref={carouselRef} dots={false}>
        {slides.map(slide => (
          <div key={slide.id}>
            <div
              className="carouselImg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.imageUrl}")` }}
            />
          </div>
        ))}
      </Carousel>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#FABC3F] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#FABC3F]] transition"
      >
        <LeftOutlined className="text-lg md:text-xl" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#FABC3F] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#FABC3F]] transition"
      >
        <RightOutlined className="text-lg md:text-xl" />
      </button>
    </div>
  );
};

export default CarouselEl;
