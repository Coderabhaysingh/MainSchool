import React, { useEffect, useState } from "react";
import HelpingPage from "./HelpingPage";
import axios from "axios";

const Gallery = () => {
  const pageInfo = {
    pageHeading: "Gallery",
    pageName: "Gallery",
    path: "/gallery",
  };

  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/gallery`);
        setImageData(response.data);
      } catch (err) {
        setError("Failed to fetch gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <HelpingPage pageInfo={pageInfo} />
      <div className="md:mx-[4rem] my-5">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold mb-2">
            Our&nbsp;<span className="text-[#f1992d]">Gallery</span>
          </h1>
          <div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
          <div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {imageData.map((item) => (
            <div key={item._id} className="overflow-hidden rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={item.imageUrl} // No need to prepend the base URL
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-center text-gray-700 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
