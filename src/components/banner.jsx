"use client";
import Link from "next/link";

import Image from "next/image";

const Banner = ({ title, names, newName }) => {
  return (
    <section className="relative w-full h-[350px] bg-black flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://themebuz.com/demo/panthar/assets/img/section-img/breadcrumb/breadcrumb-bg.png"
          alt="Banner Background"
          objectFit="cover"
          height={1080}
          width={1920}
          className="opacity-50 object-cover  w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h1 className="text-4xl font-bold">{title}</h1>

        <div className="flex items-center mt-3 text-gray-300">
          <Link href="/" className="flex items-center hover:text-white">
            <span className="material-icons"></span> Home
          </Link>
          <span className="mx-2 text-red-500">➝</span>
          <span className="text-red-500">{newName}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
