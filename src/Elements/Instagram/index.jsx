// const InstagramFeed = () => {
//     const handleRedirect = () => {
//         window.open('https://instagram.com/webitya_web', '_blank');
//     };

//     return (
//         <div className="bg-pink-400 flex justify-center items-center p-3" style={{width:"100%",minHeight:"100vh"}}>
//             <div className="relative bg-white p-8 rounded-lg shadow-md mx-auto" style={{width:"70%"}}>
//             <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900">
//                 Follow Us on Instagram
//             </h2>
//             <p className="text-center text-lg text-gray-500 mb-4">
//                 Check out our latest posts and updates from <span className="font-bold">@webitya_web</span>
//             </p>

//             <div className="relative w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
//                 {/* SnapWidget Iframe */}
//                 <iframe
//                     src="https://snapwidget.com/embed/1081509"
//                     className="snapwidget-widget rounded-lg shadow-md col-span-2 sm:col-span-4"
//                     allowTransparency="true"
//                     frameBorder="0"
//                     scrolling="yes"
//                     style={{ border: 'none', overflow: 'hidden', borderRadius: '8px' }}
//                     width="100%"
//                     height="600px" // Reduced height for more compact design
//                     title="Posts from Instagram"
//                 ></iframe>

//                 {/* Transparent Overlay */}
//                 <div
//                     className="absolute inset-0"
//                     onClick={handleRedirect}
//                     style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
//                 ></div>
//             </div>

//             <div className="text-center mt-6">
//                 <button
//                     onClick={handleRedirect}
//                     className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-500 transition duration-300"
//                 >
//                     Visit Our Instagram
//                 </button>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default InstagramFeed;
const InstagramFeed = () => {
    const handleRedirect = () => {
        window.open('https://instagram.com/webitya_web', '_blank');
    };

    return (
        <div className="bg-pink-400 flex justify-center items-center p-3" style={{ width: "100%", minHeight: "100vh" }}>
            <div className="relative bg-white p-8 rounded-lg shadow-md mx-auto" style={{ width: "70%" }}>
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900">
                    Follow Us on Instagram
                </h2>
                <p className="text-center text-lg text-gray-500 mb-4">
                    Check out our latest posts and updates from <span className="font-bold">@webitya_web</span>
                </p>

                <div className="relative w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {/* SnapWidget Iframe */}
                    <iframe
                        src="https://snapwidget.com/embed/1081509"
                        className="snapwidget-widget rounded-lg shadow-md col-span-2 sm:col-span-4"
                        allowTransparency="true"
                        frameBorder="0"
                        scrolling="yes" // Ensure scrolling is enabled
                        style={{ border: 'none', overflow: 'hidden', borderRadius: '8px', height: '600px' }}
                        width="100%"
                        title="Posts from Instagram"
                    ></iframe>

                    {/* Transparent Overlay */}
                    <div
                        className="absolute inset-0"
                        onClick={handleRedirect}
                        style={{ cursor: 'pointer', backgroundColor: 'transparent' }}
                    ></div>
                </div>

                <div className="text-center mt-6">
                    <button
                        onClick={handleRedirect}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-500 transition duration-300"
                    >
                        Visit Our Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstagramFeed;

