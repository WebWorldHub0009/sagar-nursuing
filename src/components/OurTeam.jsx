import React from "react";
import { motion } from "framer-motion";
import { FaUserNurse } from "react-icons/fa";
// import bgImage from "../assets/home/teambg.avif";

export default function TeamMembers() {
  const team = [
    { name: "Mariyam Fatima", role: "Supportive" },
    { name: "Ayan", role: "Operations Manager" },
    { name: "Seraj Khan", role: "Nursing Supervisor" },
    { name: "Vasim Uddin Khan", role: "Care Coordinator" },
    { name: "Gautam Jha", role: "Senior Healthcare Assistant" },
    { name: "Hansraj", role: "Support Lead" },
  ];

  return (
    <section
      className="relative w-full py-20 px-6 bg-[#e7f9ff] overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-[Poppins] font-bold text-[#0A2540] mb-6"
        >
          Meet Our <span className="text-[#007bff]">Core Team</span>
        </motion.h2>

        <p className="text-gray-700 max-w-xl mx-auto text-base md:text-lg mb-6">
          At Sagar Nursing Bureau, our strength lies in our people—dedicated, compassionate, and experienced healthcare professionals.
        </p>

        {/* Horizontal scrollable row */}
        <div className="overflow-x-auto">
          <div className="flex justify-start gap-6 px-4 md:justify-center">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center min-w-[180px]"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white shadow-xl flex items-center justify-center text-[#007bff] border-4 border-[#007bff]/20 text-4xl md:text-5xl"
                >
                  <FaUserNurse />
                </motion.div>
                <div className="mt-4 text-center">
                  <h3 className="text-md md:text-lg font-bold text-[#90BE6D]">{member.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    
    </section>
  );
}
