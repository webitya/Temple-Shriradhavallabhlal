import React, { useState } from 'react';
import LayoutEl from '../../../Shared/Layout';


const cardsData = [
  { id: 6, title: "Bankey Bihari Ji", templeName: "", imageUrl: "/vrindavan/bankeybiharij.jpeg" },
  { id: 6, title: "Gopeshwar Mahadev Ji", templeName: "", imageUrl: "/vrindavan/gopeshwarmahadevj.jpeg" },


  { id: 5, title: "Prem Mandir", templeName: "", imageUrl: "/vrindavan/premmandi.jpeg" },
  { id: 6, title: "Radha Raman", templeName: "", imageUrl: "/vrindavan/radharama.jpeg" },


  { id: 4, title: "Radhavallabh Ji", templeName: "", imageUrl: "/vrindavan/radhavallabhj.jpeg" },
  { id: 5, title: "Sneh Bihari Ji", templeName: "", imageUrl: "/vrindavan/snehbiharij.jpeg" },
  // { id: 1, title: "", templeName: "", imageUrl: "/vrindavan/10.jpeg" },
  // { id: 2, title: "", templeName: "", imageUrl: "/vrindavan/13.jpeg" },
  // { id: 3, title: "", templeName: "", imageUrl: "/vrindavan/16.jpeg" },
  // { id: 4, title: "", templeName: "", imageUrl: "/vrindavan/18.jpeg" },
  // { id: 5, title: "", templeName: "", imageUrl: "/vrindavan/21.jpeg" },
  // { id: 6, title: "", templeName: "", imageUrl: "/vrindavan/22.jpeg" },
  
  
];

const BrajVrindavan = () => {
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
        <h1 className='text-2xl text-center mt-5'>Vrindavan</h1>
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

export default BrajVrindavan;
