import React, { useState } from 'react';
import LayoutEl from '../../../Shared/Layout';

const cardsData = [
  { id: 1, title: "Aashehwar Mahadev Nandgoan", templeName: "", imageUrl: "/nand goan/aashehwar mahadev nandgoan.png" },
  { id: 2, title: "Charan Pahadi Nandgoan", templeName: "", imageUrl: "/nand goan/charan pahadi nandgoan (2).png" },
  { id: 3, title: "Charan Pahadi Nandgoan", templeName: "", imageUrl: "/nand goan/charan pahadi nandgoan.png" },
  { id: 4, title: "Mor Bihari Mandir Nandgoan", templeName: "", imageUrl: "/nand goan/mor bihari mandir nandgoan.png" },
  { id: 5, title: "Nand Bethak Nandgoan", templeName: "", imageUrl: "/nand goan/nand bethak nandgoan.png" },
  { id: 6, title: "Nand Kung Nandgoan", templeName: "", imageUrl: "/nand goan/nand kung nandgoan.png" },
  { id: 2, title: "Pawan Sarovar Nandgoan", templeName: "", imageUrl: "/nand goan/pawan sarovar nandgoan.png" },
  { id: 3, title: "Ter Katab Nandgoan", templeName: "", imageUrl: "/nand goan/ter katab nandgoan.png" },
  { id: 4, title: "udhavi Kiyari Nandgoan", templeName: "", imageUrl: "/nand goan/udhavi kiyari nandgoan.png" },
  { id: 5, title: "Varinda Devi Mandir Nandgoan", templeName: "", imageUrl: "/nand goan/varinda devi mandir nandgoan (2).png" },
  { id: 6, title: "Varinda Devi Mandir Nandgoan", templeName: "", imageUrl: "/nand goan/varinda devi mandir nandgoan.png" },
  { id: 6, title: "Yashoda Baethak Nandgoan", templeName: "", imageUrl: "/nand goan/yashoda baethak nandgoan.png" },
  { id: 6, title: "Yasodha kund Nandgoan", templeName: "", imageUrl: "/nand goan/yasodha kund nandgoan.png" },



  
];

const BrajNand = () => {
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
        <h1 className='text-2xl text-center mt-5'>Nandgoan</h1>
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

export default BrajNand;
