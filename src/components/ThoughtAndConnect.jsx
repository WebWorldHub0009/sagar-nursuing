import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/home/contactbg.jpg"; 

const ThoughtAndContact = () => {
  return (
    <section
      className="w-full py-16 px-4 md:px-10 font-[Poppins] relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#CA9C78]/5"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-[#CA9C78]/20"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Thought Card */}
        <motion.div
          className="flex-1 w-full rounded-2xl p-8 text-center border border-[#CA9C78]/30 bg-white/90 shadow-lg hover:shadow-2xl transition duration-500 relative"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 text-[#00B4D8] text-4xl">
            <FaUserTie />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-[#00B4D8] mb-3">
            A Thought from Our Founder
          </h2>
          <p className="text-gray-700 text-base md:text-lg italic mb-5 leading-relaxed">
            "Every life we care for is a promise fulfilled — of dignity, healing, and compassion at every step."
          </p>
          <p className="text-[#00B4D8] font-bold uppercase text-sm tracking-wide mb-2">
            — S K Sagar (Founder)
          </p>
          <div className="text-gray-700 text-sm md:text-base space-y-1 mt-3">
            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-[#00B4D8]" /> +91 9910199227 / +91 9910069227
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-[#00B4D8]" /> sagarnursingbureau@gmail.com
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="flex-1 w-full text-center md:text-left"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00B4D8] mb-4">
            Compassionate Care, Anytime
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            Reach out for personalized home nursing, elderly care, and private duty services that truly make a difference.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/contact"
              className="relative inline-block px-8 py-3 text-white bg-[#90BE6D] rounded-full text-base md:text-lg font-semibold group hover:bg-[#00B4D8] hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Contact Us
              <span className="absolute -inset-1 rounded-full border border-[#CA9C78]/30 opacity-0 group-hover:opacity-100 transition"></span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative glowing circles */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#CA9C78]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#CA9C78]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ThoughtAndContact;
