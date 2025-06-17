export default function Main({ scrollTo }) {
  const workingVideoPath = '/videos/coworking.mp4'

    return <div className="relative w-full h-screen overflow-hidden mt-6 bg-yellow-500">
      {/* וידאו ברקע */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full object-cover opacity-70 z-0 rounded-none"
  
      >
        <source src={workingVideoPath} type="video/mp4" />
        הדפדפן שלך לא תומך בתגית וידאו.
      </video>

      {/* תוכן מעל הוידאו */}
      <div className="relative z-10 flex justify-center w-full h-full">
      <div className="flex flex-col items-start justify-center w-2/5 pl-4">
        <p className="text-white text-6xl text-left mb-6 font-bold">
          From idea to App Store
        </p>
        <p className="text-white text-5xl text-left mb-6">
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