import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">
            LJ
          </a>

          <button
            onClick={toggleMobileMenu}
            className="text-white lg:hidden block"
            aria-label="Toggle Navigation"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        <div
          className={`lg:flex items-center justify-between ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
            <li>
              <Link href="/who/who">
                <a className="hover:text-green-400 transition">About</a>
              </Link>
            </li>
            <li>
              <Link href="/codingwork/codingwork">
                <a className="hover:text-green-400 transition">Web Development Work</a>
              </Link>
            </li>
            <li>
              <Link href="/cv/cv">
                <a className="hover:text-green-400 transition">Other Professional Work</a>
              </Link>
            </li>
            <li>
              <Link href="/contact/contact">
                <a className="hover:text-green-400 transition">Gallery</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
