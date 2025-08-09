import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Devflx</h2>
          <p className="mt-4 text-sm">
            Devflx is a creative software house specializing in modern web,
            mobile, and custom software solutions to help businesses grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="">Home</a></li>
            <li><a href="/about" className="">About Us</a></li>
            <li><a href="/services" className="">Services</a></li>
            <li><a href="/contact" className="">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Custom Software</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold  mb-4">Get in Touch</h3>
          <p>Email: <a href="mailto:info@devflx.com" className="">info@devflx.com</a></p>
          <p>Phone: +92 300 1234567</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className=""><Facebook /></a>
            <a href="#" className=""><Twitter /></a>
            <a href="#" className=""><Linkedin /></a>
            <a href="mailto:info@devflx.com" className="hover:text-white"><Mail /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8">
        <p className="text-center py-4 text-sm">
          © {new Date().getFullYear()} Devflx. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
