export default function ProductCard({
  image,
  title,
  subtitle,
  price,
  discountedPrice,
  colors = [],
}) {
  return (
    <div className="w-full sm:w-[45%] lg:w-[22%] border rounded-lg p-4 shadow hover:shadow-lg transition">
      <div className="mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-md"
        />
      </div>
      <div>
        <h5 className="text-sm font-semibold text-gray-700">{title}</h5>
        <p className="text-xs text-gray-500">{subtitle}</p>
        <p className="my-2">
          <span className="text-gray-500 line-through mr-2">${price}</span>
          <span className="text-red-500 font-bold">${discountedPrice}</span>
        </p>
        <div className="flex space-x-2 mt-2">
          {colors.map((color, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
