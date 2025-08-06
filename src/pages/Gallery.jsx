import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Hero background
import heroBg from "../assets/gallery/gallerybgimg.jpg";

// Gallery Images
import img1 from "../assets/gallery/img1.png";
import img2 from "../assets/gallery/img2.png";
import img3 from "../assets/gallery/img3.png";
import img4 from "../assets/gallery/img4.png";
import img5 from "../assets/gallery/img5.png";
import img6 from "../assets/gallery/img6.png";
import img7 from "../assets/gallery/img7.png";
import img8 from "../assets/gallery/img8.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <section className="relative w-full h-[75vh] flex items-center justify-center text-white overflow-hidden font-[Poppins]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: "brightness(0.4)",
          }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#90BE6D]"> 
          
            Capturing Moments of Care & Compassion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
          >
            Explore our gallery showcasing heartfelt services, dedicated care,
            and the nurturing environment we provide at Sagar Nursing Bureau.
          </motion.p>
        </motion.div>
      </section>

      {/* ---------- Gallery Section ---------- */}
      <section className="bg-[#e3f2f7] py-8 px-6 font-[Poppins]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-bold text-[#90BE6D]">Our Gallery</h2>
          <p className="text-gray-800 mt-2">
            A glimpse into our facilities, staff, and services that ensure
            comfort, safety, and professional care.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => openImage(i)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                key={selectedImage}
                className="relative w-full max-w-4xl mx-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Enlarged"
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-white text-xl bg-black/50 p-2 rounded-full hover:bg-red-600 transition"
                  onClick={closeModal}
                >
                  <FaTimes />
                </button>
                {/* Navigation */}
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 p-2 rounded-full hover:bg-blue-600 transition"
                  onClick={prevImage}
                >
                  <FaArrowLeft />
                </button>
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl bg-black/40 p-2 rounded-full hover:bg-blue-600 transition"
                  onClick={nextImage}
                >
                  <FaArrowRight />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
