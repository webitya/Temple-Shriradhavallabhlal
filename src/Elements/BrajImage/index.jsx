import React from 'react';
import { Link } from 'react-router-dom';

const cardsData = [
  { id: 1, templeName: "Vrindavan", imageUrl: "/vrindavan/brj5i.jpeg", link: "/braj-vrindavan" },
  { id: 2, templeName: "Mathura", imageUrl: "/vrindavan/brj1.jpeg", link: "/braj-mathura" },
  { id: 3, templeName: "Barsana", imageUrl: "/vrindavan/brj2.jpeg", link: "/braj-barsana" },
  { id: 4, templeName: "Govardhan", imageUrl: "/vrindavan/brj3.jpeg", link: "/braj-govardhan" },
  { id: 5, templeName: "Gokul", imageUrl: "/vrindavan/brj4.jpeg", link: "/braj-gokul" },
  { id: 6, templeName: "Nand Gaon", imageUrl: "/vrindavan/brj5.jpeg", link: "/braj-nand" },
];


const BrajDarshanImage = () => {
  return (
    <div className="min-h-screen bg-[#FAF3E0] py-10">
      <h1 className="text-3xl font-bold text-center text-[#4B4453] mb-8">BRAJDARSHAN</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {cardsData.map((card) => (
          <Link to={card.link} key={card.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              {/* Image Section */}
              <img
                src={card.imageUrl}
                alt={card.templeName}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />

              {/* Title Section */}
              <div className="p-4 bg-[#FFEFEF] text-center">
                <p className="text-xl font-medium text-[#3D155F]">{card.templeName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrajDarshanImage;
