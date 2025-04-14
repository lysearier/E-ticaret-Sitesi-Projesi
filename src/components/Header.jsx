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
  Youtube,
  Menu,
} from "lucide-react";

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
      {/* Desktop */}
      <div className="hidden lg:flex flex-col w-full fixed top-0 left-0 right-0 z-50">
        {/* Üst Bilgi Barı */}
        <div className="bg-gray-900 text-white text-2xl px-12 py-4 flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="text-center">
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us : </span>
            <Instagram className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
          </div>
        </div>

        {/* Ana Navbar */}
        <div className="flex items-center justify-between px-12 py-6 w-full bg-white shadow-md">
          {/* Sol taraf: Logo ve Menü */}
          <div className="flex items-center gap-48">
            <h1 className="text-2xl font-bold">Bandage</h1>
            <nav className="flex gap-6 text-gray-600 text-2xl font-medium">
              <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                  Shop <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 top-8 bg-white shadow-lg border rounded-md p-6 hidden group-hover:flex gap-16 z-50">
                  {shopData.map((section) => (
                    <div key={section.title}>
                      <h4 className="font-semibold mb-2">{section.title}</h4>
                      <ul className="space-y-1 text-2xl text-gray-600 font-medium">
                        {section.items.map((item) => (
                          <li key={item}>
                            <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
              <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">Pages</a>
            </nav>
          </div>

          {/* Sağ taraf: İkonlar */}
          <div className="flex items-center gap-14 text-gray-700 text-2xl">
            <div className="flex items-center gap-1 text-gray-600 font-semibold">
              <User className="w-6 h-6" />
              <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">
                Login / Register
              </a>
            </div>
            <Search className="w-6 h-6" />
            <ShoppingCart className="w-6 h-6" />
            <Heart className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <header className="lg:hidden">
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
            <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">Product</a>
            <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="no-underline text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        )}
      </header>
    </>
  );
}
