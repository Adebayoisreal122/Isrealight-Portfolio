"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-black text-yellow-500 shadow-lg before:absolute before:bottom-0 before:left-0 before:w-full before:h-[4px] before:bg-gradient-to-r before:from-black before:via-yellow-500 before:to-black relative">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo with Link to Homepage */}
          <Link
            href={"/"}
            className=" mx-12 relative text-2xl text-white font-bold mb-4 "
          >
            ISREA{" "}
            <span className="bg-yellow-500 p-1 text-white  rounded-tl-lg rounded-br-lg">
              l
            </span>{" "}
            IGHT
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Links on the Right */}
          <div
            className={`md:flex md:space-x-6 md:items-center ${
              isMenuOpen ? "block" : "hidden"
            } absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent z-10`}
          >
            <Link
              href="/"
              className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
            >
              Home
            </Link>
            <button
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
            >
              About Us
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("portfolios")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
            >
              Portfolios
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
            >
              Our Services
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="block md:inline-block px-6 py-2 rounded-lg transition hover:text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
