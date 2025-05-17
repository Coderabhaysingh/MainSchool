import React, { useEffect, useState } from "react";
import axios from "axios";

const OurGallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        // Fetch all images from the API
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/gallery`);
        
        // Limit the images to the latest 4 or fewer if there aren't that many
        const latestImages = response.data.slice(0, 4);
        setGalleryImages(latestImages);
      } catch (err) {
        setError("Failed to fetch gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // If images are loading or there's an error
  if (loading) return <div>Loading gallery...</div>;
  if (error) return <div>{error}</div>;

  // If there are no images, show a message
  if (galleryImages.length === 0) return <div>No images available in the gallery.</div>;

  return (
    <div className="mx-[4rem] md:mt-12 mt-5">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">
          Our&nbsp;<span className="text-[#f1992d]">Gallery</span>
        </h1>
        <div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
        <div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.imageUrl} // Cloudinary image URL from the API
              alt={image.title || `Gallery image ${index + 1}`} // Use the image title or fallback to default alt text
              className="object-cover h-72 w-full max-w-xs rounded-md shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Handle case when there are fewer than 4 images */}
      {galleryImages.length < 4 && (
        <div className="mt-6 text-gray-500">
          <p>Only {galleryImages.length} images available in the gallery.</p>
        </div>
      )}
    </div>
  );
};

export default OurGallery;