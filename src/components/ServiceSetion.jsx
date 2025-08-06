import React from "react";
import { motion } from "framer-motion";
import {
  FaUserNurse,
  FaProcedures,
  FaBaby,
  FaHeart,
  FaHandHoldingMedical,
  FaClinicMedical,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import bg from "../assets/home/servicebg.jpg"; 

const services = [
  {
    icon: <FaProcedures className="text-3xl text-[#0077B6]" />,
    title: "Assisted Living Services",
    description: "Round-the-clock help with daily tasks for elderly or recovering patients in a home environment.",
  },
  {
    icon: <FaHandHoldingMedical className="text-3xl text-[#0077B6]" />,
    title: "Private Duty Services",
    description: "Personalized, in-home care services delivered with dignity, compassion, and professionalism.",
  },
  {
    icon: <FaClinicMedical className="text-3xl text-[#0077B6]" />,
    title: "Colostomy Bag Change",
    description: "Expert nursing care for colostomy maintenance and hygiene in a discreet, professional manner.",
  },
  {
    icon: <FaHeart className="text-3xl text-[#0077B6]" />,
    title: "Personal Care Services",
    description: "Bathing, grooming, feeding, and hygiene assistance to help clients maintain independence.",
  },
  {
    icon: <FaUserNurse className="text-3xl text-[#0077B6]" />,
    title: "Elderly Care Services",
    description: "Trained caregivers offering companionship, mobility support, and chronic illness management.",
  },
  {
    icon: <FaBaby className="text-3xl text-[#0077B6]" />,
    title: "Babysitting Services",
    description: "Reliable, nurturing babysitters to care for your child in a safe and loving environment.",
  },
];

export default function ServiceCategories() {
  return (
    <section
      className="relative py-16 text-center bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 z-0 bg-white/70" />

      <div className="relative z-10 px-4 max-w-6xl mx-auto font-[Poppins]">
        <h2 className="uppercase tracking-wider text-sm font-semibold text-[#90BE6D]">
          Our Specialized Care
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-[#1B2A41] mt-3">
          Services at <span className="text-[#0077B6]">Sagar Nursing Bureau</span>
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto mt-4 mb-10 text-sm sm:text-base">
          Compassionate in-home care designed to meet the personal, medical, and emotional needs of every patient and family.
        </p>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white shadow-md rounded-xl p-6 w-80 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 bg-[#E0F7FA] p-4 rounded-full shadow-sm">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold text-[#0077B6] uppercase mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-10 text-gray-700 text-sm sm:text-base">
          Need help choosing the right service?{" "}
          <Link
            to="/contact"
            className="text-[#0077B6] underline hover:text-[#023E8A] transition"
          >
            Talk to our care team
          </Link>
        </p>
      </div>
    </section>
  );
}
