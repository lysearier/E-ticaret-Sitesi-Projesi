import image from '../assets/photos/image.png';

export default function ProductContainer() {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full h-screen'>
      {/* Sol: Görsel */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src={image}
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Sağ: Yazılar */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8">
        <h5 className="text-sm tracking-wide mb-8 font-bold text-gray-400">
          SUMMER 2020
        </h5>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Part of the <br /> Neural <br /> Universe
        </h1>
        <h4 className="my-2 text-gray-400 font-semibold">
          We know how large
          <br /> objects will act, but
          <br /> things on a small scale.
        </h4>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <button className="bg-blue-400 text-white font-bold px-6 py-3 text-lg rounded">
            BUY NOW
          </button>
          <button className="border-blue-400 border-2 text-blue-400 font-bold px-6 py-3 text-lg rounded">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
}
