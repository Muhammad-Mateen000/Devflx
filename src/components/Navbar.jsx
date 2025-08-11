import React from "react";
// import logo from "./logo.png"; // apni logo image ka path yahan dena
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
          <ul className="hidden md:flex space-x-7 font-semibold text-sm font-poppins">
            <Link to={"/"}>
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="hover:text-blue-600 cursor-pointer">About</li>
            </Link>
            <Link to={"/services"}>
              <li className="hover:text-blue-600 cursor-pointer">Services</li>
            </Link>
            <Link to={"/faqs"}>
              <li className="hover:text-blue-600 cursor-pointer">FAQs</li>
            </Link>
            <Link to={"/contact"}>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="">
          <Button variant="secondary" size="" className="px-6 text-white shadow-md">
              Get Started
            </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
