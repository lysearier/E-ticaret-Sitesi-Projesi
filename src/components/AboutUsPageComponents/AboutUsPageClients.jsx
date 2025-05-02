import Brands from "../Brands";

export default function AboutUsPageClients() {
  return (
    <div className="w-full px-4 sm:px-0 flex flex-col items-center text-center py-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Big Companies Are Here</h2>
      <p className="text-gray-600 mb-6 max-w-xl">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics.
      </p>
      <Brands />
    </div>
  );
}
