import React from "react";
import { motion } from "framer-motion";
import { FaUserNurse, FaClock, FaSmile, FaHeartbeat } from "react-icons/fa";

const statsData = [
  {
    icon: <FaUserNurse className="text-4xl text-[#00B4D8]" />,
    value: "10,000+",
    label: "Nurses Deployed",
  },
  {
    icon: <FaClock className="text-4xl text-[#00B4D8]" />,
    value: "24/7",
    label: "Service Availability",
  },
  {
    icon: <FaSmile className="text-4xl text-[#00B4D8]" />,
    value: "99.5%",
    label: "Customer Satisfaction",
  },
  {
    icon: <FaHeartbeat className="text-4xl text-[#00B4D8]" />,
    value: "15+",
    label: "Years of Trust",
  },
];

export default function PremiumStats() {
  return (
    <div className="relative py-10 bg-[#F0FBFC] overflow-hidden">
      {/* Background Blur Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-[#90E0EF] opacity-30 blur-3xl rounded-full z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        <h2 className="text-4xl md:text-5xl font-[popins] font-bold text-center text-[#023E8A] mb-4">
          Our Impact in Numbers
        </h2>
          <p className="text-lg text-gray-800 text-center mb-5">
          “Dedicated to compassionate care and unwavering service excellence.”
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-4 text-center border border-[#CAF0F8]"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-extrabold font-[popins] text-[#03045E]">{stat.value}</h3>
              <p className="text-[#023E8A] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
