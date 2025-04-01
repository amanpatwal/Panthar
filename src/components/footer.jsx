import { Crosshair, Instagram, Linkedin, Pin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <Image
              height={1080}
              width={1920}
              src="https://themebuz.com/demo/panthar/assets/img/logo/white-logo.png"
              alt="Panthar Logo"
              className="h-12 w-44"
            />
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            Our team includes doormen, bodyguards, and parking lot patrol
            officers with more than 15 years of combined experience.
          </p>
          <p className="mt-4 flex items-center space-x-2 text-gray-400">
            📍 <span>Street. 2891, Denpa, Bali</span>
          </p>
          <p className="mt-2 flex items-center space-x-2 text-gray-400">
            ✉️ <span>info@example.com</span>
          </p>
          <div className="flex space-x-4 mt-4 text-gray-400">
            <Instagram className="cursor-pointer hover:text-white" />
            <Twitter className="cursor-pointer hover:text-white" />
            <Pin className="cursor-pointer hover:text-white" />
            <Linkedin className="cursor-pointer hover:text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold border-l-4 border-red-600 pl-2">
            OUR COMPANY
          </h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Service</li>
            <li className="hover:text-white cursor-pointer">Our Campaign</li>
            <li className="hover:text-white cursor-pointer">Our Volunteer</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold border-l-4 border-red-600 pl-2">
            HELP
          </h3>
          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Event Security</li>
            <li className="hover:text-white cursor-pointer">Bank Security</li>
            <li className="hover:text-white cursor-pointer">Office Security</li>
            <li className="hover:text-white cursor-pointer">Vehicle Escort</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold border-l-4 border-red-600 pl-2">
            STAY CONNECTED
          </h3>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none"
            />
            <button className="mt-3 w-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center space-x-2 text-white px-4 py-2 rounded-md">
              <Crosshair /> <span>SUBSCRIBE NOW</span>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-4">
        Copyright 2021 Panthar. Designed By themebuzs
      </div>
    </footer>
  );
};

export default Footer;
