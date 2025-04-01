import Footer from "@/components/footer";
import HoverIcons from "@/components/hoverIcons";
import {
  Award,
  Calculator,
  Crosshair,
  Instagram,
  Linkedin,
  Pin,
  Play,
  Star,
  Twitter,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const values = [
    "Compassion",
    "Team Work",
    "Value",
    "Ethnicity",
    "Commitment",
    "Excellence",
  ];

  const blogs = [
    {
      id: 1,
      title: "Safety Your Home to Failure",
      author: "Smith Khan",
      date: "25 DEC 2021",
      image:
        "https://themebuz.com/demo/panthar/assets/img/section-img/blog/blog-01.png",
    },
    {
      id: 2,
      title: "The BBC Series Bodyguard",
      author: "Dumen Raji",
      date: "25 DEC 2021",
      image:
        "https://themebuz.com/demo/panthar/assets/img/section-img/blog/blog-02.png",
    },
    {
      id: 3,
      title: "How safe is the Caribbean?",
      author: "Fork Mork",
      date: "25 DEC 2021",
      image:
        "https://themebuz.com/demo/panthar/assets/img/section-img/blog/blog-03.png",
    },
  ];
  return (
    <>
      <div className="h-full w-full">
        <div
          className="h-[97vh] w-screen bg-no-repeat bg-cover relative" // Added relative for potential absolute positioning
          style={{
            backgroundImage:
              "url(https://themebuz.com/demo/panthar/assets/img/shapes/hero-shape.png)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 pl-6 md:pl-[92px] gap-8 md:gap-4 py-12 items-center">
            <div className="mt-16 md:mt-32">
              <div className="text-4xl md:text-[80px] font-bold text-[#BA2423] leading-tight">
                OFFICE SECURITY
              </div>
              <div className="text-xl md:text-3xl tracking-[0.2em] space-x-2 md:space-x-6 font-bold text-[#555555] pb-6 md:pb-8">
                <span>FOR</span>
                <span>YOUR</span>
                <span>PERSONAL</span>
                <span>SAFETY</span>
              </div>
              <div className="text-base md:text-lg text-[#555555] max-w-md md:max-w-[700px]">
                American Panthar Security is looking to expand our private
                security company in Colorado. This means we need qualified
                professionals to join our team. We are looking for former police
                officers and ex-military members.
              </div>
              <div className="mt-10 md:mt-20">
                <button className="bg-[#F1EBED] border-2 text-black border-[#BA2423] px-6 py-3 rounded-md">
                  CONTACT US
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center h-full">
              <Image
                src="https://themebuz.com/demo/panthar/assets/img/section-img/baner/banar-img-01.png"
                alt="Security Image"
                width={670} // Set width to the original image width
                height={700} // Set height to the original image height
                className="w-full max-w-[670px] h-auto" // Responsive image
              />
            </div>
          </div>
        </div>
        <HoverIcons />
        <section className="py-16 mx-auto max-w-7xl px-20 bg-white flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-[#BA2423] font-bold uppercase text-lg flex items-center gap-2">
              Why Choose Us{" "}
              <span className="inline-block w-6 h-1 bg-[#BA2423]"></span>
            </h3>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-6">
              PROFESSIONAL SECURITY <br /> SERVICES YOU CAN TRUST
            </h2>
            <p className="mt-7 text-black  w-[460px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco laboris sed
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 text-left">
              <p className="text-gray-900 font-bold flex items-center gap-2">
                <span className="text-[#BA2423]">—</span> Security Consulting
              </p>
              <p className="text-gray-900 font-bold flex items-center gap-2">
                <span className="text-[#BA2423]">—</span> Security Consulting
              </p>
              <p className="text-gray-900 font-bold flex items-center gap-2">
                <span className="text-[#BA2423]">—</span> Private Security
              </p>
              <p className="text-gray-900 font-bold flex items-center gap-2">
                <span className="text-[#BA2423]">—</span> Private Security
              </p>
              <p className="text-gray-900 font-bold flex items-center gap-2">
                <span className="text-[#BA2423]">—</span> Close Protections
              </p>
              <p className="text-gray-900 font-bold flex items-center gap-2">
                <span className="text-[#BA2423]">—</span> Close Protections
              </p>
            </div>

            <Link href="/about">
              <div className="inline-block mt-10 border-2 border-[#BA2423] bg-[#FDF7F7] text-black font-semibold py-3 px-6 rounded-lg hover:bg-red-600 hover:text-white transition duration-300">
                More About Us
              </div>
            </Link>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
            <Image
              src="https://themebuz.com/demo/panthar/assets/img/section-img/choose/why.png"
              alt="Security Team"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
            <button className="absolute bottom-12 left-14 bg-[#BA2423] text-white p-5 rounded-full shadow-lg hover:bg-red-700 transition">
              <Play fill="white" />
            </button>
          </div>
        </section>
        <section className="bg-[#0D1522] py-16 pb-20 mt-20 px-8 ">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-8 mt-12">
              <div className="bg-[#BE2423] p-10 border-8 border-white text-white flex-1 max-w-md">
                <div className="flex items-center space-x-7">
                  <div className="bg-white p-3 rounded">
                    <Calculator color="#BE2423" size={50} />
                  </div>
                  <div>
                    <p className="font-bold">LOW RATES, NO CONTARCT</p>
                    <span className="text-sm">Get Quote</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#BE2423] p-10 border-8 border-white text-white flex-1 max-w-md">
                <div className="flex items-center space-x-7">
                  <div className="bg-white p-3 rounded">
                    <Users color="#BE2423" size={50} />
                  </div>
                  <div>
                    <p className="font-bold">LOW RATES, NO CONTARCT</p>
                    <span className="text-sm">Contact us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-24">
            <div className="flex justify-center font-bold text-xl pb-6 items-center text-[#BA2423]">
              <span className="mr-2 inline-block w-7 h-1 bg-[#BA2423]"></span>
              CASES SOLVED{" "}
              <span className="ml-2 inline-block w-7 h-1 bg-[#BA2423]"></span>
            </div>
            <div className="text-white font-bold text-4xl">
              SOLVED MANY CRITICAL CASES
            </div>
          </div>
          <div className="grid grid-cols-3 mx-auto max-w-7xl px-20 gap-4 mt-12">
            <div className="">
              <Image
                height={1080}
                width={1920}
                src={
                  "https://themebuz.com/demo/panthar/assets/img/section-img/case/case-02.png"
                }
              />
            </div>
            <div className="">
              <Image
                height={1080}
                width={1920}
                src={
                  "https://themebuz.com/demo/panthar/assets/img/section-img/case/case-03.png"
                }
              />
            </div>
            <div className="">
              <Image
                height={1080}
                width={1920}
                src={
                  "https://themebuz.com/demo/panthar/assets/img/section-img/case/case-04.png"
                }
              />
            </div>
          </div>
        </section>
        <section className="bg-white py-12 text-center">
          <div className="container mx-auto px-4 mt-12">
            <div className="flex pb-3 items-center justify-center space-x-2 text-[#BE2423] font-bold text-lg">
              <span className="inline-block w-6 h-1 bg-[#BE2423]"></span>
              <span>OUR SECURITY</span>
              <span className="inline-block w-6 h-1 bg-[#BE2423]"></span>
            </div>
            <h2 className="text-3xl pb-1 md:text-4xl font-bold text-gray-900 mt-2">
              PROFESSIONAL SECURITY
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Experience the quality of Farvis ipsum dolor sit amet consectetur
              adipiscing elit sed eiusmod labore et dolore magna aliqua enim
              minim veniam quis nostrud exercitation.
            </p>
          </div>

          <section className="px-4 py-10 bg-white">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="border-4 border-[#BE2423] w-full md:w-44 h-[510px] p-2 flex justify-center items-center flex-col">
                  <p className="text-[#BE2423] font-bold w-full md:w-[400px] md:rotate-[-90deg] tracking-widest text-center md:text-left">
                    WE PERFORM OVER{" "}
                    <span className="text-black">400 SUCCESSFUL</span> SECURITY
                    EVERY YEAR
                  </p>
                </div>

                <div className="relative bg-[#0D1422] text-white w-full md:w-96 flex flex-col justify-center items-center">
                  <div className="absolute top-4 left-4 bg-white text-white p-5 rounded-full">
                    <Award size={30} color="#BE2423" />
                  </div>
                  <Image
                    height={1080}
                    width={1920}
                    src="https://themebuz.com/demo/panthar/assets/img/section-img/security/security-01.png"
                    alt="Security Personnel"
                    className="w-full md:w-72 h-auto md:h-72 mt-20 md:mt-56 object-cover"
                  />
                </div>

                <div className="bg-[#BA2423] w-full md:w-[550px] items-start text-white p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-bold mb-4">
                    EFFECTIVE INTEGRATED SECURITY
                  </h2>
                  <p className="mb-4 text-left text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim adiqua minim veniam quis nostrud exercitation
                    ullamco laboris sed
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
                    <li className="font-bold mb-1">- Security Consulting</li>
                    <li className="font-bold mb-1">- Security Consulting</li>
                    <li className="font-bold mb-1">- Private Security</li>
                    <li className="font-bold mb-1">- Private Security</li>
                    <li className="font-bold mb-1">- Close Protections</li>
                    <li className="font-bold mb-1">- Close Protections</li>
                  </ul>
                  <button className="mt-4 px-6 py-2 bg-white text-red-600 font-bold rounded">
                    CHECK ALL SERVICES
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="bg-gray-900 text-white py-16 px-6">
          <div className="max-w-4xl mx-auto text-center pt-12">
            <div className="flex justify-center pb-2 items-center space-x-2 ">
              <span className="inline-block w-6 h-1 bg-white"></span>
              <span>CORE VALUES</span>
              <span className="inline-block w-6 h-1 bg-white"></span>
            </div>
            <h1 className="text-4xl pb-3 font-bold mt-2">Panthar Core Value</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 px-10 py-4 mb-10 rounded-2xl shadow-md flex items-center gap-2 w-48 justify-center"
              >
                <span className="text-red-600 text-xl">
                  <Crosshair />
                </span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="py-16 px-6 bg-white text-black">
          <div className="max-w-5xl mx-auto text-center mt-12">
            <div className="flex justify-center items-center space-x-2 pb-2">
              <span className="inline-block w-6 h-1 bg-[#BE2423]"></span>
              <span className="text-[#BE2423] text-xl font-bold">
                WHAT THEY ARE SAYING
              </span>
              <span className="inline-block w-6 h-1 bg-[#BE2423]"></span>
            </div>
            <h1 className="text-4xl font-bold mt-2">What They are Saying</h1>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <div className="relative">
              <Image
                height={1080}
                width={1920}
                src="https://themebuz.com/demo/panthar/assets/img/section-img/testimonial/testimonal-01.png"
                alt="Testimonial"
                className="w-96 h-full rounded-lg shadow-lg"
              />
              <span className="absolute top-4 flex left-4 bg-black text-yellow-300 px-2 py-1 text-sm rounded-full">
                <Star fill="yellow" size={20} />
                <Star fill="yellow" size={20} />
                <Star fill="yellow" size={20} />
                <Star fill="yellow" size={20} />
                <Star fill="yellow" size={20} />
              </span>
              <span className="absolute bottom-4 left-4 bg-gray-900 text-white p-2 rounded-full">
                “
              </span>
            </div>
            <div className="bg-gray-100 p-8 py-10 rounded-lg shadow-md max-w-lg">
              <h3 className="text-xl font-bold">Expert Shooter</h3>
              <p className="mt-2 text-gray-700">
                A testimonial is effectively a review or recommendation from a
                client, letting other people know how your products or services
                benefited them.
              </p>
              <p className="mt-4 text-[#BE2423] font-semibold">Dinash Bilan</p>
              <hr className="my-4 border-gray-300" />
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 mt-10">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-2 pb-2">
                <span className="inline-block w-6 h-1 bg-[#BE2423]"></span>
                <span className="text-[#BE2423] text-xl font-bold">
                  NEWS ROOM
                </span>
                <span className="inline-block w-6 h-1 bg-[#BE2423]"></span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                LATEST BLOG FROM PANTHAR
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <div className="relative">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-[#BE2423] text-white px-3 py-1 text-sm font-bold rounded">
                      {blog.date}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">BY:</span> {blog.author}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
