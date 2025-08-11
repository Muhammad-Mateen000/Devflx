import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        <div className="flex items-center space-x-6">
          <img
            src="/images/Devflx Logo-01.png"
            alt="Logo"
            className="h-11 w-auto"
          />
        </div>
        <div>
          <ul className="hidden md:flex space-x-7 font-semibold text-sm font-spaceGrotesk tracking-wide">
            <li>
              <a href="#home" className="hover:text-blue-600 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600 cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-blue-600 cursor-pointer">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Button
            variant="secondary"
            size=""
            className="px-6 text-white shadow-md"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
