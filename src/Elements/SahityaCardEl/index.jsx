import React from 'react';

const cardsData = [
  { id: 1, title: "Yamunashtak", imageUrl: "/HitSahityaPdfCover/1.jpg", pdfUrl: "/HitSahityPdf/Yamunashtak.pdf" },
  { id: 2, title: "Hit Chaurasi ji", imageUrl: "/HitSahityaPdfCover/2.jpg", pdfUrl: "/HitSahityPdf/Hit Chaurasi ji.pdf" },
  { id: 3, title: "Sfut Vani", imageUrl: "/HitSahityaPdfCover/3.jpg", pdfUrl: "/HitSahityPdf/Sfut Vani.pdf" },
  { id: 4, title: "Vrindavan dham ko mandal", imageUrl: "/HitSahityaPdfCover/4.jpg", pdfUrl: "/HitSahityPdf/Vrindavan dham ko mandal.pdf" },
  { id: 5, title: "Karuna Beli", imageUrl: "/HitSahityaPdfCover/5.jpg", pdfUrl: "/HitSahityPdf/Karuna Beli.pdf" },
  { id: 6, title: "Vrindavan Satlila", imageUrl: "/HitSahityaPdfCover/6.jpg", pdfUrl: "/HitSahityPdf/Vrindavan Satlila.pdf" },
  { id: 7, title: "Sewak Vani", imageUrl: "/HitSahityaPdfCover/7.jpg", pdfUrl: "/HitSahityPdf/Sewak Vani.pdf" },
  { id: 8, title: "Shrihit Mangal Gaan", imageUrl: "/HitSahityaPdfCover/8.jpg", pdfUrl: "/HitSahityPdf/Shrihit Mangal Gaan.pdf" },
  { id: 9, title: "Ashtyam Padawali", imageUrl: "/HitSahityaPdfCover/9.jpg", pdfUrl: "/HitSahityPdf/ashtyam padawali.pdf" },
  { id: 10, title: "Utsav Patrika", imageUrl: "/HitSahityaPdfCover/10.jpg", pdfUrl: "/HitSahityPdf/Utsav Patrika.pdf" },
];

const CardsComponent = () => {
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

export default CardsComponent;
