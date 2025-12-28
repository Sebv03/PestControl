"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "../context/ModalContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openContact } = useModal();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Servicios", href: "#services" },
    { name: "Proceso", href: "#process" },
    { name: "Nosotros", href: "#about" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src={isScrolled || isMobileMenuOpen ? "/logo-rojo.png" : "/logo.png"}
                alt="Pest Control Logo"
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide hover:text-brand-primary transition-colors ${isScrolled ? "text-gray-700" : "text-gray-200"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Contact Button triggers Modal now */}
            <button
              onClick={openContact}
              className="bg-brand-primary hover:bg-brand-primary-dark text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Servicio de Emergencia</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled || isMobileMenuOpen ? "text-brand-primary" : "text-white"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-brand-primary" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden mt-4 pb-4 border-t border-gray-200"
            style={{ animation: 'slideDown 0.3s ease forwards' }}
          >
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-bold uppercase tracking-wide hover:text-brand-primary transition-colors px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openContact();
                }}
                className="bg-brand-primary hover:bg-brand-primary-dark text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>Servicio de Emergencia</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
