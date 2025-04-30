import ProductCard from "../cards/ProductCard";
import bestseller1 from "../../assets/photos/bestseller1.jpg";
import bestseller2 from "../../assets/photos/bestseller2.jpg";
import bestseller3 from "../../assets/photos/bestseller3.jpg";
import bestseller4 from "../../assets/photos/bestseller4.jpg";
import bestseller5 from "../../assets/photos/bestseller5.jpg";
import bestseller6 from "../../assets/photos/bestseller6.jpg";

const bestsellers = [
  {
    id: 1,
    image: bestseller1,
    title: "Product 1",
    subtitle: "Best quality",
    price: 199.99,
    discountedPrice: 149.99,
    colors: ["#1e40af", "#22c55e"],
  },
  {
    id: 2,
    image: bestseller2,
    title: "Product 2",
    subtitle: "Popular item",
    price: 249.99,
    discountedPrice: 199.99,
    colors: ["#f97316", "#334155"],
  },
  {
    id: 3,
    image: bestseller3,
    title: "Product 3",
    subtitle: "Limited stock",
    price: 99.99,
    discountedPrice: 79.99,
    colors: ["#e11d48", "#6366f1"],
  },
  {
    id: 4,
    image: bestseller4,
    title: "Product 4",
    subtitle: "Best value",
    price: 149.99,
    discountedPrice: 109.99,
    colors: ["#0ea5e9", "#22d3ee"],
  },
  {
    id: 5,
    image: bestseller5,
    title: "Product 5",
    subtitle: "Top rated",
    price: 129.99,
    discountedPrice: 99.99,
    colors: ["#facc15", "#84cc16"],
  },
  {
    id: 6,
    image: bestseller6,
    title: "Product 6",
    subtitle: "Customer favorite",
    price: 89.99,
    discountedPrice: 69.99,
    colors: ["#8b5cf6", "#ec4899"],
  },
];

export default function PorductDetailBestSeller() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">BESTSELLER PRODUCTS</h3>
      </div>
      <hr className="my-4 border-t-2 border-gray-300" />
      <div className="flex flex-wrap gap-3">
        {bestsellers.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
          >
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
