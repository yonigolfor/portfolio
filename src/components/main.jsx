export default function Main({ scrollTo }) {
  const workingVideoPath = '/videos/coworking.mp4'
  const compressedVideoPath = '/videos/coworking_compressed.mp4'

    return <div className="relative w-full h-screen overflow-hidden mt-6 bg-yellow-800">
      {/* וידאו ברקע */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0 rounded-none"

      >
        <source src={compressedVideoPath} type="video/mp4" />
        הדפדפן שלך לא תומך בתגית וידאו.
      </video>

      {/* תוכן מעל הוידאו */}
      <div className="relative z-10 flex justify-center w-full h-full">
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-2/5 px-4 text-center md:text-left">
        <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          From idea to App Store
        </p>
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl mb-6">
          End-to-end development for apps, backends, and websites — all under one roof.
        </p>
        <button
          onClick={() => scrollTo("Contact")}
          className="px-6 py-3 bg-blue-600 rounded-full text-white font-semibold shadow-lg hover:bg-blue-700"
        >
          Contact Us
        </button>
      </div>
      </div>
    </div>
}