import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".navbar", {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      })
        .from(
          ".logo",
          {
            scale: 0,
            rotate: -20,
            duration: 1,
            ease: "elastic.out(1,0.5)",
          },
          "-=0.8"
        )
        .from(
          ".nav-item",
          {
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".quote-btn",
          {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      gsap.to(".navbar", {
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=300",
          scrub: true,
        },
        scale: 0.97,
        y: 8,
        ease: "none",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }) =>
    `nav-item group relative font-medium transition-all duration-300 hover:text-primary hover:-translate-y-1 ${
      isActive ? "text-primary" : "text-gray-800"
    }`;

  return (
    <header
      ref={navRef}
      className="navbar sticky top-3 z-50 mx-auto max-w-[1450px] "
    >
      <div className="flex items-center justify-between px-2 py-1 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-100 shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="logo w-14 h-14 md:w-16 md:h-16 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className={navLinkClass}>
            Home
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </NavLink>

          {/* CTA */}
          <button className="quote-btn group relative overflow-hidden rounded-xl border border-primary px-5 py-2">
            <span className="relative z-10 text-primary transition-colors duration-500 group-hover:text-white">
              Get a Quote
            </span>

            <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden mt-3">
          <div className="bg-white rounded-2xl shadow-xl p-5">
            <ul className="flex flex-col gap-5">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary"
              >
                About
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary"
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-primary"
              >
                Contact
              </NavLink>

              <button className="bg-primary text-white py-3 rounded-xl">
                Get a Quote
              </button>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;