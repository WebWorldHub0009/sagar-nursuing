import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserNurse,
  FaProcedures,
  FaBaby,
  FaHeart,
  FaHandHoldingMedical,
  FaClinicMedical,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    icon: <FaProcedures className="text-3xl text-[#0077B6]" />,
    title: "Assisted Living Services",
    path: "/services/assisted-living",
    description:
      "Round-the-clock help with daily tasks for elderly or recovering patients in a home environment.",
  },
  {
    icon: <FaHandHoldingMedical className="text-3xl text-[#0077B6]" />,
    title: "Private Duty Services",
    path: "/services/private-duty",
    description:
      "Personalized, in-home care services delivered with dignity, compassion, and professionalism.",
  },
  {
    icon: <FaClinicMedical className="text-3xl text-[#0077B6]" />,
    title: "Colostomy Bag Change",
    path: "/services/colostomy-bag",
    description:
      "Expert nursing care for colostomy maintenance and hygiene in a discreet, professional manner.",
  },
  {
    icon: <FaHeart className="text-3xl text-[#0077B6]" />,
    title: "Personal Care Services",
    path: "/services/personal-care",
    description:
      "Bathing, grooming, feeding, and hygiene assistance to help clients maintain independence.",
  },
  {
    icon: <FaUserNurse className="text-3xl text-[#0077B6]" />,
    title: "Elderly Care Services",
    path: "/services/elderly-care",
    description:
      "Trained caregivers offering companionship, mobility support, and chronic illness management.",
  },
  {
    icon: <FaBaby className="text-3xl text-[#0077B6]" />,
    title: "Babysitting Services",
    path: "/services/babysitting-service",
    description:
      "Reliable, nurturing babysitters to care for your child in a safe and loving environment.",
  },
];

export default function ServiceSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-12 px-4 bg-[#e2f2f7]">
      <h3 className="text-4xl font-bold text-center text-[#90BE6D] font-[popins] mb-8">
        Explore Other Services
      </h3>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {services.map((service, idx) => (
            <div key={idx} className="p-3">
              <Link
                to={service.path}
                className="block bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <div className="mb-4 flex justify-center">
                  <div className="bg-[#E0F7FA] p-4 rounded-full">{service.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-[#0077B6] mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

