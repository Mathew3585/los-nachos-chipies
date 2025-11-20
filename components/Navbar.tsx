'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/wiki', label: 'Wiki' },
    { href: '/about', label: 'À propos' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient Background - Noir en haut, transparent en bas */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Player Counter */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/image/logo/Logo transparence.png"
                  alt="Los Nachos Chipies"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Player Counter Desktop */}
            <div className="hidden md:flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-500/20">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-white font-medium text-sm">142 joueurs</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary-orange transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button - Jouer */}
            <Link
              href="/download"
              className="bg-gradient-to-r from-primary-orange to-primary-orange-dark hover:from-primary-yellow hover:to-primary-orange text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 glow-orange hover:glow-yellow shadow-lg"
            >
              JOUER
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-primary-orange/20">
          <div className="px-4 py-6 space-y-4">
            {/* Player Counter Mobile */}
            <div className="flex items-center justify-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-green-500/20">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-white font-medium text-sm">142 joueurs en ligne</span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white hover:text-primary-orange transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="block text-center bg-gradient-to-r from-primary-orange to-primary-orange-dark hover:from-primary-yellow hover:to-primary-orange text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              JOUER
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
