import React, { useState } from "react";
import { Menu, User, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function CtaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden relative top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">Bandage</h1>
          <div className="flex items-center gap-4 text-gray-800">
            <User className="w-5 h-5" />
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="flex flex-col items-center gap-6 py-8 text-xl text-gray-600 font-medium">
            <Link
              to="/"
              className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
            >
              Shop
            </Link>
            <Link
              to="/team"
              className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>
        )}
      </header>

      {/* Desktop Header */}
      <div className="hidden lg:flex flex-col w-full relative top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-200 gap-4 md:gap-0">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-8">
            <h1>Bandage</h1>
            <div className="flex flex-row gap-6">
              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Shop
              </Link>
              <Link
                to="/team"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Team
              </Link>
              <Link to="/contact" className="text-sm font-bold text-gray-900">
                Contact
              </Link>
            </div>
          </div>

          {/* Login and Membership Buttons */}
          <div className="flex items-center gap-4">
            <a href="/login" className="text-sm text-blue-500 font-semibold">
              Login
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-600 transition-colors">
              Become a member
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
