"use client";
import { Mail, MapPin, Menu, Plus, Search, Share2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className=" z-50   bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://themebuz.com/demo/panthar/assets/img/shapes/hero-shape.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hidden md:flex justify-between p-4 border-b-2 border-[#E5E5E5] px-[92px]">
        <div className="flex justify-center items-center gap-3 font-semibold  text-xs">
          <Share2 className="text-[#BA2423]" fill="#BA2423" size={18} />
          <div className="text-gray-500">FACEBOOK</div>
          <div className="text-gray-500">TWITTER</div>
          <div className="text-gray-500">INSTAGRAM</div>
          <div className="text-gray-500">YOUTUBE</div>
        </div>
        <div className="flex justify-center items-center gap-2 font-semibold  text-xs text-gray-500">
          <MapPin className="text-[#BA2423] " size={18} />{" "}
          <span className="mr-5"> DEWI SRI STREET. 2891, DENPASAR, BALI</span>
          <Mail className="text-[#BA2423]" size={18} /> INFO@POLITICAL.COM
        </div>
      </div>
      <div className="z-50 relative p-8 flex justify-between items-center border-b-4 border-[#E5E5E5] md:px-[92px]">
        <div className="">
          <Image
            height={1080}
            width={1920}
            src={"https://themebuz.com/demo/panthar/assets/img/logo/logo.png"}
            className="h-17 w-48"
          />
        </div>
        <div className="hidden md:flex justify-center items-center  text-md gap-6">
          <Link
            href={"/"}
            className="flex justify-center items-center gap-1 font-bold  "
          >
            HOME
            <Plus className="text-[#BA2423]" size={19} />
          </Link>
          <Link
            href={"/about"}
            className="flex justify-center items-center gap-1 font-bold "
          >
            ABOUT US
          </Link>
          <Link
            href={"/services"}
            className="flex justify-center items-center gap-1 font-bold "
          >
            SERVICES
            <Plus size={19} />
          </Link>
          <Link
            href={"/"}
            className="flex justify-center items-center gap-1 font-bold "
          >
            BLOG
            <Plus size={19} />
          </Link>
          <Link
            href={"/contact"}
            className="font-bold flex justify-center items-center gap-1 "
          >
            CONTACT <Search className="mx-12" />
          </Link>
          <div>
            <div className="font-bold hidden md:flex justify-center items-center gap-1 ">
              For <span className="text-[#BA2423]"> Emergency!</span>
            </div>
            <div className="font-bold flex justify-center items-center">
              +0 123 456 789
            </div>
          </div>
        </div>
        <div className="flex md:hidden">
          {/* <Menu onClick={handleMenuClick} className="cursor-pointer" /> */}
          {showMenu ? (
            <X onClick={handleMenuClick} className="cursor-pointer" />
          ) : (
            <Menu onClick={handleMenuClick} className="cursor-pointer" />
          )}
        </div>
        {showMenu && (
          <div className="z-50  absolute top-[120px] left-0 h-[50vh] bg-gray-200 rounded-b-lg w-[80vw] md:hidden flex flex-col items-center justify-center gap-8">
            <Link
              href={"/"}
              className="flex border-b-2 w-full  border-slate-700 justify-start pl-12 items-center gap-1 font-bold  "
            >
              HOME
              <Plus size={19} />
            </Link>
            <Link
              href={"/about"}
              className="flex border-b-2 w-full  border-slate-700 justify-start pl-12 items-center gap-1 font-bold "
            >
              ABOUT US
            </Link>
            <Link
              href={"/services"}
              className="flex border-b-2 w-full  border-slate-700 justify-start pl-12 items-center gap-1 font-bold "
            >
              SERVICES
              <Plus size={19} />
            </Link>
            <Link
              href={"/"}
              className="flex border-b-2 w-full  border-slate-700 justify-start pl-12 items-center gap-1 font-bold "
            >
              BLOG
              <Plus size={19} />
            </Link>
            <Link
              href={"/contact"}
              className="font-bold flex border-b-2 w-full  border-slate-700 justify-start pl-12 items-center gap-1 "
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
