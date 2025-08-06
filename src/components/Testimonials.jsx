import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Anita Deshmukh",
    title: "Daughter of Patient",
    text: "Sagar Nursing Bureau took care of my elderly mother with such compassion and professionalism. I could rest easy knowing she was in good hands.",
  },
  {
    name: "Rajiv Malhotra",
    title: "Post-Surgery Patient",
    text: "Their home nursing support after my surgery was exceptional. The nurse was well-trained, kind, and attentive to every detail of my recovery.",
  },
  {
    name: "Dr. Neha Kulkarni",
    title: "Family Physician",
    text: "I regularly refer patients to Sagar Nursing Bureau. Their consistency, care quality, and trained staff make them a trusted extension of medical care.",
  },
  {
    name: "Sneha Patil",
    title: "Working Professional",
    text: "With aging parents, I needed reliable help. Sagar Nursing Bureau gave us peace of mind and treated my father with the dignity he deserves.",
  },
  {
    name: "Vikram Joshi",
    title: "Patient with Chronic Illness",
    text: "The nurse from Sagar was not just skilled but also emotionally supportive. They helped me manage my daily health challenges with care and patience.",
  },
  {
    name: "Lata Sharma",
    title: "Caregiver",
    text: "Their team worked like family. From medication support to emotional care, they were there every step of the way. Thank you for your dedication!",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="w-full bg-[#f0fdfc] py-16 px-4 md:px-10 font-[Poppins]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
          What People Say About{" "}
          <span className="bg-[#90BE6D]/10 px-2 py-1 rounded-lg text-[#118ab2] inline-block">
            Sagar Nursing Bureau
          </span>
        </h2>
        <p className="italic text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
          "Every life we touch is a promise to care, comfort, and heal with heart."
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`rounded-2xl p-6 shadow-md h-full ${
                idx % 2 === 0
                  ? "bg-white text-gray-700"
                  : "bg-[#118ab2]/10 text-[#0B1F3A]"
              } transition`}
            >
              <FaQuoteLeft className="text-2xl mb-4 text-[#118ab2]" />
              <p className="mb-4 italic">"{item.text}"</p>
              <div>
                <p className="font-semibold text-[#118ab2]">{item.name}</p>
                <p className="text-sm">{item.title}</p>
              </div>
              <button className="mt-4 text-sm font-semibold text-[#118ab2] hover:underline">
                Learn more →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
