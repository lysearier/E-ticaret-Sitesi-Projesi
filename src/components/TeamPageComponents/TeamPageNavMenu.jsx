export default function TeamPageNavMenu() {
  return (
    <div className="px-6 py-6 text-black flex flex-col items-center md:justify-between mt-3">
      {/* Team Başlığı */}
      <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl">Shop</h2>
      <h5 className="text-2xl font-semibold text-gray-900 md:text-6xl mt-3">
        Innovation tailored for you
      </h5>

      {/* Home > Team Alt Metni */}
      <p className="text-sm text-gray-500 md:text-lg mt-4 md:mt-0">
        Home &gt; Team
      </p>
    </div>
  );
}
