import { Mail, MapPin, Plus, Search, Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      className=" w-screen  bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://themebuz.com/demo/panthar/assets/img/shapes/hero-shape.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between p-4 border-b-2 border-[#E5E5E5] px-[92px]">
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
      <div className="p-8 flex justify-between items-center border-b-4 border-[#E5E5E5] px-[92px]">
        <div className="">
          <Image
            height={1080}
            width={1920}
            src={"https://themebuz.com/demo/panthar/assets/img/logo/logo.png"}
            className="h-17 w-48"
          />
        </div>
        <div className="flex justify-center items-center  text-md gap-6">
          <div className="flex justify-center items-center gap-1 font-bold  ">
            HOME
            <Plus className="text-[#BA2423]" size={19} />
          </div>
          <div className="flex justify-center items-center gap-1 font-bold ">
            ABOUT US
          </div>
          <div className="flex justify-center items-center gap-1 font-bold ">
            SERVICES
            <Plus size={19} />
          </div>
          <div className="flex justify-center items-center gap-1 font-bold ">
            BLOG
            <Plus size={19} />
          </div>
          <div className="font-bold flex justify-center items-center gap-1 ">
            CONTACT <Search className="mx-12" />
          </div>
          <div>
            <div className="font-bold flex justify-center items-center gap-1 ">
              For <span className="text-[#BA2423]"> Emergency!</span>
            </div>
            <div className="font-bold flex justify-center items-center">
              +0 123 456 789
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
