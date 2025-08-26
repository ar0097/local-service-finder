import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { PiMapPinBold } from "react-icons/pi";

function Homenavbar() {
  return (
    <nav className="border-b border-[#e5e7eb] bg-white backdrop-blur supports-[backdrop-filter]:bg-[#fff6] sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PiMapPinBold size={23} />
          <span className="text-xl font-bold">ServiceHub</span>
        </div>
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#64748b] h-4 w-4" />
            <input
              className="flex h-10 rounded-md border  px-3 py-2 text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium   focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 w-full"
              placeholder="Search for services..."
            />
          </div>
        </div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2">
          <MdLogin className=" h-4 w-4" />
          Login
        </button>
      </div>
    </nav>
  );
}

export default Homenavbar;

// http://10.161.254.15:3000
