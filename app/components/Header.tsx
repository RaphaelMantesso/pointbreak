'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-foreground">
              POINT BREAK
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-foreground hover:text-accent transition-colors"
              >
                Hjem
              </Link>
              <Link
                href="/reisebrev"
                className="text-foreground hover:text-accent transition-colors"
              >
                Reisebrev
              </Link>
              <Link
                href="/om-oss"
                className="text-foreground hover:text-accent transition-colors"
              >
                Om Oss
              </Link>
              <Link
                href="/kontakt"
                className="text-foreground hover:text-accent transition-colors"
              >
                Kontakt
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                // Close icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-[73px] right-0 bottom-0 w-64 bg-background z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-6">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="text-lg text-foreground hover:text-accent transition-colors"
          >
            Hjem
          </Link>
          <Link
            href="/reisebrev"
            onClick={closeMobileMenu}
            className="text-lg text-foreground hover:text-accent transition-colors"
          >
            Reisebrev
          </Link>
          <Link
            href="/om-oss"
            onClick={closeMobileMenu}
            className="text-lg text-foreground hover:text-accent transition-colors"
          >
            Om Oss
          </Link>
          <Link
            href="/kontakt"
            onClick={closeMobileMenu}
            className="text-lg text-foreground hover:text-accent transition-colors"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </>
  );
}

