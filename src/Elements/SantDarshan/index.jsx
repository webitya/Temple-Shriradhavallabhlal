import React, { useState } from 'react';

const santData = [
  { id: 1, title: "Goswami Shri Hit Harivansh Mahaprabhu ji", description: "Goswami hit Harivansh Mahaprabhu ji incarnation of Sri Priya Pritam ju’s flute who is Hit Sajni ju in Nikunj. Mahaprabhu ji spread Shri Priya pritam’s divine nectarian eternal pastimes Hit Prem Rasbhakti to rasiks. Mahaprabhu ji offer services to his beloved Shri Radhavallabh lal ji in Unchi Thor under dense grove now it is old Radhavallabh Temple or Shri Hit Harivansh Mahaprabhuji Temple.",imageUrl: "/Sant Darshan/1.png"  },
  { id: 3, title: "Shri Hariram Vyas ji", description: "Hariram Vyas (Samvat 1567 - 1689) was a high-ranking devotee and poet of the Radhavallabh sect. He is incarnation of Vishakha Sakhi.  He is disciple of Shri Hit Harivansh Mahaprabhu ji. Shri Hariram vyas ji revealed Shri Jugal Kishore ji from well in Kishore Van, Vrindavan and today established in Panna city of Madhya Pradesh. He is composer of “Vyas vani” ", imageUrl: "/Sant Darshan/hariramvyasji.png" },
  { id: 3, title: "Shri Hit Sewak ji Maharaj", description: "Damodardasji, who became known as “Sewak ji,” held a unique place in the practice of seva (selfless service). Shri Sewak ji maharaj compose Sewak Vani which is footfall of Shir Radhavallabh sec. His dedication to the service of his Guru and spiritual duties made him stand out among all the followers of the Hit lineage. The name of Shri Harivansh and his divine teachings were more dear to Sevak ji than his own life.", imageUrl: "/Sant Darshan/sewak ji.png" },
  { id: 4, title: "Shri Hit Dhruva das ji Maharaj", description: "Shri Hita Dhruvdas was the disciple of Shri Gopinath, the third son of Shri Hita Harivansh Mahaprabhu of Shri Radha Vallabh sect. His compositions are very famous in Shri Vrindavan Dham, and among the devotees who follow Vrindavana's Rasopasna. He compossed Bayalees Leela and Vrindavan Shat Leela.", imageUrl: "/Sant Darshan/dhruvdasji.png" },
  // { id: 4, title: "Sant 4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", imageUrl: "/Sant Darshan/harivansh ji mahaprabhu (2).png" },
 
  { id: 5, title: "Shri Hit Neh Nagri Das ji", description: "Shri Hit Neh Nagaridas ji born around 1590 in Berchha village Madhya Pradesh, in a rich Panwar Kshatriya family. Once Shri Hit Chaturbhuj das ji visited his village along with the saint congregation for satsang he got attracted towards nitya vihar upasna. He is disciple of Radhavallabh Acharya Goswami Vanchnadra ji.  Nagaridas Ji gave a very delicious meal to sriji when she appeared with her sakhiya after playing pastime with lal ji  at midnight and continued to live this rule of Nishith-Bhog (kheer and puri). At that time, Radha Ji had said to build a temple in Barsana and celebrate the birth anniversary every year.", imageUrl: "/Sant Darshan/11.jpg" },
  { id: 6, title: "Shri Hit Chacha Vrindavan Das ji", description: "Shri Hit Vrindavan Das Ji was born in Brajdham, He was the most benevolent disciple of Radhavallabh sec. Acharya Hitavatansh Rasavanshiya Goswami Sri Harilal Vyas Ji's son, immersed in divine couple's nectar, Goswami Shri Hit Rooplal Ji. Chacha Vrindavan das ji compossed many padawali such as Karuna Beli , Yugal Sneh Patrika, Shri Radha roop Pratap beli, Shri Vrindavan Jas prakas beli, Aarat patrika beli , Bhakti prarthna beli , Vivek Lakshan Beli. ", imageUrl: "/Sant Darshan/chachavrindavandasji.png" },
  { id: 7, title: "Goswami Shri Hit Kamal Nayan ji Maharaj", description: "Goswami Shri Hit Kamalnayan Ji was a great poet of Shri Radhavallabh sect. He was born in the lineage of Shri Hita Harivansh Mahaprabhu ji in Vrindavan. Samay Prabandha, Asthyam,  Utsav Padawali Varshotsav  the verses of  Basant Holi , Pjooldol , Chandan Rachna Phool Rachna , Jhulan etc have been found. ", imageUrl: "/Sant Darshan/harivansh ji mahaprabhu.png" },
  { id: 8, title: "Goswami Shri Hit Krishn Chandra Ji", description: "Goswami Shri Hita Krishn Chandra ji, a Rasik saint of Vrindavan and 2nd son of Great Rasik Shiromani Shri Hita Harivansh Mahaprabhu. He composed Shri Radha Upsudha Nidhi. Early days he reside in Deoband and offering service to Shri Navrangi Lal ji who revealed by Shri Hit Harivansh Mahprabhu ji from well in their courtyard. ", imageUrl: "/Sant Darshan/krishna das ji.png" },
  { id: 9, title: "Goswami Shri Hit Vanchandra Ji Maharaj", description: "Goswami Hit Vanchandra Goswami Ji maharaj was the eldest son of Shri Hit Harivansh Mahaprabhu. He was born on the 6th day of the dark fortnight in the month of Chaitra (April) in 1528 in Deoband. He was built first red stone temple in Vrindavan for Shri Radhavallabh lal ji in 1584. ", imageUrl: "/Sant Darshan/vanchandra.png" },
  { id: 10, title: "Goswami Shri Hit Chandralal ji ", description: "Goswami Shri Hit Chandralal ji was contemporary of Shri Hit Chacha Vrindavan Das ji , a Rasik of Shri Radha Vallabh Sec. He was in the lineage of Shri Kishori ji who is daughter of Goswami Shri Hit Vanchandra ji. He composed Bhavana Pacchisi , Vrindavan Prakash Mala , Abhilash Battisi etc.  ", imageUrl: "/Sant Darshan/vithal vipul dev ji.png" },
];

const SantDarshan = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image URL

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the selected image URL when an image is clicked
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal by setting selected image to null
  };

  return (
    <div className="p-6 my-2" style={{userSelect:"none"}}>
      {santData.map((sant) => (
        <div key={sant.id} className="flex border rounded-lg shadow-md overflow-hidden mb-4">
          {/* Left Side Image */}
          <div className="flex-shrink-0 p-2" onClick={() => handleImageClick(sant.imageUrl)}>
            <img 
              src={sant.imageUrl} 
              alt={sant.title} 
              className="w-48 h-48 object-cover cursor-pointer" 
              loading="lazy" // Add lazy loading for better performance
            />
          </div>

          {/* Right Side Content */}
          <div className="p-4 w-full">
            <h3 className="text-xl font-semibold text-gray-800">{sant.title}</h3>
            <p className="text-gray-600 mt-2">{sant.description}</p>
          </div>
        </div>
      ))}

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleCloseModal} // Close modal when clicking outside the image
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button 
              className="absolute top-2 right-2 text-black text-3xl font-bold"
              onClick={handleCloseModal} // Close modal on button click
              style={{ outline: 'none', boxShadow: 'none' }} // Ensure no hover effect
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Full-screen" 
              className="object-contain mx-auto rounded-md shadow-lg" 
              style={{ width: '80%', height: '75vh' }} // Responsive image size
              loading="lazy" // Add lazy loading for better performance
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SantDarshan;
