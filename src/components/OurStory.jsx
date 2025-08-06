import React, { useState } from "react";
import storyImg from "../assets/home/story2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const OurStory = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-white py-20 font-[Poppins] relative overflow-hidden">
      {/* Background SVG Blob */}
      <svg
        className="absolute left-[-150px] top-[50px] w-[500px] h-[500px] opacity-10 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#118ab2"
          d="M43.4,-59.4C57.6,-48.3,71.2,-36.1,76.6,-20.7C81.9,-5.3,79,13.3,70.6,27.3C62.1,41.3,48.2,50.7,34.7,58.2C21.2,65.7,10.6,71.2,-1.3,73C-13.2,74.9,-26.4,73.1,-40.2,66.1C-54,59.1,-68.3,46.8,-72.3,32.1C-76.3,17.4,-70,-0.7,-63.7,-16.6C-57.4,-32.6,-51,-46.5,-40.3,-58.6C-29.7,-70.6,-14.8,-80.9,0.8,-82.1C16.4,-83.3,32.7,-75.4,43.4,-59.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-wider text-[#118ab2] mb-2 font-semibold">
            About Sagar Nursing Bureau
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#90BE6D] mb-4 leading-tight">
            Our Story
          </h2>

          <blockquote className="text-[#118ab2] italic text-lg mb-6 border-l-4 pl-4 border-[#118ab2]">
            “We care with compassion and serve with dedication, bringing health and hope to every home.”
          </blockquote>

          <p className="text-gray-600 mb-4">
            Founded with a mission to bring qualified healthcare to every doorstep, <span className="font-semibold text-gray-800">Sagar Nursing Bureau</span> delivers expert, empathetic nursing care to individuals and families.
          </p>

          <p className="text-gray-600 mb-6">
            From post-operative support to elderly assistance and chronic care, we personalize every service to fit your needs — because your health journey deserves trusted hands and a human heart.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#90BE6D] cursor-pointer text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-[#0f7aa3] transition-transform duration-300"
          >
            Learn More
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={storyImg}
            alt="Sagar Nursing Story"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
                <button
                  className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose />
                </button>
                <h3 className="text-2xl font-bold text-[#118ab2] mb-4">A Deeper Look at Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  Sagar Nursing Bureau isn't just a service — it's a commitment to delivering healthcare with heart.
                  Our skilled team brings professional medical care into the comfort of your home, so you or your loved ones
                  can recover and thrive in familiar surroundings.
                </p>
                <p className="text-gray-700 mb-4">
                  We specialize in elder care, post-surgical recovery, chronic illness support, palliative care, and more.
                  Every caregiver is trained to provide not just physical care, but also emotional reassurance — because true healing
                  begins with compassion.
                </p>
                <p className="text-gray-700">
                  We believe health is holistic. That’s why we build relationships, not just patient records.
                  With 24/7 support and a legacy of trust, Sagar Nursing Bureau stands by you at every step of your care journey.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurStory;
