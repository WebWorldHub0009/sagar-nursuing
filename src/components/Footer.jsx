import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope,
  FaPhoneAlt, FaMapMarkerAlt, FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative text-gray-100 bg-[#0d1b2a] px-6 md:px-16 pt-20 pb-10 overflow-hidden font-[Poppins]"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Glows */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-blue-300 blur-[130px] opacity-10 rounded-full -z-10" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-cyan-300 blur-[150px] opacity-10 rounded-full -z-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-sm relative z-10">
        {/* About Section */}
        <div className="flex flex-col space-y-5">
          <img src={""} alt="Sagar Nursing Bureau Logo" className="w-32 mb-4" />
          <h4 className="text-cyan-400 font-semibold text-2xl">About Us</h4>
          <p className="leading-relaxed text-gray-300">
            At Sagar Nursing Bureau, we provide reliable, compassionate, and expert home healthcare and hospital staff for your every need.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition"><FaYoutube /></a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-cyan-400 font-semibold mb-4 text-2xl">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Team", "/team"],
              ["Contact", "/contact"]
            ].map(([label, path], idx) => (
              <li key={idx}>
                <Link to={path} className="hover:text-cyan-400 text-gray-300 transition">{label}</Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-cyan-400 font-semibold text-2xl">Emails</h4>
          <ul className="mt-2 space-y-2">
            {[
              "Info@sagarnursingbureau.in",
              "Sagarnursingbureau@gmail.com"
            ].map((email, i) => (
              <li key={i}>
                <a href={`mailto:${email}`} className="flex items-center space-x-2 hover:text-cyan-400 text-gray-300 transition">
                  <FaEnvelope className="text-cyan-400" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-cyan-400 font-semibold mb-4 text-2xl">Our Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-cyan-400 cursor-pointer transition">Home Nursing Services</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">Elderly Care</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">Medical Attendants</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">ICU Trained Nurses</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">Physiotherapy</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">Patient Care Services</li>
          </ul>
        </div>

        {/* Key Info */}
        <div>
          <h4 className="text-cyan-400 font-semibold mb-4 text-2xl">Key Personnel</h4>
          <ul className="space-y-2 text-gray-300">
            <li><strong>Owner:</strong> S. K. Sagar</li>
            <li><strong>Contact:</strong></li>
            <li className="flex items-center"><FaPhoneAlt className="text-cyan-400 mr-2" /> +91 8447176250</li>
            <li className="flex items-center"><FaPhoneAlt className="text-cyan-400 mr-2" /> +91 7011061519</li>
          </ul>
        </div>

        {/* Address & Translator */}
        <div>
          <h4 className="text-cyan-400 font-semibold mb-4 text-2xl">Office Address</h4>
          <address className="not-italic leading-relaxed text-gray-300">
            <FaMapMarkerAlt className="inline-block text-cyan-400 mr-2" />
            Plot No. 13/746, Ground Floor,<br />
            Gali No. 13, Block L 1st,<br />
            Near Sai Baba Mandir,<br />
            Buddh Bazar Baandh Road,<br />
            Sangam Vihar, New Delhi 110080, India
          </address>

          <div className="flex md:ml-0 -ml-24 mt-4">
            <Translator />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Sagar Nursing Bureau. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:text-white transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
