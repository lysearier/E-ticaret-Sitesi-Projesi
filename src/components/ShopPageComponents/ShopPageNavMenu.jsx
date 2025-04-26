export default function ShopPageNavMenu() {
  return (
    <div className="px-6 py-6 text-black flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Shop Başlığı */}
      <h1 className="text-2xl font-semibold text-gray-900 md:text-4xl">Shop</h1>

      {/* Home > Shop Alt Metni */}
      <p className="text-sm text-gray-500 md:text-lg mt-4 md:mt-0">
        Home &gt; Shop
      </p>
    </div>
  );
}
