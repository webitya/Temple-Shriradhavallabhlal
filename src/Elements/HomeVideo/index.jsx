import React from 'react';
import { Row, Col, Card } from 'antd';

const VideoSection = () => {
  const videos = [
    {
      src: '/vid1.mp4',
      title: 'Video 1',
      description: 'This is a brief description of video one content.',
    },
    {
      src: '/vid2.mp4',
      title: 'Video 2',
      description: 'This is a brief description of video two content.',
    },
    {
      src: '/vid3.mp4',
      title: 'Video 3',
      description: 'This is a brief description of video three content.',
    },
  ];

  return (
    <section className="md:p-8 py-10 px-4">
      <h2 className="text-center text-4xl font-bold mb-8">Video Section</h2>
      <Row gutter={[16, 16]}>
        {videos.map((video, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              className="rounded-lg shadow-lg"
              cover={
                <video
                  src={video.src}
                  controls
                  className="w-full h-auto rounded-lg"
                >
                  Your browser does not support the video tag.
                </video>
              }
            >
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-gray-700">{video.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default VideoSection;
