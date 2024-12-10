import React, { useState } from 'react';
import Navbar from '../../NavbarEl';
import { CallToAction } from '@mui/icons-material';
import AppFooter from '../../../Shared/Footer';
import LayoutEl from '../../../Shared/Layout';

const cardsData = [
 
  { id: 2, title: "Asht Sakhi Mandir Barsana", templeName: "", imageUrl: "/barsana/asht sakhi mandir barsana.png" },
  { id: 3, title: "Daan Garh Barsana", templeName: "", imageUrl: "/barsana/daan garh barsana.png" },
  { id: 5, title: "Kirti Mandir Barsana", templeName: "", imageUrl: "/barsana/kirti mandir barsana.png" },
  { id: 2, title: "Maan Garh Barsana", templeName: "", imageUrl: "/barsana/maan garh barsana.png" },
  { id: 3, title: "Nagaridaskuter Barsana", templeName: "", imageUrl: "/barsana/nagaridaskuter barsana.png" },
  { id: 4, title: "Prem Sarovar Barsana", templeName: "", imageUrl: "/barsana/prem sarovar barsana.png" },
  { id: 5, title: "Radha Sarovar Barsana", templeName: "", imageUrl: "/barsana/radha sarovar barsana.png" },
  { id: 1, title: "Rangela Mahal Barsana", templeName: "", imageUrl: "/barsana/rangela mahal barsana.png" },
  { id: 2, title: "Shri Ju Radha Rani Mandir Barsana", templeName: "", imageUrl: "/barsana/shri ju radha rani mandir barsana.png" },
  { id: 1, title: "", templeName: "", imageUrl: "/barsana/3.png" },

  


  
];

const BrajBarsana = () => {
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
        <h1 className='text-2xl text-center mt-5'>Barsana</h1>
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

export default BrajBarsana;
