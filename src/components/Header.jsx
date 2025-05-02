import { useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  User,
  Search,
  ShoppingCart,
  Heart,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";

const shopData = [
  {
    title: "Kadın",
    items: ["Bags", "Belts", "Cosmetics", "Hats"],
  },
  {
    title: "Erkek",
    items: ["Bags", "Belts", "Cosmetics", "Hats"],
  },
];

export default function Header() {
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
            <a
              href="/contact"
              className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="/team"
              className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
            >
              Team
            </a>
          </nav>
        )}
      </header>

      {/* Desktop Header */}
      <div className="hidden lg:flex flex-col w-full relative top-0 left-0 right-0 z-50 bg-white shadow-md">
        {/* Üst Bilgi Barı */}
        <div className="bg-gray-900 text-white text-sm md:text-base px-6 md:px-12 py-4 flex flex-wrap justify-between items-center gap-y-2 w-full">
          {/* Sol: Telefon ve Mail */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-1 hidden sm:flex">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">
                michelle.rivera@example.com
              </span>
            </div>
          </div>

          {/* Orta: Duyuru */}
          <div className="text-center w-full sm:w-auto">
            <span className="hidden sm:inline">
              Follow Us and get a chance to win 80% off
            </span>
          </div>

          {/* Sağ: Sosyal Medya */}
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden sm:inline">Follow Us:</span>
            <Instagram className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
          </div>
        </div>

        {/* Ana Navbar */}
        <div className="flex items-center justify-between px-6 md:px-12 py-6 w-full">
          {/* Sol: Logo ve Menü */}
          <div className="flex items-center gap-24 xl:gap-48">
            <h1 className="text-2xl font-bold">Bandage</h1>
            <nav className="flex gap-4 xl:gap-6 text-gray-600 text-base xl:text-2xl font-medium">
              <Link
                to="/"
                className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
              >
                Home
              </Link>

              <div className="relative group">
                <Link
                  to="/shop"
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Shop <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute left-0 top-8 bg-white shadow-lg border rounded-md p-6 hidden group-hover:flex gap-16 z-50">
                  {shopData.map((section) => (
                    <div key={section.title}>
                      <h4 className="font-semibold mb-2">{section.title}</h4>
                      <ul className="space-y-1 text-base xl:text-2xl text-gray-600 font-medium">
                        {section.items.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="/about"
                className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
              <a
                href="/team"
                className="no-underline text-gray-600 hover:text-gray-900 transition-colors"
              >
                Team
              </a>
            </nav>
          </div>

          {/* Sağ: İkonlar */}
          <div className="flex items-center gap-4 xl:gap-14 text-gray-700 text-base xl:text-2xl">
            <div className="flex items-center gap-1 text-gray-600 font-semibold">
              <User className="w-6 h-6" />
              <a
                href="#"
                className="no-underline text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base xl:text-2xl"
              >
                Login
              </a>
              <span className="hidden sm:inline">/</span>
              <a
                href="#"
                className="no-underline text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base xl:text-2xl"
              >
                Register
              </a>
            </div>
            <Search className="w-6 h-6" />
            <ShoppingCart className="w-6 h-6" />
            <Heart className="w-6 h-6" />
          </div>
        </div>
      </div>
    </>
  );
}
