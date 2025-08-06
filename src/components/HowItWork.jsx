import React from "react";
import {
  FaPenFancy,
  FaCouch,
  FaCalendarCheck,
  FaHammer,
  FaSmile,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const steps = [
  {
    id: 1,
    title: "Envision the Space",
    description:
      "Share your dream with us. We listen deeply to your ideas and personal style.",
    icon: <FaPenFancy className="text-4xl text-[#CA9C78]" />,
    extra: "Every great design begins with your unique vision.",
  },
  {
    id: 2,
    title: "Design & Ideation",
    description:
      "We craft personalized mood boards, layouts, and visual concepts tailored to your needs.",
    icon: <FaCouch className="text-4xl text-[#CA9C78]" />,
    extra: "Luxurious concepts with balance, form, and function.",
  },
  {
    id: 3,
    title: "Material & Timeline Finalization",
    description:
      "We handpick premium materials and define clear timelines for a smooth experience.",
    icon: <FaCalendarCheck className="text-4xl text-[#CA9C78]" />,
    extra: "Transparency in every step. Quality in every choice.",
  },
  {
    id: 4,
    title: "Precision Execution",
    description:
      "Our expert team crafts and installs your interior with flawless detail and precision.",
    icon: <FaHammer className="text-4xl text-[#CA9C78]" />,
    extra: "No shortcuts. Only exquisite results.",
  },
  {
    id: 5,
    title: "Final Reveal & Support",
    description:
      "Experience your transformed space, complete with after-service support.",
    icon: <FaSmile className="text-4xl text-[#CA9C78]" />,
    extra: "Satisfaction delivered. Elegance that lasts.",
  },
];

const HowItWorksBN = () => {
  return (
    <section className="py-24 bg-[#fdfcfa]">
      <div className="text-center mb-16 px-4">
        <p className="text-sm uppercase tracking-wider font-semibold text-[#CA9C78]">
          The BN Interior Experience
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] font-serif mt-2">
          From Vision to Reality
        </h2>
        <p className="text-[#5E5E5E] text-lg max-w-2xl mx-auto mt-4">
          Our seamless process transforms your dreams into luxurious, fully realized interiors—with care, detail, and elegance.
        </p>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 px-6 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <StepCard key={step.id} step={step} idx={idx} />
        ))}
      </div>

      {/* Mobile Slider View */}
      <div className="block md:hidden px-4 max-w-7xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {steps.map((step, idx) => (
            <SwiperSlide key={step.id}>
              <StepCard step={step} idx={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Final Call To Action */}
      <div className="mt-20 text-center px-6 max-w-4xl mx-auto">
        <p className="text-lg text-[#1C1C1C] font-medium mb-6">
          With BN Interior & Exterior, every corner tells a story. Let’s begin your transformation today.
        </p>
        <Link to={"/contact"}>
          <button className="bg-[#CA9C78] text-white px-6 py-3 rounded-full text-sm shadow-md hover:bg-[#b98a67] transition-all">
            Start Your Design Journey
          </button>
        </Link>
      </div>
    </section>
  );
};

const StepCard = ({ step, idx }) => {
  return (
    <div className="relative group border border-[#E0CBB0] rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl transition duration-300 hover:border-[#CA9C78]">
      {/* Number Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-[#CA9C78] text-[#CA9C78] font-bold text-sm group-hover:bg-[#CA9C78] group-hover:text-white transition-all duration-300">
          <span className="group-hover:hidden">{idx + 1}</span>
          <FaCheck className="hidden group-hover:block text-sm" />
        </div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-4 mt-2">{step.icon}</div>

      {/* Title */}
      <h3 className="text-center font-semibold text-lg mb-2 text-[#1C1C1C]">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-center text-[#5E5E5E] text-sm mb-2">{step.description}</p>

      {/* Extra Info */}
      <p className="text-center text-[#888] text-xs mb-8 italic">{step.extra}</p>

      {/* Learn More CTA */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-6">
        <div className="opacity-0 translate-x-[-50%] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <Link to={"/contact"}>
            <button className="w-full rounded-full bg-[#CA9C78] text-white text-sm py-2 hover:bg-[#b98a67] transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksBN;
