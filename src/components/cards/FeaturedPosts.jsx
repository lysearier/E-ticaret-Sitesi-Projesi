export default function FeaturedPost({ image, badges, title, description, date, comments }) {
  return (
    <div className="w-full sm:w-[48%] lg:w-[30%] border rounded-lg overflow-hidden shadow hover:shadow-md transition">
      {/* Üstteki Fotoğraf */}
      <div className="h-52 sm:h-60">
        <img
          src={image}
          alt="Featured"
          className="w-full h-full object-cover"
        />
      </div>

      {/* İçerik Alanı */}
      <div className="p-4 flex flex-col justify-between h-full">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-2">
          {badges.map((badge, i) => (
            <p
              key={i}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium"
            >
              {badge}
            </p>
          ))}
        </div>

        {/* Başlık */}
        <h4 className="text-base font-semibold mb-2">{title}</h4>

        {/* Açıklama */}
        <p className="text-sm text-gray-500 mb-4">{description}</p>

        {/* Tarih & Yorum */}
        <div className="flex justify-between text-xs text-gray-400 mb-4">
          <p>{date}</p>
          <p>{comments} comments</p>
        </div>

        {/* Learn More */}
        <div className="mt-auto">
          <h6 className="text-blue-500 text-sm font-semibold hover:underline cursor-pointer">
            Learn More
          </h6>
        </div>
      </div>
    </div>
  );
}
