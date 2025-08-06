import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaProcedures,
  FaHandHoldingMedical,
  FaClinicMedical,
  FaHeart,
  FaUserNurse,
  FaBaby,
} from "react-icons/fa";
import services from "./service.json";
import ServiceSlider from "../components/ServiceSlider";

const iconMap = {
  FaProcedures: <FaProcedures />,
  FaHandHoldingMedical: <FaHandHoldingMedical />,
  FaClinicMedical: <FaClinicMedical />,
  FaHeart: <FaHeart />,
  FaUserNurse: <FaUserNurse />,
  FaBaby: <FaBaby />,
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.path.split("/").pop() === id);

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Service Not Found</h2>
        <Link
          to="/services"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
  <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-12 px-6 overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400 rounded-full blur-[200px] opacity-10 -top-20 -left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-400 rounded-full blur-[160px] opacity-10 bottom-0 -right-20"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left - Service Image */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <img
            src={service.image || "https://via.placeholder.com/600x400"}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
          <div className="absolute bottom-6 left-6 bg-white p-4 rounded-full text-blue-600 text-3xl">
            {iconMap[service.icon]}
          </div>
        </div>

        {/* Right - Service Content */}
        <div className="p-2">
          <h1 className="text-4xl font-bold font-[popins] text-[#90BE6D] mb-6 leading-snug">
            {service.name}
          </h1>

          <div className="max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {service.description}
            </p>

            <h2 className="text-2xl font-semibold font-[popins]  text-[#90BE6D] mb-4">
              Key Features
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-blue-600"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
            >
              Book This Service
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    </section>
<ServiceSlider/>
    </>
  );
}
