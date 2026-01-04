'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMenuOpen(false);
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-medium transition-all duration-300 hover:shadow-large">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent hover:from-primary-700 hover:via-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Crysol Academy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className="text-text-secondary hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/course"
              className="text-text-secondary hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
            >
              Courses
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about"
              className="text-text-secondary hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/review"
              className="text-text-secondary hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
            >
              Review
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact"
              className="text-text-secondary hover:text-primary-600 transition-all duration-300 font-semibold text-sm relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/register"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Registration</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-secondary hover:text-primary-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 overflow-hidden">
            <div className="min-h-[70vh] flex flex-col items-center justify-center py-12 space-y-6">
              {[
                { href: "/", label: "Home", onClick: handleScrollToTop, isButton: false, isLink: true },
                { href: "/course", label: "Courses", onClick: () => setIsMenuOpen(false), isButton: false, isLink: true },
                { href: "/about", label: "About Us", onClick: () => setIsMenuOpen(false), isButton: false, isLink: true },
                { href: "/review", label: "Review", onClick: () => setIsMenuOpen(false), isButton: false, isLink: true },
                { href: "/contact", label: "Contact Us", onClick: () => setIsMenuOpen(false), isButton: false, isLink: true },
                { href: "/register", label: "Registration", onClick: () => setIsMenuOpen(false), isButton: true, isLink: true }
              ].map((item, index) => (
                <div
                  key={index}
                  className="opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {item.isButton ? (
                    <Link
                      href={item.href}
                      onClick={item.onClick as () => void}
                      className="block px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-bold text-lg text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group min-w-[200px]"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  ) : item.isLink ? (
                    <Link
                      href={item.href}
                      onClick={item.onClick as () => void}
                      className="block text-lg font-semibold text-text-secondary hover:text-primary-600 transition-all duration-300 cursor-pointer py-2 px-4 rounded-lg hover:bg-primary-50 min-w-[150px] text-center"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={item.onClick as (e: React.MouseEvent<HTMLAnchorElement>) => void}
                      className="block text-lg font-semibold text-text-secondary hover:text-primary-600 transition-all duration-300 cursor-pointer py-2 px-4 rounded-lg hover:bg-primary-50 min-w-[150px] text-center"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

