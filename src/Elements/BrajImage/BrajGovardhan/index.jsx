import React, { useState } from 'react';
import LayoutEl from '../../../Shared/Layout';

const cardsData = [
  { id: 1, title: "Chakreshwar Mahadev Govardhan", templeName: "", imageUrl: "/govardhan/chakreshwar mahadev govardhan.png" },
  { id: 2, title: "Govind Kund Govardhan", templeName: "", imageUrl: "/govardhan/govind kund govardhan.png" },
  { id: 3, title: "Gulal Kund Govardhan", templeName: "", imageUrl: "/govardhan/gulal kund govardhan.png" },
  { id: 4, title: "Kusum Sarovar Govardhan", templeName: "", imageUrl: "/govardhan/kusum sarovar govardhan (2).png" },
  { id: 5, title: "Kusum Sarovar Govardhan", templeName: "", imageUrl: "/govardhan/kusum sarovar govardhan.png" },
  { id: 6, title: "Lalita Kund Govardhan", templeName: "", imageUrl: "/govardhan/lalita kund govardhan.png" },
  { id: 1, title: "Mukharbind Govardhan", templeName: "", imageUrl: "/govardhan/mukharbind govardhan.png" },
  { id: 2, title: "Naval Kund Govardhan", templeName: "", imageUrl: "/govardhan/naval kund govardhan.png" },
  { id: 4, title: "Punchri Ki Lotha Ji Govardhan", templeName: "", imageUrl: "/govardhan/punchri ki lotha ji govardhan.png" },
  { id: 5, title: "Radha Kund Govardhan", templeName: "", imageUrl: "/govardhan/radha kund govardhan.png" },
  { id: 6, title: "Rudra Kund Govardhan", templeName: "", imageUrl: "/govardhan/rudra kund govardhan.png" },
  { id: 6, title: "Sankarsan Kund Govardhan", templeName: "", imageUrl: "/govardhan/sankarsan kund govardhan.png" },
  { id: 6, title: "Shindhuri Shila Govardhan", templeName: "", imageUrl: "/govardhan/shindhuri shila govardhan.png" },
  { id: 6, title: "Shri Nath Ji Govardhan", templeName: "", imageUrl: "/govardhan/shri nath ji govardhan.png" },
  { id: 6, title: "Sindhuri Shila Govardhan", templeName: "", imageUrl: "/govardhan/sindhuri shila govardhan.png" },
  { id: 6, title: "Udhaav Kund Govardhan", templeName: "", imageUrl: "/govardhan/udhaav kund govardhan.png" },
  { id: 6, title: "Udhaav Mandir Kusum Sarovar Govardhan", templeName: "", imageUrl: "/govardhan/udhaav mandir kusum sarovar govardhan.png" },


  
];

const BrajGovardhan = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
     <LayoutEl>
      {/* Grid of Cards */}
      {/* ========Vrindavan=============== */}
      <div>
        <h1 className='text-2xl text-center mt-5'>Govardhan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 my-2">
        {cardsData.map((card) => (
          <div 
            key={card.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-2xl cursor-pointer"
            onClick={() => handleImageClick(card.imageUrl)}
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img 
                src={card.imageUrl} 
                alt={card.title} 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                loading="lazy"
              />
            </div>

            {/* Title Section */}
            <div className="p-4 bg-gradient-to-br from-[#EAD1E5] via-[#F4B9D8] to-[#FFEDDB] text-center">
              <p className="text-lg text-[#5F2C70]">{card.templeName}</p>
              <p className="text-sm font-semibold text-[#5F2C70]">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
      {/* =========Vrindawan============== */}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 mt-10 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleCloseModal} 
          style={{ userSelect: "none" }}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button 
              className="absolute top-2 right-2 text-black text-3xl font-bold"
              onClick={handleCloseModal}
              style={{ outline: 'none', boxShadow: 'none' }} 
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Full-screen" 
              className="object-contain mx-auto rounded-md shadow-lg" 
              style={{ width: '80%', height: '75vh' }}
              loading="lazy" 
            />
          </div>
        </div>
      )}
  </LayoutEl>
  );
};

export default BrajGovardhan;
