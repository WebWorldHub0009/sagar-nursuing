import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import nurse2 from "../assets/home/nurse2.jpg"
import nurse3 from "../assets/home/nurse3.jpg"
import nurse4 from "../assets/home/nurse4.jpg"

const services = [
  {
    title: "Home Nursing Care",
    image: nurse2,
    description: "Compassionate nursing services in the comfort of your home.",
    colors: ["#0077B6", "#90BE6D", "#CAF0F8"],
  },
  {
    title: "ICU Setup at Home",
    image: nurse3,
    description: "Advanced ICU care solutions tailored for home environments.",
  },
  {
    title: "Elderly Care Services",
    image: nurse4,
    description: "Gentle, patient-centered support for senior citizens.",
  },
  {
    title: "Newborn & Mother Care",
    image: nurse2,
    description: "Specialized postnatal and neonatal care solutions.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-8 px-4 md:px-12 font-[Poppins]">
      {/* Top Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[Italiana] text-[#0077B6] tracking-wide">
          Sagar Nursing Bureau
        </h1>
        <p className="italic text-[#6c757d] mt-2 text-sm sm:text-base">"Trusted Care When You Need It Most"</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* LEFT */}
        <div className="space-y-5 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Italiana] text-[#023E8A] leading-snug">
            Holistic Home Healthcare,<br className="hidden sm:block" /> Delivered with Compassion
          </h2>
          <button className="bg-[#90BE6D] hover:bg-[#74a555] text-white px-6 py-2 rounded-full font-semibold text-sm transition">
            Explore Our Services
          </button>
          <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            We offer licensed nurses, attendants, and trained caregivers to assist with personal, medical, and emotional support — right where you need it.
          </p>
          <p className="text-red-700 text-xl sm:text-2xl font-bold animate-pulse">
            24/7 Emergency Care Line
          </p>
        </div>


{/* CENTER - Image Slider */}
<div className="relative w-full flex flex-col items-center justify-center">
  {/* Fixed-height slider container with smooth fade effect */}
  <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px] overflow-hidden rounded-2xl shadow-lg relative">
    {services.map((service, index) => (
      <img
        key={index}
        src={service.image || "https://via.placeholder.com/600x400.png?text=Nurse+Service"}
        alt={service.title}
        className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ${
          current === index ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      />
    ))}
  </div>

  {/* Title + Description Below Image */}
  <div className="text-center mt-6 px-4 max-w-sm sm:max-w-md md:max-w-lg">
    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#023E8A]">
      {services[current].title}
    </h4>
    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
      {services[current].description}
    </p>

    {services[current].colors && (
      <div className="flex gap-2 mt-3 justify-center">
        {services[current].colors.map((c, idx) => (
          <span
            key={idx}
            className="w-4 h-4 rounded-full border shadow"
            style={{ backgroundColor: c }}
          ></span>
        ))}
      </div>
    )}
  </div>

  {/* Carousel Arrows */}
  <div className="flex gap-4 mt-5">
    <button
      onClick={() =>
        setCurrent((prev) => (prev - 1 + services.length) % services.length)
      }
      className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#0077B6] hover:bg-gray-100 transition"
    >
      <FiArrowLeft />
    </button>
    <button
      onClick={() => setCurrent((prev) => (prev + 1) % services.length)}
      className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#0077B6] hover:bg-gray-100 transition"
    >
      <FiArrowRight />
    </button>
  </div>
</div>



        {/* RIGHT */}
        <div className="w-full relative top-2 md:top-0 mb-4">
          <h4 className="text-lg font-bold text-[#1C1C1C] mb-4 text-center lg:text-left">Quick Access</h4>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                title: "Why Choose Us",
                desc: "Certified professionals. 10+ years of trust.",
                link: "/about",
              },
              {
                title: "Service Areas",
                desc: "Now serving Nagpur, Amravati, Akola & more.",
                link: "/service-areas",
              },
              {
                title: "Book a Nurse",
                desc: "Fill out our quick form to schedule a visit.",
                link: "/contact",
              },
              {
                title: "Client Testimonials",
                desc: "What our happy patients say.",
                action: () => {
                  document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
                },
              },
            ].map((item, idx) =>
              item.link ? (
                <Link
                  key={idx}
                  to={item.link}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm py-3 px-4 flex justify-between items-center hover:shadow-md group transition"
                >
                  <div className="text-left">
                    <h5 className="font-semibold text-[#0077B6] group-hover:text-[#90BE6D] transition text-sm md:text-base">
                      {item.title}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <div className="text-[#0077B6] text-lg">→</div>
                </Link>
              ) : (
                <div
                  key={idx}
                  onClick={item.action}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm py-3 px-4 flex justify-between items-center hover:shadow-md group transition cursor-pointer"
                >
                  <div className="text-left">
                    <h5 className="font-semibold text-[#0077B6] group-hover:text-[#90BE6D] transition text-sm md:text-base">
                      {item.title}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <div className="text-[#0077B6] text-lg">→</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
