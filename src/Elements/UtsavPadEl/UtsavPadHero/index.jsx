import React from 'react';

const cardsData = [
  { id: 1, title: "Anakut Darshan", imageUrl: "/Utsav/AnakutDarsha.jpeg", pdfUrl: "/HitSahityPdf/Yamunashtak.pdf" },
  { id: 2, title: "basant utsav", imageUrl: "/Utsav/basantutsa.jpeg", pdfUrl: "/HitSahityPdf/Hit Chaurasi ji.pdf" },
  { id: 3, title: "Chandan Utsav", imageUrl: "/Utsav/ChandanUtsa.jpeg", pdfUrl: "/HitSahityPdf/Sfut Vani.pdf" },
  { id: 4, title: "deepawali utsav", imageUrl: "/Utsav/deepawaliutsa.jpeg", pdfUrl: "/HitSahityPdf/Vrindavan dham ko mandal.pdf" },
  { id: 5, title: "gopasthmi", imageUrl: "/Utsav/gopasthm.jpeg", pdfUrl: "/HitSahityPdf/Karuna Beli.pdf" },
  { id: 6, title: "Vrindavan Satlila", imageUrl: "/Utsav/GulabDo.jpeg", pdfUrl: "/HitSahityPdf/Vrindavan Satlila.pdf" },
  { id: 7, title: "Haryali Teej", imageUrl: "/Utsav/HaryaliTee.jpeg", pdfUrl: "/HitSahityPdf/Sewak Vani.pdf" },
  { id: 8, title: "Hitotsav", imageUrl: "/Utsav/Hitotsa.jpeg", pdfUrl: "/Utsav/tempImagecTDNAI.jpeg" },
  { id: 9, title: "Holi ", imageUrl: "/Utsav/Holi.jpeg", pdfUrl: "/Utsav/tempImageeHNRIr.jpeg" },
  { id: 10, title: "Holi Dol Utsav", imageUrl: "/Utsav/HoliDolUtsa.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
  { id: 11, title: "Holi Utsav", imageUrl: "/Utsav/HoliUtsav.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
  { id: 12, title: "Jhulan Utsav", imageUrl: "/Utsav/JhulanUtsa.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
 
  { id: 13, title: "Khichadi Utsav", imageUrl: "/Utsav/KhichadiUtsa.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" }, 
  { id: 14, title: "Nauka Vihar", imageUrl: "/Utsav/NaukaViha.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
  { id: 15, title: "Radhastami", imageUrl: "/Utsav/Radhastam.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
  { id: 16, title: "Sharad Utsav", imageUrl: "/Utsav/SharadUtsa.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
  { id: 17, title: "Vyahula Utsav", imageUrl: "/Utsav/VyahulaUtsa.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
  { id: 18, title: "Vyahula", imageUrl: "/Utsav/Vyahul.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
  { id: 19, title: "Yugal Darshan", imageUrl: "/Utsav/YugalDarsha.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
  { id: 10, title: "Krishna Janamasthami", imageUrl: "/Utsav/KrishnaJanamastham.jpeg", pdfUrl: "/Utsav/tempImageEIr0WQ.jpeg" },
 

  
  
];

const UtsavCards = () => {
  const handleDownload = (pdfUrl) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop();
    link.click();
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 py-6 justify-items-center">
      {cardsData.map((card) => (
        <div 
          key={card.id} 
          className="shadow-lg !mx-2 cursor-pointer mb-4 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl rounded-lg" 
          onClick={() => handleDownload(card.pdfUrl)}
          aria-label={`Download ${card.title}`} // Adds accessibility
          style={{ width: '100%', maxWidth: '190px', height: '300px' }} // Adjusted width for better responsiveness
        >
          <div className="overflow-hidden rounded-t-lg">
            <img 
              src={card.imageUrl} 
              alt={card.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-lg" // Subtle zoom effect on hover
            />
          </div>
          <div className="bg-gray-100 text-center py-2 rounded-b-lg transition-colors duration-300 hover:bg-gray-200">
            <p className="text-sm font-semibold text-gray-700">{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UtsavCards;
