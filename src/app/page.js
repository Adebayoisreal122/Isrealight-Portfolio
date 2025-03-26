"use client";

import { use } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaReact, FaNodeJs, FaAngular, FaLaravel, FaHtml5, FaCss3Alt, FaPhp, FaNode,  FaVuejs } from "react-icons/fa";


export default function Home({params}) {


  const specialization = [
    {
      image: "/Html.png",
      headings: "HTML",
      one: "HTML",
      two: "The backbone of web pages, providing structure and content.",
    },
    {
      image: "/css.png",
      headings: "CSS",
      one: "CSS",
      two: "Enhancing design with styling, responsiveness, and animations.",
    },
    {
      image: "/js.png",
      headings: "JavaScript",
      one: "JavaScript",
      two: "Adding interactivity and dynamic functionality to websites.",
    },
    {
       image: "/react.svg",
      headings: "React",
      one: "React",
      two: "Building fast and scalable user interfaces with component-based architecture.",
    },
    {
       image: "/Angular.svg",
      headings: "Angular",
      one: "Angular",
      two: "A powerful framework for developing dynamic and enterprise-level applications.",
    },
    {
      image: "/vue.svg",
     headings: "Vue",
     one: "Vue",
     two: "A flexible and progressive framework for creating interactive UIs and SPAs.",
   },
    {
       image: "/next.svg",
      headings: "NextJs",
      one: "NextJs",
      two: "A React framework optimized for SEO, server-side rendering, and performance.",
    },
  ];

  const portfolios = [
    {
      image: "/ectreme.png",
      headings: "extreme website",
      link: "https://extreme-tau.vercel.app/",
      one: "HTML",
      two: "Extreme Computers is an online store specializing in selling IT-related products, including laptops, computer hardware, software, keyboards, chips, and other gadgets. It also offers services like system assembly, hardware repairs, operating system installation, virus removal, and technical support. The platform aims to provide a seamless shopping experience with a focus on high-quality tech products and professional IT services.",
    },
    {
      image: "/edufy.png",
      headings: "edufy website",
      link: "https://edufy-frontend-sooty.vercel.app/#/home",
      one: "CSS",
      two: "​Edufy is a comprehensive platform designed to assist students in tracking and celebrating their academic and professional milestones. It offers tools for recording achievements such as job interviews, placements, and applications for advanced studies. The platform provides an intuitive interface for easy navigation, allowing users to input and access their information effortlessly.Enhancing design with styling, responsiveness, and animations.",
    },
    {
      image: "/weather.png",
      headings: "weather App",
      link: "https://weather-app-nu-sooty.vercel.app/",
      one: "JavaScript",
      two: "his is a simple weather application that allows users to check the current weather conditions. It also pulls weather data based on the user's location or a specified city, displaying key information such as temperature, humidity, and also a weather icon to represent current conditions of the location checked. The interface is minimalistic and straightforward, designed for quick and easy access to weather information.",
    },
  ];

  const services = [
    {
      title: "Website Development",
      description: "Custom Websites (Business, Portfolio, Blog, etc.), Responsive & Mobile-Friendly Design.",
    },
    {
      title: "Web App Development",
      description: "Single Page Applications (SPA), FrontEnd Development (React, Vue, Next.js, js, Angular, etc.), API Integration.",
    },
    {
      title: "E-commerce Development",
      description: "Custom Online Stores (Shopify, WooCommerce, Laravel, etc.), Shopping Cart Development.",
    },
    {
      title: "SEO & Performance Optimization",
      description: "Speed Optimization, SEO-Friendly Code, Best Practices for Higher Rankings.",
    },
    {
      title: "Website Maintenance & Support",
      description: "Bug Fixing & Troubleshooting, Security Updates & Upgrades, Ongoing Support & Enhancements.",
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored Web Applications, Custom Software Development, Integration with Existing Systems, Business Automation Solution.",
    },
  ];



  const {message} = use(params);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const naming = formData.get("naming");
    const message = formData.get("message");

    const whatsappMessage = `
      Hello, my name is ${naming}.
       ${message}
    `;

    const whatsappLink = `https://wa.me/2349068918017?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappLink, "_blank");
  };




  
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen w-full">
        {/* Main Section */}
        <div className="flex flex-col gap-2 md:flex-row  items-center p-8 md:p-8 text-white animated-bg">
        
          {/* Text Section */}
          <section className=" w-1/2  text-center md:text-left mb-4 md:mb-0">

            <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
              HELLO! 
            </h2>
            <h3 className="text-4xl md:text-2xl font-bold text-white leading-tight mb-4">
              I AM
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              ADEBAYO ISREAL
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#EFEDE8A6] mb-8">
              A Frontend Website Developer 
            </p>
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 transition-colors">
              Contact Us
            </button>
          </section>

          {/* Images Section */}
          <section className=" w-1/2 flex justify-center items-center mx-auto md:mt-0">
            <img
              src="/hero.svg"
              alt="Isrealight"
              className="w-full md:w-[700px]  rounded-lg  "
            /> 
          </section>
              </div>

        {/* About Section */}
        <section id="about" className="flex flex-wrap justify-center items-center gap-8 p-8 md:p-12 text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-yellow-500 before:to-black relative pb-8">
          <div className="text-center w-full">
            <h2 className="text-yellow-500 text-2xl md:text-4xl font-bold mb-4">About Us</h2>
          </div>
          <div className=" flex flex-col md:flex-row gap-2">
            <div className="text-[#EFEDE8A6] p-2 text-center shadow-lg  rounded-lg text-lg md:text-xl w-1/2"> 
            <img
              src="/Program.svg"
              alt="Isrealight"
              className="w-full md:w-[400px]  rounded-lg  "
            /> 
              </div>
            <div className="text-[#EFEDE8A6] p-2 shadow-lg  rounded-lg text-lg md:text-xl w-1/2">
            <p>
              I am Isreal, a skilled frontend developer specializing in various libraries and frameworks. I build scalable, high-performance web applications with a focus on clean code, security, and seamless user experience. With expertise in API integration, authentication systems, and database management, I deliver efficient and maintainable solutions tailored to business needs.
              </p>
              </div>
          </div>
          <div className="text-center w-full">
            <h2 className="text-yellow-500 text-2xl md:text-4xl font-bold mb-4">Specialized in </h2>
          </div>
          {specialization.map((achievement, index) => (
            <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-yellow-500"
            >
                <img src={achievement.image} alt={achievement.one} style={{ width: "100px", height: "100px" }} />
              <h1 className="text-3xl font-bold text-yellow-500 mb-2">
                {achievement.headings}
              </h1>
              <p className="text-sm">{achievement.two}</p>
            </div>
          ))}
        </section>

        {/* not sure where to start */}

        <section id="services" className="py-8 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-yellow-500 before:to-black relative ">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-semibold text-yellow-500 text-center mb-6">
              Our Services
            </h3>
            <p className="text-lg text-[#EFEDE8A6] text-center mb-8">
These are the previously completed projects, they are created with different frameworks, and libraries. Feel free to check them out!
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center ">
            {services.map((service, index) => (
              <div
                key={index}
                className=" rounded-lg p-6 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-[#EFEDE8A6] text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* explore our portfolios */}

        <section id="portfolios" className="py-16 px-6  text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-yellow-500 before:to-black relative">
          <div className="text-center mx-auto">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Explore our Portfolios!
            </h2>
            <p className="text-lg text-[#EFEDE8A6] leading-relaxed max-w-2xl mx-auto mb-12">
            Explore our previously completed projects, crafted using a variety of frameworks and libraries. Feel free to browse through them!
            </p>
          </div>

          {/* <!-- Cards Section --> */}
          <div className="flex flex-wrap justify-center gap-4"> 
    {portfolios.map((portfolio, index) => (
      <div
        key={index}
        className=" rounded-lg shadow-lg w-full sm:w-[45%]  border border-yellow-500"
      >
        <div>
        <img src={portfolio.image} alt={portfolio.one} className="mb-4"  />
        </div>
        <div className="flex flex-col items-center justify-center px-3">
        <a href={portfolio.link} className="text-3xl font-bold text-yellow-500 hover:text-orange-500 mb-2">
          {portfolio.headings}
        </a>
        <p className="text-sm">{portfolio.two}</p>
        </div>
        <a className="flex underline text-end justify-end p-3" href={portfolio.link}> click here to view site </a>
      </div>
    ))}
  </div>
        </section>

        {/* Why choose us */}

        <section className=" py-12 px-6 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-yellow-500 before:to-black relative">
          {/* Heading and Description */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us ?
            </h2>
            <p className="text-lg text-[#EFEDE8A6] max-w-2xl mx-auto">
            We are passionate about building fast, secure, and user-friendly websites tailored to your needs. With expertise in modern technologies, we ensure high performance, great design, and long-term reliability. Here’s why we stand out:
            </p>
          </div>

          {/* Card Container */}
          <div className="w-full mx-auto">

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-full">
              {/* Card 1 */}
              <div className=" p-6 rounded-lg shadow-lg">
                <h4 className="text-yellow-500 text-xl font-semibold mb-4">
                Custom & Scalable Solutions
                </h4>
                <p className="text-[#EFEDE8A6]">
                ✅ Tailored websites and applications designed for performance and growth.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-lg shadow-lg">
                <h4 className="text-yellow-500 text-xl font-semibold mb-4">
                User-Centric Design
                </h4>
                <p className="text-[#EFEDE8A6]">
                ✅ Creating intuitive, responsive, and visually appealing websites.
                </p>
              </div>

              {/* Card 3 */}
              <div className=" p-6 rounded-lg shadow-lg">
                <h4 className="text-yellow-500 text-xl font-semibold mb-4">
                Ongoing Support & Maintenance
                </h4>
                <p className="text-[#EFEDE8A6]">
                ✅ Ensuring websites stay updated, secure, and bug-free.
                </p>
              </div>

              {/* Card 4 */}
              <div className=" p-6 rounded-lg shadow-lg">
                <h4 className="text-yellow-500 text-xl font-semibold mb-4">
                Transparent & Affordable Pricing
                </h4>
                <p className="text-[#EFEDE8A6]">
                ✅ No hidden fees, clear pricing, and value-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  */}
{/* 
        <section className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12  text-white">
          <div className="w-full md:w-1/2 flex justify-start md:justify-end mb-8 md:mb-0">
            <Image
              src="/home_pic.png"
              alt="lady"
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get more with low-cost training programs and advanced features
            </h2>
            <p className="text-[#EFEDE8A6] text-lg mb-8">
              We believe fitness should be accessible to everyone, everywhere,
              regardless of income or access to a gym. With hundreds of
              professional workouts, healthy recipes, and informative articles,
              as well as one of the most positive communities on the web, you’ll
              have everything you need to reach your personal fitness goals –
              for free!
            </p>
            <a
              href="#"
              className="inline-block bg-[#EC7807] text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#ec7907d5] transition-colors"
            >
              See more
            </a>
          </div>
        </section> */}

        
        {/* Contact Us*/}

        <section id="contact">
          <div className="max-w-7xl mx-auto px-6 py-12 rounded-xl shadow-lg mt-4 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-yellow-500 before:to-black relative  ">
            <h2 className="text-4xl font-semibold text-white text-center mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-white text-center mb-2">contact us via</p>
            <ul className="text-lg text-white text-center mb-8">
              <li>Whatsapp:  +234 906 891 8017</li>
              <li>Email: adebayooluwaferanmi112@gmail.com</li>
            </ul>
            <p className="text-lg text-white text-center mb-2">OR</p>
            <p className="text-lg text-white text-center mb-8">
              Send your message, feed back, or request here. 
            </p>
            <form  onSubmit={handleSubmit}
             className="flex flex-col md:flex-row gap-2 max-w-6xl mx-auto">
            <input
                type="text"
                placeholder="Type your name here"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg w-full"
                name="naming"
              />

             <input
                type="text"
                placeholder="Type your message here"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg w-full"
                name="message"
              />
              <button type="submit"
               className="bg-[#EC7807] text-black px-24  py-2 rounded-lg font-semibold hover:bg-[#ec7907d5] transition-colors">
                Send 
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
