import ShopPageImg1 from "../../assets/photos/ShopPageImg1.png";
import ShopPageImg2 from "../../assets/photos/ShopPageImg2.png";
import ShopPageImg3 from "../../assets/photos/ShopPageImg3.png";
import ShopPageImg4 from "../../assets/photos/ShopPageImg4.png";
import ShopPageImg5 from "../../assets/photos/ShopPageImg5.png";

const cards = [
  {
    image: ShopPageImg1,
    title: "CLOTHES",
    items: 5,
  },
  {
    image: ShopPageImg2,
    title: "SHOES",
    items: 8,
  },
  {
    image: ShopPageImg3,
    title: "ACCESSORIES",
    items: 4,
  },
  {
    image: ShopPageImg4,
    title: "BAGS",
    items: 3,
  },
  {
    image: ShopPageImg5,
    title: "SALE",
    items: 10,
  },
];

export default function ShopPageCategory() {
  return (
    <section className="flex flex-wrap gap-4 justify-center items-center py-6 bg-[#FAFAFA]">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-md"
        >
          {/* Resim */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />

          {/* Metinler */}
          <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center text-white">
            <h6 className="text-xl font-bold tracking-wide">{card.title}</h6>
            <h6 className="font-medium">{card.items} Items</h6>
          </div>
        </div>
      ))}
    </section>
  );
}
