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
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-white text-3xl text-center mb-6">
          וידאו ועוד נתונים צפים
        </h1>
        <button
          onClick={() => scrollTo("Contact")}
          className="px-6 py-3 bg-blue-600 rounded-full text-white font-semibold shadow-lg hover:bg-blue-700"
        >
          Contact Us
        </button>
      </div>
    </div>
}