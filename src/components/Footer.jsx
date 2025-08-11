import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 text-black">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8 font-poppins">
        
        {/* Company Info */}
        <div className="flex-1">
          <img
            src="/images/Devflx Logo-01.png"
            alt="Devflx Logo"
            className="h-11 w-auto"
          />
          <p className="mt-4 text-sm leading-7 w-[120%]">
            Devflx is a modern software house providing cutting-edge web,
            mobile, and cloud solutions to help businesses grow digitally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 md:pl-40">
          <h3 className="text-lg  mb-4 font-spaceGrotesk">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="text-lg font-spaceGrotesk mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-lg font-spaceGrotesk mb-4">Contact Us</h3>
          <p className="text-sm">Email: info@devflx.com</p>
          <p className="text-sm">Phone: +92 300 1234567</p>
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="#" className="hover:text-gray-600"><Facebook size={18} /></a>
            <a href="#" className="hover:text-gray-600"><Twitter size={18} /></a>
            <a href="#" className="hover:text-gray-600"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-gray-600"><Instagram size={18} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-500 font-poppins">
        © {new Date().getFullYear()} Devflx. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
