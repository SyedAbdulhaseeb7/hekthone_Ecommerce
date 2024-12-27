'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import blog from '@/pages/blog/page';
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    { name: 'Home', path: '/' },
    { name: 'menu', path: '/menu' },
    { name: 'Blog', path: '/blog/page'},
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'signIn', path: '/signin' },
    { name: 'signUp', path: '/signup' },
  ];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Mobile if screen width < 1024px
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="w-full bg-black shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Left: Cart Icon */}
        <ul className="hidden lg:flex items-center space-x-6">
            {/* Desktop Menu */}
            {menus.map((menu) => (
              <li
                key={menu.name}
                className="text-white hover:text-yellow-700 text-sm font-medium"
              >
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        <Link href="/cart">     <button className="relative text-gray-100 hover:text-yellow-700 text-lg">
          <FiShoppingCart />
          {/* Cart Badge */}
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button></Link>
   
        

        {/* Center: Logo */}
        <div className="absolute left-1/2  transform -translate-x-1/2">
          <Link href="/">
            <p className="text-yellow-700 text-xl font-bold">
              Food<span className="text-white">Truck</span>
            </p>
          </Link>
        </div>

        {/* Right: Hamburger Icon */}
        {isMobile ? (
          <button
            className="text-white text-2xl lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        ) : (
          <ul className="hidden items-center space-x-6">
            {/* Desktop Menu */}
            {menus.map((menu) => (
              <li
                key={menu.name}
                className="text-white hover:text-yellow-700 text-sm font-medium"
              >
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Menu: Opens from Bottom */}
      {isMobile && (
        <div
          className={`fixed bottom-0 left-0 w-full h-full bg-black text-white transition-transform duration-500 ease-in-out z-40 ${
            menuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          {/* Logo (Top-Left) */}
          <div className="absolute top-4 left-4">
            <Link href="/">
              <p className="text-yellow-700 text-xl font-bold">
                Food<span className="text-white">Truck</span>
              </p>
            </Link>
          </div>

          {/* Close Icon (Top-Right) */}
          <button
            className="absolute top-4 right-4 text-2xl text-white"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col items-start space-y-1 py-20 px-6">
            {menus.map((menu) => (
              <li
                key={menu.name}
                className="text-2xl tracking-wide font-medium hover:text-yellow-700"
                onClick={() => setMenuOpen(false)}
              >
                <Link href={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>

          {/* Footer inside Slider */}
          <div className="absolute bottom-6 left-6 flex items-center space-x-4">
            {/* Icon on Bottom Left */}
            <Link href="/cart">  <FiShoppingCart className="text-2xl text-white" /></Link>
          
          </div>
          <div className="absolute bottom-6 right-6">
            <p className="text-sm text-gray-400">Created by Haseeb</p>
          </div>
        </div>
      )}
    </nav>
  );
}
