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

  return (
    <div className="relative w-full">
      <Carousel autoplay ref={carouselRef} dots={false}>
        {/* Slide 1 */}
        <div>
          <div
            className="carouselImg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: 'url("/carousel/1.png")' }}
          />
        </div>

        {/* Slide 2 */}
        <div>
          <div
            className="carouselImg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: 'url("/carousel/2.png")' }}
          />
        </div>

        {/* Slide 3 */}
        <div>
          <div
            className="carouselImg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: 'url("/ca2.jpg")' }}
          />
        </div>

        {/* Slide 4 */}
        <div>
          <div
            className="carouselImg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: 'url("/ca3.jpg")' }}
          />
        </div>

        {/* Slide 5 */}
        <div>
          <div
            className="carouselImg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: 'url("/ca2.jpg")' }}
          />
        </div>

        {/* Slide 6 */}
        <div>
          <div
            className="carouselImg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: 'url("/ca1.jpg")' }}
          />
        </div>

        {/* Slide 7 */}
        <div>
          <div
            className="carouselImg h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: 'url("/ca3.jpg")' }}
          />
        </div>
      </Carousel>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white bg-[#FABC3F] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#4a225a] transition"
      >
        <LeftOutlined className="text-lg md:text-xl" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white bg-[#FABC3F] p-2 md:p-3 rounded-full shadow-lg hover:bg-[#4a225a] transition"
      >
        <RightOutlined className="text-lg md:text-xl" />
      </button>
    </div>
  );
};

export default CarouselEl;