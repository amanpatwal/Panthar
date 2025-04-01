import Image from "next/image";
import React from "react";

const HoverIcons = () => {
  const logos = [
    {
      src: "https://themebuz.com/demo/panthar/assets/img/section-img/brand/brand-06.png",
      alt: "Amazon",
    },
    {
      src: "https://themebuz.com/demo/panthar/assets/img/section-img/brand/brand-07.png",
      alt: "Yahoo Finance",
    },
    {
      src: "https://themebuz.com/demo/panthar/assets/img/section-img/brand/brand-08.png",
      alt: "DHL",
    },
    {
      src: "https://themebuz.com/demo/panthar/assets/img/section-img/brand/brand-09.png",
      alt: "Logitech",
    },
    {
      src: "https://themebuz.com/demo/panthar/assets/img/section-img/brand/brand-10.png",
      alt: "Apper",
    },
  ];
  return (
    <section className="py-10 mt-4 bg-white">
      <div className="container mx-auto flex justify-center items-center gap-10  md:gap-52 flex-wrap">
        {logos.map((logo, index) => (
          <div key={index} className="h-12 w-auto flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={1920}
              height={1080}
              objectFit="contain"
              className="h-7 w-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoverIcons;
