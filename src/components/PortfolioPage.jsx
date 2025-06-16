import React, { useRef } from "react";
import { motion } from "framer-motion";
import ProjectsSection from "./ProjectsSection";
import ContactForm from "./contactForm";
import useTypingEffect from "../customHooks/useTypingEffect";
import profilePhoto from "../mockups/profile.jpg"
import About from "./about";
import TopBar from "./topBar"
import Main from "./main"

export default function PortfolioPage() {
  const typingText = useTypingEffect("Welcome to iOS Elite 🍏", 70);

  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  function scrollToRef(ref) {
  ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollTo(section) {
  switch (section) {
    case "Contact":
      scrollToRef(contactRef);
      break;
    case "About":
      scrollToRef(aboutRef);
      break;
    case "Projects":
      scrollToRef(projectsRef)
    // תוכל להוסיף עוד מקרים
    default:
      break;
  }
};

  return (
    <div className="relative w-full min-h-screen  text-white font-sans overflow-x-hidden">
      <TopBar 
      scrollTo={scrollTo}
      />
      <Main 
      scrollTo={scrollTo}
      />

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection />  
      </div>

      <div ref={contactRef}>
        <ContactForm />
      </div>


      <footer className="relative z-10 p-10 text-center text-gray-400 bg-gray-950">
        <p>© iOS Elite | 2025 All rights reserved | Built with love using React 💙</p>
      </footer>
    </div>
  );
}
