import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import OurManagement from "./OurManagement";
import OurGallery from "./OurGallery";
import ContactInfo from "./ContactInfo";
import { useEffect, useState } from "react"; // for managing state and side effects
import axios from "axios"; // for making the API call

const SimpleSlider = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/gallery`);
        setGalleryImages(response.data); // Store the images from API
      } catch (err) {
        setError("Failed to fetch gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // If images are loading or there's an error
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="slide">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${image.imageUrl})`, // Cloudinary image URL
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>

      <OurManagement></OurManagement>
<OurGallery></OurGallery>
<ContactInfo></ContactInfo>
    </div>
  );
};

export default SimpleSlider;


