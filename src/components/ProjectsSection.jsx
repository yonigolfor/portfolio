import { motion } from "framer-motion";
import React from "react";
import exerciseViewTrack from "../mockups/iFit/exerciseViewTrack.png";
import exerciseViewFriends from "../mockups/iFit/exerciseViewFriends.png";
import mainFeedIFit from "../mockups/iFit/mainFeed.png";
import exerciseViewLinePreview from "../mockups/iFit/exerciseViewLinePreview.png";
import mockupStopwatch from "../mockups/iFit/mockupStopwatch.png";

import productsView from "../mockups/IBIChallenge/productsView.png"
import loginIBI from "../mockups/IBIChallenge/login.png"
import favoritesIBI from "../mockups/IBIChallenge/favorites.png"
import detailIBI from "../mockups/IBIChallenge/detail.png"

import connect4 from "../mockups/connect4/main.png"

import headlightsOldMainFeed from "../mockups/Headlights/oldMainFeed.jpeg"

import swipyCleanGallery from "../mockups/Swipy/cleanGallery.png"
import swipyPrivacy from "../mockups/Swipy/privacy.png"
import swipyCategories from "../mockups/Swipy/categories.png"
import swipyShuffle from "../mockups/Swipy/shuffle.png"
import swipyReviewBin from "../mockups/Swipy/reviewBin.png"

export default function ProjectsSection() {
    const projects = [
      {
        title: "Swipy App",
        description: "Swipe your gallery, free iPhone storage in seconds!",
        image: [swipyCleanGallery, swipyPrivacy, swipyCategories, swipyShuffle, swipyReviewBin],
      },
      {
        title: "iFit App",
        description: "Social gym tracking app built with SwiftUI, Realm, and Firebase.",
        image: [exerciseViewFriends, exerciseViewLinePreview, mainFeedIFit, mockupStopwatch],
      },
      {
        title: "SecureShop",
        description: "Encrypted product management app with biometric login.",
        image: [loginIBI, productsView, favoritesIBI, detailIBI],
      },
      {
        title: "Connect 4",
        description: "The well known game - now in your pocket.",
        image: [connect4],
      },
      {
        title: "Headlights",
        description: "Sport content app built with SwiftUI, URL Sessions and local storage management.",
        image: [headlightsOldMainFeed],
      },
      // Add more projects here
    ];
    return (
        <section className="relative z-10 py-20 px-8 md:px-20 bg-gray-900/90">
        <h2 className="text-4xl font-semibold text-center mb-16">My Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="flex overflow-x-auto w-full mt-2 gap-2">
                {project.image.map((rawImg, index) => 
                <img
                src={rawImg}
                alt={project.title}
                className="w-full h-80 object-contain"
              />
                )}
                
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
}