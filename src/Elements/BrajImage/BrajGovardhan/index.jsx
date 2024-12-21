import React, { useState } from 'react';
import LayoutEl from '../../../Shared/Layout';

const cardsData = [
  { id: 1, title: "Chakreshwar Mahadev Govardhan", templeName: "", imageUrl: "/govardhan/chakreshwarmahadevgovardha.jpeg" },
  { id: 2, title: "Govind Kund Govardhan", templeName: "", imageUrl: "/govardhan/govindkundgovardha.jpeg" },
  { id: 3, title: "Gulal Kund Govardhan", templeName: "", imageUrl: "/govardhan/gulalkundgovardha.jpeg" },
  { id: 4, title: "Kusum Sarovar Govardhan", templeName: "", imageUrl: "/govardhan/kusumsarovargovardha.jpeg" },
  { id: 6, title: "Lalita Kund Govardhan", templeName: "", imageUrl: "/govardhan/lalitakundgovardha.jpeg" },
  { id: 1, title: "Mukharbind Govardhan", templeName: "", imageUrl: "/govardhan/mukharbindgovardha.jpeg" },
  { id: 2, title: "Naval Kund Govardhan", templeName: "", imageUrl: "/govardhan/navalkundgovardha.jpeg" },
  { id: 4, title: "Punchri Ki Lotha Ji Govardhan", templeName: "", imageUrl: "/govardhan/punchrikilothajigovardha.jpeg" },
  { id: 6, title: "Rudra Kund Govardhan", templeName: "", imageUrl: "/govardhan/rudrakundgovardha.jpeg" },
  { id: 6, title: "Sankarsan Kund Govardhan", templeName: "", imageUrl: "/govardhan/sankarsankundgovardha.jpeg" },
  { id: 6, title: "Shindhuri Shila Govardhan", templeName: "", imageUrl: "/govardhan/shindhurishilagovardha.jpeg" },
  { id: 6, title: "Shri Nath Ji Govardhan", templeName: "", imageUrl: "/govardhan/shrinathjigovardha.jpeg" },
  { id: 6, title: "Udhaav Kund Govardhan", templeName: "", imageUrl: "/govardhan/udhaavkundgovardha.jpeg" },
  { id: 6, title: "Udhaav Mandir Kusum Sarovar Govardhan", templeName: "", imageUrl: "/govardhan/udhaavmandirkusumsarovargovardha.jpeg" },


  
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
