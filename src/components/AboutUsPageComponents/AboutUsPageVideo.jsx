export default function AboutUsPageVideo() {
  return (
    <div className="px-4 py-8 mx-auto max-w-screen-xl">
      <div className="w-full h-[300px] sm:h-[700px] rounded-xl overflow-hidden shadow-lg mb-12">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="About Us Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
