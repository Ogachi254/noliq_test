'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Past Sojourns', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
    ...(isSignedIn ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={`fixed md:relative z-40 h-screen md:h-auto w-64 md:w-auto bg-gray-900 text-white border-r border-gray-700 md:border-none flex flex-col p-6 md:p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Image 
              src="/images/logo.jpg" 
              alt="NolIQ by Wanyinz Logo" 
              width={40} 
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
              NolIQ
            </span>
          </Link>

          {/* Close Button for Mobile */}
          <button
            className="md:hidden p-1 text-white hover:text-amber-400"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex-1 space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block py-3 px-4 rounded-lg transition-all ${
                  pathname === item.path
                    ? 'bg-amber-600 text-white font-semibold'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-amber-400'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Section */}
        <div className="mt-auto pt-4 border-t border-gray-700">
          {isSignedIn ? (
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">Welcome back, {user?.firstName}</p>
              <Link
                href="/sign-out"
                className="block py-2 px-4 text-gray-300 hover:bg-gray-800 hover:text-amber-400 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Sign Out
              </Link>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="block py-3 px-4 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors text-center"
              onClick={closeMenu}
            >
              Sign In
            </Link>
          )}
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={closeMenu}
          role="presentation"
        />
      )}
    </>
  );
}