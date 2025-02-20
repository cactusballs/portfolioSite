import React, { useState } from 'react';
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-md">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          LJ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/who" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/codingwork" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Web Development Work
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/cv" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Other Professional Work
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
