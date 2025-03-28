import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-center text-white py-12 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Name and Motto */}
          <div>
            <Link
                        href={"/"}
                        className="  relative text-2xl text-white font-bold mb-6 "
                      >
                        ISREA{" "}
                        <span className="bg-yellow-500 p-1 text-white  rounded-tl-lg rounded-br-lg">
                          l
                        </span>{" "}
                        IGHT
                      </Link>
            <p className="text-gray-200 mt-4">
            Crafting Modern Websites with Performance in Mind. A passionate developer dedicated  to collaborate in creating or creating fast, responsive, and visually stunning websites that exceed your expectations.
            </p>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-yellow-500 transition-colors">
                  Back to top
                </Link>
              </li>
              <li>
              <button
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gray-200 hover:text-yellow-500 transition-colors"
            >
              About Us
            </button>
              </li>
              <li>
              <button
              onClick={() => {
                document
                  .getElementById("portfolios")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gray-200 hover:text-yellow-500 transition-colors"
            >
              portfolios
            </button>
              </li>
              <li>
              <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gray-200 hover:text-yellow-500 transition-colors"
            >
              Contact Us
            </button>
              </li>
              <li>
              <button
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gray-200 hover:text-yellow-500 transition-colors"
            >
              Our Services
            </button>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-200 hover:text-yellow-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-200 hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-200 hover:text-yellow-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-200 hover:text-yellow-500 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-yellow-500 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-yellow-500 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-yellow-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-yellow-500 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-yellow-500 mt-8 pt-2 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} Isrealight. All rights reserved.</p>
        </div>
      </div>
    </footer>
        </>
    );
}