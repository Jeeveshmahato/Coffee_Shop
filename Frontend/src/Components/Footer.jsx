import React from "react";
import coffeeicon from '../assets/coffee-icon-svgrepo-com.svg'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Brand Section with Coffee Icon */}
          <div className="flex flex-col items-center md:items-start">
            <img className="w-[30px] h-[30px]" src={coffeeicon} alt="" />
            <p className="mt-2 text-center md:text-left">
              Brewtopia - Your Ultimate Coffee Hub  
              <br />
              Brewing passion, one cup at a time.
            </p>
          </div>

          
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 mt-14">
          © {new Date().getFullYear()} Brewtopia | All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;