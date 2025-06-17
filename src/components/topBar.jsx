export default function TopBar({ scrollTo }) {
  return (
    <div className="my-4 px-4 flex flex-col md:flex-row md:justify-between items-center gap-4">
      <div>
        <h1 className="text-3xl md:text-4xl italic text-center md:text-left">
          <span className="text-black">iOS </span>
          <span className="text-purple-800 font-semibold">Elite</span>
        </h1>
      </div>
        <div></div>

      <div className="flex flex-wrap justify-center md:justify-end text-purple-700 gap-2">
        <button
          className="px-6 py-2 bg-blue-600 rounded-full text-white font-semibold shadow hover:bg-blue-700"
          onClick={() => scrollTo("Contact")}
        >
          Contact
        </button>
        <button
          className="px-4 py-2 rounded-full font-semibold shadow hover:bg-purple-100"
          onClick={() => scrollTo("About")}
        >
          About
        </button>
        <button
          className="px-4 py-2 rounded-full font-semibold shadow hover:bg-purple-100"
          onClick={() => scrollTo("Projects")}
        >
          Products
        </button>
      </div>
      <div></div>
    </div>
  );
}
