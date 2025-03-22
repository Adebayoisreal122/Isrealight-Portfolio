"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaReact, FaNodeJs, FaAngular, FaLaravel, FaHtml5, FaCss3Alt, FaPhp, FaNode,  FaVuejs } from "react-icons/fa";


export default function Home() {


  const specialization = [
    {
      headings: "500+",
      one: "Happy Members",
      two: "Our community is growing fast",
    },
    {
      headings: "5+",
      one: "Year Experience",
      two: "Experience in various workouts",
    },
    {
      headings: "13+",
      one: "Certified Trainers",
      two: "Guidance at every step.",
    },
    {
      headings: "90%",
      one: "Customer Satisfaction",
      two: "We ensure your progress satisfaction",
    },
  ];

  const programs = [
    {
      title: "Workout Videos",
      description: "Access tohundreds of free, full-length workout videos.",
    },
    {
      title: "Workout Programs",
      description: "Affordable and effective workout progams.",
    },
    {
      title: "Meal Plans",
      description: "Plns built with registered dietitions and nutritionist.",
    },
    {
      title: "YANYAN ALL ACCESS",
      description: "Add powerful features toyour membership.",
    },
  ];



  
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
              A Website Developer 
            </p>
            <button className="bg-[#EC7807] text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#ec7907d5] transition-colors">
              Contact Us
            </button>
          </section>

          {/* Images Section */}
          <section className=" w-1/2 flex justify-center items-center mx-auto md:mt-0">
            <img
              src="/home_pic.png"
              alt="Isrealight"
              className="w-full md:w-[300px]  rounded-lg  "
            /> 
          </section>
              </div>

        {/* About Section */}
        <section className="flex flex-wrap justify-center items-center gap-8 p-8 md:p-12 text-white border-b-2 border-[#EC7807] pb-8">
          <div className="text-center w-full">
            <h2 className="text-yellow-500 text-2xl md:text-4xl font-bold mb-4">About Us</h2>
          </div>
          <div className=" flex flex-col md:flex-row gap-2">
            <div className="text-[#EFEDE8A6] p-2 text-center shadow-lg border border-[#EC7807] rounded-lg text-lg md:text-xl w-1/2"> <p>
              I am Isreal, a skilled full-stack developer specializing in Angular, React, Laravel, and Node.js. I build scalable, high-performance web applications with a focus on clean code, security, and seamless user experience. With expertise in API integration, authentication systems, and database management, I deliver efficient and maintainable solutions tailored to business needs.
              </p>
              </div>
            <div className="text-[#EFEDE8A6] p-2 shadow-lg border border-[#EC7807] rounded-lg text-lg md:text-xl w-1/2"><p>
              I am Isreal, a skilled full-stack developer specializing in Angular, React, Laravel, and Node.js. I build scalable, high-performance web applications with a focus on clean code, security, and seamless user experience. With expertise in API integration, authentication systems, and database management, I deliver efficient and maintainable solutions tailored to business needs.
              </p>
              </div>
          </div>
          <div className="text-center w-full">
            <h2 className="text-yellow-500 text-2xl md:text-4xl font-bold mb-4">Specialized in </h2>
          </div>


          <div style={{ display: "flex", gap: "20px", fontSize: "50px" }}>
     
      <FaReact color="#61DAFB" title="React" />
      <FaNodeJs color="#339933" title="Node.js" />
      <FaAngular color="#C3002F" title="Angular" />
      <FaLaravel color="#FF2D20" title="Laravel" />
      <FaHtml5 color="#E34F26" title="HTML5" />
      <FaCss3Alt color="#1572B6" title="CSS3" />
      <FaNode color="#7952B3" title="Bootstrap" />
      <FaVuejs color="#339933" title="Github" />
      <FaPhp color="#2496ED" title="Docker" />

    </div>
          {specialization.map((achievement, index) => (
            <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg w-full sm:w-[45%] lg:w-[22%] border border-[#EC7807]"
            >
              <h1 className="text-3xl font-bold text-[#EC7807] mb-2">
                {achievement.headings}
              </h1>
              <p className="text-sm mb-2">{achievement.one}</p>
              <p className="text-sm">{achievement.two}</p>
            </div>
          ))}
        </section>

        {/* not sure where to start */}

        <section class="py-8 ">
          <div class="max-w-7xl mx-auto px-6">
            <h3 class="text-3xl font-semibold text-white text-center mb-6">
              Services
            </h3>
            <p class="text-lg text-[#EFEDE8A6] text-center mb-8">
              Programs offer day-to-day guidance on an interactive calendar to
              keep you on track.
            </p>
          </div>

          <div class="flex flex-wrap gap-3 justify-center ">
            {programs.map((program, index) => (
              <div
                key={index}
                className=" rounded-lg p-6 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {program.title}
                </h3>
                <p className="text-[#EFEDE8A6] text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* explore our package */}

        <section class="py-16 px-6  text-white">
          <div className="text-center mx-auto">
            <h2 className="text-4xl font-semibold text-white mb-6">
              Explore our Projects!
            </h2>
            <p className="text-lg text-[#EFEDE8A6] leading-relaxed max-w-2xl mx-auto mb-12">
              Discover customized packages that include personalized training
              and wellness services. Enhance your well-being with our carefully
              curated programs for long-term results.
            </p>
          </div>

          {/* <!-- Cards Section --> */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Card 1 --> */}
            <div class="p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#EC7807]">
              <h4 class="text-xl font-semibold text-[#EC7807] mb-4">
                Join for Free
              </h4>
              <p class="text-lg text-[#EFEDE8A6] mb-6">
                Reach your fitness goals or maintain your healthy lifestyle with
                professional training and support from a positive and active
                online community.
              </p>
              <ul class="list-disc pl-6 text-white space-y-2">
                <li>600 Full-Length Workout Video</li>
                <li>Customizable Calendar</li>
                <li>Health Recipes</li>
                <li>Health and Fitness Articles</li>
                <li>Positive and Supportive Online Community</li>
                <li>No Credit Card Needed</li>
              </ul>
            </div>

            {/* <!-- Card 2 --> */}
            <div class=" p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#EC7807]">
              <h4 class="text-xl font-semibold text-[#EC7807] mb-4">Advance</h4>
              <p class="text-lg text-[#EFEDE8A6] mb-6">
                Yanyan Plus includes everything you get with a free membership
                and adds brand new convenience features, fitness tools, and
                unique content.
              </p>
              <ul class="list-disc pl-6 text-white space-y-2">
                <li>Ads-Free Website and Videos</li>
                <li>Surprise Me Workout Selection Tool</li>
                <li>Statistics for Your Activities</li>
                <li>Enter and Track Custom Workouts</li>
                <li>FB Plus Exclusive Workouts</li>
                <li>Trackers to See Your Progress</li>
                <li>FBI Plus Content and Challenges</li>
                <li>Video Tags</li>
                <li>FB Plus Routines</li>
                <li>Rest Day Complete</li>
              </ul>
            </div>

            {/* <!-- Card 3 --> */}
            <div className=" p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#EC7807]">
              <h4 className="text-xl font-semibold text-[#EC7807] mb-4">
                Professional
              </h4>
              <p className="text-lg text-[#EFEDE8A6] mb-6">
                Yanyan Plus includes everything you get with a free membership
                and adds brand new convenience features, fitness tools, and
                unique content.
              </p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Ads-Free Website and Videos</li>
                <li>Surprise Me Workout Selection Tool</li>
                <li>Statistics for Your Activities</li>
                <li>Enter and Track Custom Workouts</li>
                <li>FB Plus Exclusive Workouts</li>
                <li>Trackers to See Your Progress</li>
                <li>FBI Plus Content and Challenges</li>
                <li>Video Tags</li>
                <li>FB Plus Routines</li>
                <li>Rest Day Complete</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why choose us */}

        <section className=" py-12 px-6">
          {/* Heading and Description */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-[#EFEDE8A6] max-w-2xl mx-auto">
              Built-in tools for tracking workouts, nutrition, and fitness
              progress to keep users motivated and accountable.
            </p>
          </div>

          {/* Card Container */}
          <div className="flex flex-col lg:flex-row gap-1 max-w-6xl mx-auto">
            {/* Left Side - Images */}
            <div className="flex flex-col lg:flex-row gap-4 lg:w-1/2">
              {/* Side 1 */}
              <div className="flex flex-col gap-4">
                <Image
                  src="/plank.png"
                  alt="lady"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/stretch.png"
                  alt="lady"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* Side 2 */}
              <div>
                <Image
                  src="/equip.png"
                  alt="lady"
                  width={200}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-1/2">
              {/* Card 1 */}
              <div className=" p-6 rounded-lg shadow-lg">
                <h4 className="text-[#EC7807] text-xl font-semibold mb-4">
                  Trainer Qualifications
                </h4>
                <p className="text-[#EFEDE8A6]">
                  Years of practical experience in personal training or
                  coaching, including work with diverse populations and specific
                  fitness goals.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-lg shadow-lg">
                <h4 className="text-[#EC7807] text-xl font-semibold mb-4">
                  Trainer Qualifications
                </h4>
                <p className="text-[#EFEDE8A6]">
                  Years of practical experience in personal training or
                  coaching, including work with diverse populations and specific
                  fitness goals.
                </p>
              </div>

              {/* Card 3 */}
              <div className=" p-6 rounded-lg shadow-lg">
                <h4 className="text-[#EC7807] text-xl font-semibold mb-4">
                  Trainer Qualifications
                </h4>
                <p className="text-[#EFEDE8A6]">
                  Years of practical experience in personal training or
                  coaching, including work with diverse populations and specific
                  fitness goals.
                </p>
              </div>

              {/* Card 4 */}
              <div className=" p-6 rounded-lg shadow-lg">
                <h4 className="text-[#EC7807] text-xl font-semibold mb-4">
                  Trainer Qualifications
                </h4>
                <p className="text-[#EFEDE8A6]">
                  Years of practical experience in personal training or
                  coaching, including work with diverse populations and specific
                  fitness goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  */}

        <section className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12  text-white">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-start md:justify-end mb-8 md:mb-0">
            <Image
              src="/dunk.png"
              alt="lady"
              width={400} // Increased image size
              height={400} // Increased image size
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text and Button Section */}
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
        </section>

        {/*  */}

        <section className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12  text-white">
          {/* Text and Button Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work out at home for free
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

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/squat.png"
              alt="lady"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Contact Us*/}

        <section>
          <div className="max-w-7xl mx-auto px-6 py-12 border-2 rounded-xl shadow-lg my-4 border-[#EC7807]  ">
            <h2 className="text-4xl font-semibold text-white text-center mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-[#EFEDE8A6] text-center mb-8">
              Send your message, feed back, or you can contact us via whatsApp
            </p>
            <form className="flex flex-col md:flex-row gap-2 max-w-6xl mx-auto">
              <input
                type="email"
                placeholder="Type your message here"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg w-full"
              />
              <button className="bg-[#EC7807] text-black px-24  py-2 rounded-lg font-semibold hover:bg-[#ec7907d5] transition-colors">
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
