import React from "react";
import { FiUserCheck, FiShield, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 px-4 md:px-12 font-[Poppins] text-[#1B2A41] bg-[#f4fafc]">
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-sm uppercase tracking-widest text-[#90BE6D] font-semibold mb-2">
            Why Families Choose Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#023E8A]">
            Why <span className="text-[#90BE6D]">Sagar Nursing Bureau</span> Stands Out
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Trusted, reliable, and compassionate care — we bring hospital-level support to the comfort of your home.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-4 text-[#0077B6]">
              <FiUserCheck />
            </div>
            <h4 className="text-lg font-semibold mb-2">Certified Nursing Staff</h4>
            <p className="text-sm text-gray-600">
              Our caregivers are certified, trained, and background-verified to ensure your family's safety and comfort.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-4 text-[#0077B6]">
              <FiShield />
            </div>
            <h4 className="text-lg font-semibold mb-2">24/7 Care & Monitoring</h4>
            <p className="text-sm text-gray-600">
              From medication to mobility, we offer round-the-clock care tailored to individual needs and medical advice.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#E0E0E0] rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="text-2xl mb-4 text-[#0077B6]">
              <FiHeart />
            </div>
            <h4 className="text-lg font-semibold mb-2">Empathetic Approach</h4>
            <p className="text-sm text-gray-600">
              Beyond treatment, we provide emotional support, companionship, and dignity — because care is personal.
            </p>
          </div>

          {/* Full Width CTA */}
          <div className="md:col-span-2 lg:col-span-3 bg-[#0077B6] text-white p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Schedule a Free In-Home Consultation</h4>
              <p className="text-sm text-slate-200 max-w-2xl">
                Let our experts understand your requirements and recommend the right care plan — at no initial cost.
              </p>
            </div>
            <Link to="/contact">
              <button className="mt-4 md:mt-0 bg-[#90BE6D] hover:bg-[#78a458] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
                Book Now →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
