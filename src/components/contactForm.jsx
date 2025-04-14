import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name.trim()) newErrors.name = "*This field is required";
    if (!email.trim()) newErrors.email = "*This field is required";
    if (!purpose.trim()) newErrors.purpose = "*This field is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      // Prepare data to send to the email
      const templateParams = {
        from_name: name,
        from_email: email,
        purpose: purpose,
        message: message,
      };

      // Send email using EmailJS
      emailjs
        .send(
          "service_3t556kh", // Replace with your EmailJS service ID
          "template_1fw3ihg", // Replace with your EmailJS template ID
          templateParams,
          "Af3Fw2s7Qnz140Q1s" // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log("Message sent: ", result.text);

            // Reset fields after successful submission
            setName("");
            setEmail("");
            setPurpose("");
            setMessage("");

            // Show toast
            setShowToast(true);
          },
          (error) => {
            console.log("Error sending message: ", error.text);
          }
        )
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <section className="relative z-10 py-20 px-6 md:px-32 bg-gray-800 text-white">
      <h2 className="text-4xl font-semibold text-center mb-10">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <select
            className="w-full p-3 rounded-lg bg-gray-900 text-white"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <option value="" disabled>Select Purpose</option>
            <option value="ios">iOS App Development</option>
            <option value="collab">Collaboration</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>}
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white shadow-lg transition duration-300 transform hover:scale-105 ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-500 animate-fade-in-out flex items-center gap-2">
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Message sent successfully!
        </div>
      )}

      {/* Fade in/out animation */}
      <style jsx>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(10px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
