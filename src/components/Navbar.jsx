import React from "react";
// import logo from "./logo.png"; // apni logo image ka path yahan dena
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        <div className="flex items-center space-x-6">
          <img
            src="/public/images/Devflx Logo-01.png"
            alt="Logo"
            className="h-11 w-auto"
          />
        </div>
        <div>
          <ul className="hidden md:flex space-x-7 font-semibold text-sm font-poppins">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">FAQs</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="">  
          <Button variant="" className="bg-secondary px-5 font-poppins font-semibold">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
