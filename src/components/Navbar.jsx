import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiMenu, HiX, HiHome, HiUserGroup,
  HiPhotograph, HiPhone, HiChevronDown
} from "react-icons/hi";
import {
  FaBaby,
  FaClinicMedical,
  FaCog,
  FaHandHoldingMedical,
  FaHeart,
  FaProcedures,
  FaUserNurse, 
} from "react-icons/fa";
import { Link } from "react-router-dom";

const serviceItems = [
  { name: "Assisted Living Services", path: "/services/assisted-living", icon: <FaProcedures /> },
  { name: "Private Duty Services", path: "/services/private-duty", icon: <FaHandHoldingMedical /> },
  { name: "Colostomy Bag Change", path: "/services/colostomy-bag", icon: <FaClinicMedical/> },
  { name: "Personal Care Services", path: "/services/personal-care", icon: <FaHeart /> },
  { name: "Elderly Care Services", path: "/services/elderly-care", icon: <FaUserNurse /> },
  { name: "Babysitting Services", path: "/services/babysitting-service", icon: <FaBaby /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full shadow-md z-50 relative bg-[#FFFDF9]">
      {/* Top Header */}
      <div className="bg-[#9ce6f5] text-[#1C1C1C] text-[10px] md:text-xs px-2 md:px-4 py-1 md:py-2 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0 whitespace-nowrap overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-2 md:gap-4 min-w-max">
          <span>🧾 GSTIN : 09AKDPR0259F2Z4</span>
          <span>🆔 UDYAM-UP-28-0010743</span>
          <span>📞 +91 8447176250</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4 min-w-max mt-1 md:mt-0">
          <span>📞 +91 7011061519</span>
          <span>✉️ Sagarnursingbureau@gmail.com</span>
          <span>📧 Info@sagarnursingbureau.in</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="py-2 px-4 md:px-16 flex items-center justify-between">
        {/* Left Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm font-medium text-[#1C1C1C] relative">
          <NavItem to="/" icon={<HiHome />} label="Home" />
          <NavItem to="/about" icon={<HiUserGroup />} label="About Us" />

          {/* Services Dropdown */}
          <div className="group relative cursor-pointer">
            <div className="flex items-center gap-1 hover:text-[#00B4D8]">
              <FaCog className="text-[#00B4D8]" />
              <span>Services</span>
              <motion.span
                whileHover={{ rotate: 180 }}
                className="text-xs text-[#00B4D8] transition-transform duration-300"
              >
                <HiChevronDown />
              </motion.span>
            </div>
            <div className="absolute top-full left-0 w-56 bg-white shadow-lg z-50 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <ul className="py-2">
                {serviceItems.map((item, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-sm transition-all"
                  >
                    {item.icon}
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ul>

        {/* Logo Center */}
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <Link to="/">
            <img src={""} alt="Sagar Logo" className="h-16 w-auto object-contain" />
          </Link>
        </motion.div>

        {/* Right Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm font-medium text-[#1C1C1C]">
          <NavItem to="/gallery" icon={<HiPhotograph />} label="Gallery" />
          <NavItem to="/contact" icon={<HiPhone />} label="Contact" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="ml-4 bg-[#FF6B6B] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-[#e25b5b] transition-all duration-300"
          >
            <Link to="/contact">Get Nursing Support</Link>
          </motion.button>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl text-[#1C1C1C] cursor-pointer" onClick={() => setIsOpen(true)}>
          <HiMenu />
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-[80%] h-full bg-[#FFFDF9] shadow-lg z-50 p-6 flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold text-[#1C1C1C]">Menu</span>
              <HiX className="text-3xl text-[#1C1C1C] cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>

            {/* Links */}
            {[{ label: "Home", path: "/", icon: <HiHome /> },
              { label: "About Us", path: "/about", icon: <HiUserGroup /> },
              { label: "Gallery", path: "/gallery", icon: <HiPhotograph /> },
              { label: "Contact", path: "/contact", icon: <HiPhone /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 text-lg text-[#1C1C1C] mb-4"
              >
                {item.icon}
                <Link to={item.path} onClick={() => setIsOpen(false)}>{item.label}</Link>
              </motion.div>
            ))}

            {/* Services Dropdown (Mobile) */}
            <div className="mt-1">
              <div
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-2 text-lg font-medium text-[#1C1C1C] cursor-pointer mb-2"
              >
                <FaCog className="text-[#00B4D8]" />
                <span>Services</span>
              </div>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-6 flex flex-col gap-2"
                  >
                    {serviceItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        {item.icon}
                        <Link to={item.path} onClick={() => setIsOpen(false)}>{item.name}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-[#FF6B6B] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-[#e25b5b] transition-all duration-300"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Nursing Support
              </Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      className="group relative flex items-center gap-2 cursor-pointer"
    >
      <span className="text-[#00B4D8] text-xl">{icon}</span>
      <Link to={to} className="hover:text-[#00B4D8] transition-colors">{label}</Link>
      <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#00B4D8] transition-all duration-300 group-hover:w-full" />
    </motion.li>
  );
}
