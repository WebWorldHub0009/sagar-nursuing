import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="relative py-14 px-6 bg-[#F9F9F9] text-white overflow-hidden">
      {/* Glow Background Circles */}
      <div className="absolute w-[400px] h-[400px] bg-[#007bff] rounded-full blur-[180px] opacity-20 -top-20 -left-20 z-0"></div>
      <div className="absolute w-[300px] h-[300px] bg-[#1A3A6D] rounded-full blur-[160px] opacity-20 bottom-0 right-0 z-0"></div>

      {/* Section Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="inline-block px-4 py-1 text-sm uppercase tracking-wider bg-[#007bff] text-white rounded-full shadow-md mb-4">
          Visit Our Office
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[Italiana]">
          <span className="bg-gradient-to-r from-[#007bff] to-[#1A3A6D] bg-clip-text text-transparent">
            Find Us Easily
          </span>
        </h2>

        <p className="text-gray-800 max-w-2xl mx-auto mb-10">
          Visit Sagar Nursing Bureau at our New Delhi office. Our team is ready to assist you with premium nursing services.
        </p>

        {/* Map & Info Card */}
        <div className="relative mt-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-[#007bff]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112204.71072951278!2d77.1452369877451!3d28.49769475404675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce1576b0e6963%3A0x302f3dca0b62ffa5!2sblock%20L1ST%2C%20House%20No.%2013%2F746%20Ground%20Floor%20Gali%20No.13%2C%20Baandh%20Rd%2C%20nearby%20Sai%20Baba%20Mandir%2C%20Budh%20Bazar%2C%20Sangam%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110080!3m2!1d28.4977196!2d77.2276384!5e0!3m2!1sen!2sin!4v1754455274616!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sagar Nursing Bureau Location"
            ></iframe>
          </div>

          {/* Address Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-[#007bff] text-left text-white space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#007bff]">
              <FaMapMarkerAlt className="text-xl" />
              Sagar Nursing Bureau
            </h3>
            <p className="text-gray-800">
              Plot No. 18/746, Ground Floor,<br />
              Gali No. 13, Block L 1st,<br />
              Nearby Sai Baba Mandir, Buddh Bazar,<br />
              Baandh Road, Sangam Vihar,<br />
              New Delhi - 110080, India
            </p>
            <p className="text-gray-800">
              <strong>Phone:</strong> +91 8447176250, +91 7011061519 <br />
              <strong>Email:</strong> Info@sagarnursingbureau.in, Sagarnursingbureau@gmail.com
            </p>
            <a
              href="https://maps.app.goo.gl/U3FK2Ex4aD5EkMnb9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-5 py-2 rounded-full bg-[#007bff] text-white font-medium hover:bg-[#0056b3] transition"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
