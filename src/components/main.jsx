
export default function Main({ scrollTo }) {
    return <div className=" flex items-center justify-center mt-6">
      <div className="bg-purple-600 w-full h-full">
        <h1 className="text-white text-center text-2xl pt-8">וידאו ועוד נתונים צפים</h1>
        <button
        onClick={() => {scrollTo("Contact")}}
        className="mx-8 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold shadow-lg hover:bg-blue-700"
        >
            Contact Us
        </button>
      </div>
    </div>
}