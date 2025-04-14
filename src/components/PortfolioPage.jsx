import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProjectsSection from "./ProjectsSection";
import ContactForm from "./contactForm";
import useTypingEffect from "../customHooks/useTypingEffect";


export default function PortfolioPage() {
  const typingText = useTypingEffect("Hi, I'm your next iOS Developer 🍏", 70);

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden">
      {/* Background video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-1614492714667?token=eyJhbGciOiJIUzI1NiJ9" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero section */}
      {/* min h screen makes the Hero take full screen */}
      <div className="relative z-10 p-10 flex flex-col items-center text-center min-h-screen justify-center ">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          {typingText}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl max-w-2xl"
        >
          I build modern SwiftUI apps with Realm, Firebase, animations, encryption, and more.
        </motion.p>

        <div className="flex gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            onClick={scrollToContact}
            className="px-6 py-3 bg-blue-600 rounded-full text-white font-semibold shadow-lg hover:bg-blue-700"
          >
            Contact Me
          </motion.button>
        </div>                   
      </div>
      <ProjectsSection />  
      
      <div ref={contactRef}>
        <ContactForm ref={contactRef} />
      </div>


      <footer className="relative z-10 p-10 text-center text-gray-400 bg-gray-950">
        <p>© 2025 All rights reserved | Built with love using React 💙</p>
      </footer>
    </div>
  );
}
