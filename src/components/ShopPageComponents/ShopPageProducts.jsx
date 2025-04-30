import ProductCard from "../cards/ProductCard";
import { useState, useEffect } from "react";
import { LayoutGrid, List } from "lucide-react";
import { Link } from "react-router-dom";

import model1 from "../../assets/photos/model1.jpg";
import model2 from "../../assets/photos/model2.jpg";
import model3 from "../../assets/photos/model3.jpg";
import model4 from "../../assets/photos/model4.jpg";
import model5 from "../../assets/photos/model5.jpg";
import model6 from "../../assets/photos/model6.jpg";
import model7 from "../../assets/photos/model7.jpg";
import model8 from "../../assets/photos/model8.jpg";

const productData = [
  {
    id: 1,
    image: model1,
    title: "Graphic Design",
    subtitle: "English Department",
    price: 16.48,
    discountedPrice: 6.48,
    colors: ["#3B82F6", "#10B981", "#F97316", "#1E3A8A"],
  },
  {
    id: 2,
    image: model2,
    title: "UX Research",
    subtitle: "Psychology",
    price: 22.99,
    discountedPrice: 12.99,
    colors: ["#DC2626", "#9333EA", "#3B82F6"],
  },
  {
    id: 3,
    image: model3,
    title: "Web Development",
    subtitle: "Engineering",
    price: 18.99,
    discountedPrice: 9.49,
    colors: ["#16A34A", "#FACC15"],
  },
  {
    id: 4,
    image: model4,
    title: "Illustration",
    subtitle: "Fine Arts",
    price: 20.0,
    discountedPrice: 10.0,
    colors: ["#E11D48", "#7C3AED"],
  },
  {
    id: 5,
    image: model5,
    title: "Digital Marketing",
    subtitle: "Business",
    price: 25.5,
    discountedPrice: 15.99,
    colors: ["#0EA5E9", "#D97706"],
  },
  {
    id: 6,
    image: model6,
    title: "Photography",
    subtitle: "Media",
    price: 30.0,
    discountedPrice: 21.99,
    colors: ["#4B5563", "#F59E0B", "#8B5CF6"],
  },
  {
    id: 7,
    image: model7,
    title: "Animation",
    subtitle: "Film School",
    price: 19.5,
    discountedPrice: 13.5,
    colors: ["#F43F5E", "#10B981", "#6366F1"],
  },
  {
    id: 8,
    image: model8,
    title: "Game Design",
    subtitle: "Computer Science",
    price: 40.0,
    discountedPrice: 29.99,
    colors: ["#6D28D9", "#DC2626", "#14B8A6"],
  },
];

const PRODUCTS_PER_PAGE_GRID = 12;
const PRODUCTS_PER_PAGE_LIST = 4;
const PRODUCTS_PER_PAGE_MOBILE = 4;

export default function ShopPageProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOrder, setSortOrder] = useState("");
  const [products, setProducts] = useState(productData);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const nowMobile = window.innerWidth < 768;
      if (nowMobile !== isMobile) {
        setIsMobile(nowMobile);
        setViewMode("grid");
        setCurrentPage(1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const PRODUCTS_PER_PAGE = isMobile
    ? PRODUCTS_PER_PAGE_MOBILE
    : viewMode === "grid"
    ? PRODUCTS_PER_PAGE_GRID
    : PRODUCTS_PER_PAGE_LIST;

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const applyFilter = () => {
    let sortedProducts = [...productData];

    if (sortOrder === "price-asc") {
      sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortOrder === "price-desc") {
      sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }

    setProducts(sortedProducts);
    setCurrentPage(1);
  };

  const emptyCards = Array.from({
    length: PRODUCTS_PER_PAGE - currentProducts.length,
  });

  return (
    <div className="flex flex-col items-center p-4 min-h-screen">
      {/* Üst Panel */}
      <div className="flex flex-wrap items-center justify-between w-full mb-6">
        <div className="text-sm font-semibold">
          Showing all {products.length} results
        </div>

        {/* View Buttons sadece desktopta */}
        <div className="hidden md:flex items-center gap-2">
          <span className="text-sm font-semibold">Views:</span>
          <button
            onClick={() => {
              setViewMode("grid");
              setCurrentPage(1);
            }}
            className={`border p-2 rounded ${
              viewMode === "grid" ? "bg-gray-200" : ""
            }`}
          >
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => {
              setViewMode("list");
              setCurrentPage(1);
            }}
            className={`border p-2 rounded ${
              viewMode === "list" ? "bg-gray-200" : ""
            }`}
          >
            <List size={18} />
          </button>
        </div>

        {/* Sort & Filter */}
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <select
            onChange={(e) => handleSortChange(e.target.value)}
            className="border rounded p-2 text-sm"
          >
            <option value="">Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <button
            onClick={applyFilter}
            className="bg-blue-400 hover:bg-blue-500 text-white rounded px-4 py-2 text-sm"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Ürünler */}
      <div
        className={`w-full ${
          viewMode === "grid"
            ? "flex flex-wrap justify-center items-center gap-6 min-h-[600px]"
            : "flex flex-col gap-6"
        }`}
      >
        {currentProducts.map((item, i) =>
          viewMode === "grid" ? (
            <ProductCard key={i} {...item} />
          ) : (
            <Link
              to={`/product/${item.id}`}
              key={i}
              className="flex flex-col sm:flex-row border rounded-lg overflow-hidden hover:shadow cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-48 h-48 object-cover"
              />
              <div className="flex flex-col justify-between p-4 w-full">
                <div>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-gray-500">{item.subtitle}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {item.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-gray-400 line-through">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="text-blue-600 font-bold">
                    ${item.discountedPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </Link>
          )
        )}

        {/* Boş kartlar (grid hizalama için) */}
        {viewMode === "grid" &&
          emptyCards.map((_, i) => (
            <div
              key={`empty-${i}`}
              className="hidden sm:block w-full sm:w-[45%] lg:w-[22%] p-4"
            >
              <div className="w-full h-full opacity-0 pointer-events-none">
                <ProductCard
                  image=""
                  title=""
                  subtitle=""
                  price={0}
                  discountedPrice={0}
                  colors={[]}
                />
              </div>
            </div>
          ))}
      </div>

      {/* Sayfalama */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:bg-gray-200"
        >
          First
        </button>

        {Array.from({ length: totalPages || 1 }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-400 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}
