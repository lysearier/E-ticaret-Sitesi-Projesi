import Hero from "../../assets/photos/aboutHeroImg.png";

export default function AboutUsPageHero() {
  return (
    <section className="container my-16">
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row gap-16 h-[700px] lg:h-[500px]">
        {/* Sol içerik - mobile ortalı, web sola hizalı ve dikey ortalı */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:items-start lg:text-left gap-4">
          <h4 className="text-sm text-gray-500 font-semibold uppercase">
            About company
          </h4>
          <h2 className="text-3xl font-bold text-gray-900">About us</h2>
          <h4 className="text-gray-600 text-left font-normal">
            We know how large objects will act, but things on a small scale.
          </h4>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
            Get Quote Now
          </button>
        </div>

        {/* Sağ görsel */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="bg-rose-200 w-72 h-72 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] rounded-full relative">
            <div className="bg-rose-200 w-12 h-12 rounded-full"></div>
            <img
              className="absolute -bottom-10 h-[450px] lg:h-[550px] object-cover"
              src={Hero}
              alt="About Page Hero Img"
            />
            <div className="w-8 h-8 bg-rose-200 rounded-full absolute -right-10 bottom-1/2 translate-y-1/2"></div>
            <div className="w-4 h-4 bg-violet-400 rounded-full absolute right-0"></div>
            <div className="w-4 h-4 bg-violet-400 rounded-full absolute left-0 bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
