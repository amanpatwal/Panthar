import React from "react";
import React from 'react'
  import Image from "next/image"
  import { Shield } from "lucide-react"
  import { TbLicense } from "react-icons/tb";
  import { IoHome } from "react-icons/io5";
  import { FaBriefcase, FaPlus, FaRegFlag, FaUserSecret } from 'react-icons/fa';
  import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";



  
  
  
  
  const Page = () => {
    const cards = [
        {
          id: 1,
          title: "COMPANY",
          icon: <IoHome />,
          bgColor: "bg-red-600",
          textColor: "text-white",
          numberColor: "text-red-900",
        },
        {
          id: 2,
          title: "LICENSED",
          icon: <TbLicense />,
          bgColor: "bg-white",
          textColor: "text-gray-800",
          numberColor: "text-gray-300",
        },
        {
          id: 3,
          title: "TOP NOTCH",
          icon: <FaRegFlag />,
          bgColor: "bg-white",
          textColor: "text-gray-800",
          numberColor: "text-gray-300",
        },
      ];
      
      const timelineData = [
        {
          year: "1990",
          title: "Reach 1K Company at California",
          description:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded.",
          image: "/security.png",
        },
        {
          year: "1994",
          title: "Expanded to New York",
          description:
            "We took a big step and expanded our security services to New York, ensuring top-notch protection.",
          image: "/security.png",
        },
        {
          year: "2000",
          title: "Launched Advanced Training Programs",
          description:
            "We introduced high-level security training programs to enhance the skill set of our personnel.",
          image: "/security.png",
        },
        {
          year: "2007",
          title: "Security Tech Innovation",
          description:
            "Our company developed cutting-edge security technologies for enhanced surveillance and safety.",
          image: "/security.png",
        },
        {
          year: "2015",
          title: "International Expansion",
          description:
            "We expanded our services internationally, ensuring global security solutions with expertise.",
          image: "/security.png",
        },
      ];
      
      const clients = [
        "/company1.png",
        "/company2.png",
        "/company3.png",
        "/company4.png",
        "/company5.png",
      ];
    return (
      <>
  
        <div className="max-w-6xl mx-auto bg-white mt-[100px]">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-red-600 font-bold text-xl uppercase">About Us</h2>
                  <div className="flex items-center">
                    <div className="h-0.5 w-8 bg-red-600"></div>
                    <div className="h-3 w-3 rounded-full border-2 border-red-600"></div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">HELLO! HERE WE ARE -</h1>
                <div className="flex">
                  <div className="w-1.5 bg-red-600 mr-4"></div>
                  <p className="text-red-600 font-bold text-lg md:text-xl uppercase">
                    WE ARE HIGHLY WELL-KNOWN IN THE MARKET FOR DELIVERING PREEMINENT AND CONSISTENT SECURITY SERVICES
                  </p>
                </div>
                <p className="text-gray-700 text-base md:text-lg">
                  Private security in the province of British Columbia is governed by two pieces of legislation: the
                  Security Services Act 25 and the Security the Services Regulation.26 These laws are administered and
                  enforced by the Security Programs and Police Technology Division 27 of the Safety Ministry of Public
                  Safety and Solicitor General.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border-2 border-red-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">Event Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border-2 border-red-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">Bodyguard Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border-2 border-red-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">Bank Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border-2 border-red-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">Office Security</span>
                  </div>
                </div>
                <div>
                  <button className="border-2 border-red-600 text-gray-800 font-medium px-8 py-3 hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center">
                    Check All Services
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative ">
                <div className="relative">
                  <Image
                    src="/service-detail1.jpg"
                    alt="Security professional with radio"
                    width={0}
                    height={0}
                    className="w-[600px] h-[550px] object-cover"
                    sizes="(max-width: 768px)"
                  />
                  <div className="absolute -bottom-6 left-20 bg-gray-900 text-white p-4 flex items-center gap-3 max-w-[250px]">
                    <div className="bg-red-600 rounded-full p-2 flex items-center justify-center">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-red-600 text-2xl font-bold">40 years</div>
                      <div className="text-white">of working Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* section-2 */}
  
        <section className="bg-blue-950 py-32 px-5 md:px-20 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                className={p-10 py-24 shadow-lg relative ${card.bgColor} ${card.textColor}}
              >
                <div className={absolute top-5 right-4 text-7xl font-bold ${card.numberColor}}>
                  {card.id.toString().padStart(2, "0")}
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-6xl">{card.icon}</span>
                  <h3 className="text-3xl font-bold items-center">{card.title}</h3>
                </div>
                <p className="mt-6 text-sm">
                  Private security in the province of British Columbia is governed by two pieces of legislation: the Security Services Act 25 and the Security.
                </p>
              </div>
            ))}
          </div>
        </section>
  
        {/* section-3 */}
  
        <section className="py-10 px-5 md:px-20 bg-gray-100">
          <div className='flex items-center'>
            <h2 className='text-md uppercase font-bold text-red-700'>Our Team</h2>
            <Image src="/bullet.png" alt="Security professional with radio" width={100} height={0} className="w-[60px] h-[14px] object-fit ml-4 mt-1" />
          </div>
          <p className="text-black text-4xl uppercase font-extrabold mt-6">well trained panthar security</p>
          <Carousel>
            <CarouselContent>
              {timelineData.map((item, index) => (
                <CarouselItem key={index} className="grid md:grid-cols-2 gap-4 items-center">
                  <div className="py-28 mt-6 px-20 bg-white shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-gray-700 text-md">{item.description}</p>
                    <span className="block w-full border-t-2 border-dashed border-red-600 mt-5"></span>
                    <div className="mt-5 flex items-center space-x-3">
                      <span className="text-6xl font-bold text-red-600 stroke-[2px] stroke-red-600">{item.year}</span>
                      <Image
                        src="/bullet.png"
                        alt="Security professional with radio"
                        width={100}
                        height={0}
                        className="w-[80px] h-[20px] object-fit mt-4"
                      />
                    </div>
                  </div>
                  <div>
                    <Image src={item.image} alt={item.title} width={100} height={100} className="rounded-lg w-[600px] h-[400px] object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 bottom-0 top-[53%]" />
            <CarouselNext className="absolute right-0 bottom-0 top-[53%]" />
          </Carousel>
        </section>
  
        {/* section-4 */}
  
        <section className="max-w-7xl mx-auto py-10 px-5 md:px-20 bg-white">
          <div className="flex justify-center border-t border-b py-5 gap-6 flex-wrap">
            {clients.map((logo, index) => (
              <Image key={index} src={logo} alt="Client Logo" width={100} height={100} className="w-[200px] h-16 object-cover" />
            ))}
          </div>
        </section>
  
        {/* section-5 */}
  
        <div className="max-w-7xl mx-auto bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-red-600 font-bold text-xl">FAQ</h2>
                <div className="flex items-center">
                <Image src="/bullet.png" alt="Security professional with radio" width={100} height={0} className="w-[60px] h-[14px] object-fit ml-4 mt-1" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">FREQUENTLY ASKED QUESTIONS</h1>
              <p className="text-gray-700 mb-8">Common questions about being a Security Guard</p>
              <div className="border-t border-gray-200 my-6"></div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold">40</span>{" "}
                    <span className="text-gray-700">Years of working Experience</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <FaUserSecret className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold">1K+</span>{" "}
                    <span className="text-gray-700">Active Security Guard</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <FaBriefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold">500+</span> <span className="text-gray-700">New Job Offer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="space-y-6">
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                      <span className="text-red-600 font-bold mr-2">1.</span>
                      Difference between a security guard and a security officer?
                    </h3>
                    <button className="text-red-600">
                      <FaPlus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                      <span className="text-red-600 font-bold mr-2">2.</span>
                      Is panthar Luxury and comfort?
                    </h3>
                    <button className="text-red-600">
                      <FaPlus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-4 text-gray-700">
                    If you are unsure about what salary is appropriate for a security guard, visit Indeeds Salary
                    Calculator to get a free, personalized pay range based on your location, industry and experience.
                  </div>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                      <span className="text-red-600 font-bold mr-2">3.</span>
                      As a security guard, will I have to carry a gun?
                    </h3>
                    <button className="text-red-600">
                      <FaPlus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                      <span className="text-red-600 font-bold mr-2">4.</span>
                      Is panthar Luxury and comfort?
                    </h3>
                    <button className="text-red-600">
                      <FaPlus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      </>
    )
  }
  
  export default Page;

