import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import nurseImage from "../assets/home/nurse2.jpg";
import nurseImage2 from "../assets/home/nurse3.jpg"; // <- Your second image

const About = () => {
  return (
    <section className="relative text-black py-16 px-6 md:px-12 font-sans overflow-hidden bg-[#eff6f8]">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#0077B6] uppercase text-sm tracking-widest mb-2">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold font-[poppins] leading-tight text-[#023E8A]">
            Sagar <span className="text-[#90BE6D]">Nursing Bureau</span>
          </h1>
          <p className="text-gray-700 mt-6 text-base md:text-lg ">
            At Sagar Nursing Bureau, we are dedicated to delivering trusted and compassionate home healthcare. Whether it's post-surgical care, elder assistance, or neonatal support — our trained professionals are here to serve with empathy and expertise.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-6">
            <Link to="/contact">
              <button className="bg-[#0077B6] hover:bg-[#005f95] transition px-6 py-3 rounded-full font-semibold text-white shadow-md">
                Get In Touch
              </button>
            </Link>
            <div className="flex gap-4 text-lg text-gray-600">
              <a href="#" className="hover:text-[#0077B6] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#C13584] transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#1DA1F2] transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image with Tilt and Overlay Image */}
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable={false}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] max-w-md mx-auto group relative"
          >
            <img
              src={nurseImage}
              alt="Sagar Nursing Bureau"
              className="w-full h-full object-cover rounded-xl border-4 border-[#CAF0F8] shadow-xl group-hover:scale-105 group-hover:shadow-2xl transition duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#90BE6D] via-transparent to-[#0077B6] opacity-20 rounded-xl pointer-events-none"></div>

            {/* Small Bottom-Left Image */}
            <img
              src={nurseImage2}
              alt="Support Nurse"
              className="absolute -bottom-8 -left-18  w-54 h-34 object-cover rounded-xl border-4 border-[#0077B6] shadow-lg"
            />
          </motion.div>
        </Tilt>
      </div>

      {/* Our Commitment */}
      <div className="relative z-10 mt-10 text-center max-w-3xl mx-auto">
        <h3 className="text-[#0077B6] tracking-widest text-sm mb-3 uppercase">
          Our Commitment
        </h3>
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          We understand that home is where healing happens best. Our mission is to offer round-the-clock, reliable healthcare — led by skilled nurses and caretakers — to ensure our patients feel safe, respected, and well-supported in their own homes.
        </p>
        <Link to="/contact">
          <button className="mt-6 px-6 py-2 bg-[#90BE6D] text-white font-semibold rounded-full hover:bg-[#74a555] transition">
            Talk to Our Team
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
