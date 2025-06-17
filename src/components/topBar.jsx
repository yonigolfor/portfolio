

export default function TopBar({scrollTo}) {
    return ( 
    <div className="my-2 ml-20 flex justify-between">
        <div className="">
            <h1 className="text-4xl italic">
            <span className="text-black">iOS </span>
            <span className="text-purple-800 font-semibold">Elite</span>
            </h1>        
        </div>
        <div className="text-purple-700">
            <button
            className="mx-4 px-6 py-3 bg-blue-600 rounded-full text-white font-semibold shadow-lg hover:bg-blue-700"
            onClick={() => {scrollTo("Contact")}}
            >
                Contact
            </button>
            <button className="mx-4 px-4 py-1 rounded-full font-semibold shadow-md hover:bg-purple-100"
            onClick={() => { scrollTo("About")}}
            >
                About
            </button>
            <button className="mx-4 px-4 py-1 rounded-full font-semibold shadow-md hover:bg-purple-100"
            onClick={() => { scrollTo("Projects")}}
            >
                Products
            </button>
        </div>
        <div></div>
    </div>
    )
}

