import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/home/cbg.avif"; // Replace with Sagar Nursing background
import bg2 from "../assets/home/contact.avif"; // Replace with relevant healthcare image
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import MapSection from "../components/MapSection";

export default function ContactHero() {
  const handleScroll = () => {
    const section = document.getElementById("our-work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
   const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center px-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Glowing Gradient Rings */}
      <div className="absolute inset-0 z-0">
        <div className="w-[500px] h-[500px] bg-gradient-to-br from-[#0077B6] via-[#1A3A6D] to-[#000000] rounded-full blur-[180px] opacity-30 absolute -top-32 -left-40"></div>
        <div className="w-[300px] h-[300px] bg-[#0077B6] rounded-full blur-[150px] opacity-20 absolute bottom-10 right-0"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white max-w-4xl space-y-6"
        initial={{ opacity: 0, x: -80 }} // Animate from left
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="inline-block px-4 py-1 text-sm uppercase tracking-wider bg-[#0077B6] text-white rounded-full shadow-md">
          Connect with Sagar Nursing Bureau
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-wide leading-tight font-[Italiana] bg-gradient-to-r from-[#0077B6] to-white bg-clip-text text-transparent drop-shadow-lg">
          Compassionate Care, Professional Service
        </h1>

        <p className="text-gray-200 max-w-xl mx-auto leading-relaxed">
          Your trusted partner for skilled nursing care and dedicated healthcare support. Connect with us today to ensure quality services.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <button
            onClick={() => scrollToSection("contact-section")}
            className="px-6 py-3 bg-[#0077B6] text-white font-medium rounded-full shadow-md hover:bg-[#0077B6] transition cursor-pointer"
          >
            Book Nursing Services
          </button>
          <button
            onClick={() => scrollToSection("services-section")}
            className="px-6 py-3 border border-[#007bff] text-white font-medium rounded-full hover:bg-[#007bff] hover:text-white transition cursor-pointer"
          >
            View Our Services
          </button>
        </div>
      </motion.div>
    </section>

      {/* Contact Section */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#F7F5F2] text-[#1C1C1C] mt-1
      ">
        {/* Left Panel: Info */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 bg-white px-8 py-16 shadow-xl"
        >
          <h2 className="text-4xl font-bold mb-4 pb-2 inline-block border-b-4 border-[#0077B6]">
            Let’s Connect
          </h2>
          <p className="text-lg text-[#5E5E5E] mb-8">
            We’re just a call or message away from providing you with top-quality healthcare and nursing services at your doorstep.
          </p>

          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <h4 className="font-semibold mb-1">Contact Numbers</h4>
              <p>📞 +91 8447176250</p>
              <p>📞 +91 7011061519</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Emails</h4>
              <p>✉️ Info@sagarnursingbureau.in</p>
              <p>✉️ Sagarnursingbureau@gmail.com</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Office Address</h4>
              <p>
                Plot No. 18/746, Ground Floor, Gali No. 13, Block L 1st,<br />
                Nearby Sai Baba Mandir, Buddh Bazar Baandh Road,<br />
                Sangam Vihar, New Delhi - 110080, India.
              </p>
            </div>
          </div>

          <div className="mt-6 flex space-x-4 text-2xl text-[#4B4B4B]">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt].map((Icon, i) => (
              <Icon key={i} className="hover:text-[#0077B6] transition-colors cursor-pointer" />
            ))}
          </div>
        </motion.div>

        {/* Right Panel: Form */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center shadow-xl"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bg2})` }}
          />
          <div className="absolute inset-0 bg-black/70" />

          {/* Form */}
          <form
            action="https://formsubmit.co/sagarnursingbureau@gmail.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-[#0077B6] inline-block">
              Contact Form
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-2"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-2"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="col-span-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0077B6] text-white py-3 font-semibold rounded-full hover:bg-[#0056b3] transition duration-300"
            >
              Send Message
            </button>

            {/* Formsubmit config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://sagarnursingbureau.in/" />
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <MapSection />
    </>
  );
}
