import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaHandHoldingHeart } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section className="relative bg-gradient-to-b from-[#F0FDFC] to-[#DFF5F0] py-20 overflow-hidden">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#90be6d] opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#118ab2] opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold font-[popins] text-[#0B1F3A] mb-4"
        >
          Our <span className="text-[#118ab2]">Vision</span> &{" "}
          <span className="text-[#90be6d]">Mission</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#4a4a4a] text-lg max-w-3xl mx-auto"
        >
          Caring with purpose, healing with heart — every home, every patient, every day.
        </motion.p>
      </div>

      {/* Diagonal Layout */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 px-6">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white bg-opacity-90 backdrop-blur-lg p-10 rounded-tl-[4rem] rounded-br-[4rem] shadow-xl border-l-[8px] border-[#118ab2] max-w-md w-full hover:scale-105 transition-transform duration-500 group"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -top-8 -left-8 bg-[#118ab2] text-white p-4 rounded-full text-3xl shadow-lg"
          >
            <FaHeartbeat />
          </motion.div>

          <h3 className="text-3xl font-semibold text-[#118ab2] mb-4 group-hover:text-[#0e6d95] transition-colors duration-300">
            Our Vision
          </h3>
          <p className="text-[#4a4a4a] text-lg leading-relaxed">
            To be the most trusted nursing care provider in India, setting the standard for compassionate, professional, and personalized home healthcare services.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden md:block w-1 h-60 bg-gradient-to-b from-[#118ab2] to-[#90be6d] rounded-full"
        ></motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white bg-opacity-90 backdrop-blur-lg p-10 rounded-tl-[4rem] rounded-br-[4rem] shadow-xl border-l-[8px] border-[#90be6d] max-w-md w-full hover:scale-105 transition-transform duration-500 group"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute -top-8 -left-8 bg-[#90be6d] text-white p-4 rounded-full text-3xl shadow-lg"
          >
            <FaHandHoldingHeart />
          </motion.div>

          <h3 className="text-3xl font-semibold text-[#90be6d] mb-4 group-hover:text-[#78a75c] transition-colors duration-300">
            Our Mission
          </h3>
          <p className="text-[#4a4a4a] text-lg leading-relaxed">
            To deliver affordable, expert-led nursing care with empathy and excellence, empowering patients to recover, heal, and thrive in the comfort of their own homes.
          </p>
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute left-0 bottom-0 w-full h-24 bg-gradient-to-r from-[#118ab2] to-[#90be6d] opacity-10 blur-2xl"></div>
    </section>
  );
}
