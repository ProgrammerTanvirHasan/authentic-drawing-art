import { useState } from "react";

const images = [
  "https://i.ibb.co/yS1LhVS/creative-woman-working-her-workshop.jpg",
  "https://i.ibb.co/r7xDy49/creative-woman-nature-painting.jpg",
  "https://i.ibb.co.com/7N4xFCv/artistic-supplies-school-art-room-1243330-2376.jpg",
  "https://i.ibb.co/1GPRjSV/side-view-female-artist-painting.jpg",
  "https://i.ibb.co.com/ZGY8JJd/brown-plastic-pot-gardening-equipments-soil-wooden-desk-23-2148044484.jpg",
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const previousSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-[600px] mx-auto">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`absolute w-full h-full ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button
        className="absolute top-1/2 right-2  px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
        onClick={nextSlide}
      >
        Next
      </button>
      <button
        className="absolute top-1/2   px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
        onClick={previousSlide}
      >
        Previous
      </button>
    </div>
  );
};

export default Slider;
