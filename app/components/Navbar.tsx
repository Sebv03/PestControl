"use client";
import React, { useState, useEffect } from "react";
import { ShieldCheck, Menu, X, Phone } from "lucide-react";
import Link from "next/link";
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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span
              className={`text-2xl font-black tracking-tighter ${isScrolled ? "text-brand-secondary" : "text-white"
                }`}
            >
              R&B<span className="text-brand-primary">.</span>
            </span>
          </div>

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
              className={`p-2 rounded-lg ${isScrolled ? "text-brand-secondary" : "text-white"
                }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
