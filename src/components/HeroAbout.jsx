import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUserNurse, FaClock, FaHome } from "react-icons/fa";
import heroImg from "../assets/home/doc.avif";

const AboutHero = () => {
  return (
    <section className="w-full h-[75vh] bg-gradient-to-br from-[#e6f3f8] via-[#f1f9fc] to-[#e6f3f8] font-[Poppins] relative overflow-hidden">
      
      {/* Glowing Hollow SVG Circle */}
      <svg
        className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] z-0 animate-pulse"
        viewBox="0 0 200 200"
      >
        <defs>
          <radialGradient id="glow" r="80%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#118ab2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#glow)"
          strokeWidth="15"
        />
      </svg>

      <div className=" mx-auto px-6 md:px-12 py-5 grid grid-cols-1 md:grid-cols-2 gap-10  relative z-10">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={heroImg}
            alt="Sagar Nursing Bureau Staff"
            className="w-full mx-auto md:mx-0 rounded shadow-2xl"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center md:text-left relative top-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#073b4c] leading-tight mb-5">
            We Take Care <br className="hidden md:block" /> Because We Care
          </h1>

          <p className="text-gray-700 text-lg md:text-xl mb-6 max-w-xl mx-auto md:mx-0">
            At <span className="text-[#118ab2] font-semibold">Sagar Nursing Bureau</span>,
            we provide trusted, compassionate nursing care tailored for each individual — right at your doorstep or in hospitals.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-[#073b4c] font-medium">
            {[
              { icon: <FaHeartbeat />, label: "Online Medication" },
              { icon: <FaUserNurse />, label: "Expert Nursing" },
              { icon: <FaClock />, label: "24/7 Support" },
              { icon: <FaHome />, label: "Home Assistance" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="text-[#118ab2] text-xl mb-2">{item.icon}</div>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
