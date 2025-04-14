import React from "react";

export default function ContactForm() {
    return (
        <section className="relative z-10 py-20 px-6 md:px-32 bg-gray-800">
        <h2 className="text-4xl font-semibold text-center mb-10">Contact Me</h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
          />
          <select
            className="w-full p-3 rounded-lg bg-gray-900 text-white"
            defaultValue=""
          >
            <option value="" disabled>Select Purpose</option>
            <option value="ios">iOS App Development</option>
            <option value="collab">Collaboration</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white shadow-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    )
}