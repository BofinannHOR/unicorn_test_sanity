import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between p-3 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <a>
            <img
              className="w-20 object-contain cursor-pointer"
              src="https://res.cloudinary.com/siem-reap/image/upload/v1660885564/Test%20api/uftlogo_f2ym88.webp"
              alt="logo_"
            />
          </a>
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-purple-500 hover:bg-purple-700 px-4 py-1 rounded-full cursor-pointer">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-purple-800">
        <h3>Sign In</h3>
        <h3 className="border border-purple-800 px-4 py-1 rounded-full ">
          Explore{" "}
        </h3>
      </div>
    </header>
  );
};

export default Navbar;
