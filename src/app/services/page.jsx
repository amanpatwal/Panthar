"use client";

import Image from "next/image";
import Banner from "@/components/banner";

const services = [
  {
    title: "Business Security",
    image:
      "https://themebuz.com/demo/panthar/assets/img/section-img/service/main-service-01.png",
  },
  {
    title: "Bank Security",
    image:
      "https://themebuz.com/demo/panthar/assets/img/section-img/service/main/service-02.png",
  },
  {
    title: "Event Security",
    image:
      "https://themebuz.com/demo/panthar/assets/img/section-img/service/main/service-03.png",
  },
  {
    title: "Bodyguard Security",
    image:
      "https://themebuz.com/demo/panthar/assets/img/section-img/service/main/service-04.png",
  },
  {
    title: "Office Security",
    image:
      "https://themebuz.com/demo/panthar/assets/img/section-img/service/main/service-05.png",
  },
  {
    title: "Vehicle Escort",
    image:
      "https://themebuz.com/demo/panthar/assets/img/section-img/service/main/service-06.png",
  },
];

const Service = () => {
  return (
    <>
      <Banner title="Services" newName="Services" />
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-4 mt-10 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                SMART SECURITY SERVICE FOR <br /> YOUR LIVE SAFETY
              </h2>
            </div>
            <div className="md:w-1/2 text-gray-600">
              <p>
                Panther has successfully completed 13 years in private security
                industry. Due to its professionalism, hard work and high ethical
                standard, Orion has been able to attain...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-12">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white text-lg font-semibold p-4 flex justify-between items-center group-hover:bg-red-700 transition">
                  {service.title}
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
