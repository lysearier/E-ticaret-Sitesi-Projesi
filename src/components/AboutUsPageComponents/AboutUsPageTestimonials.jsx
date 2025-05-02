import aboutend from "../../assets/photos/aboutend.png";

export default function AboutUsPageTestimonials() {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Sol taraf: Yazılar */}
      <div className="bg-[#2A7CC7] text-white flex justify-center items-center lg:items-start lg:justify-center px-6 py-12 lg:w-[65%] h-[500px] lg:h-auto">
        <div className="flex flex-col items-center lg:items-start lg:text-left lg:pt-52">
          <h5 className="text-sm mb-2">WORK WITH US</h5>
          <h2 className="text-2xl font-bold mb-4">Now Let’s grow Yours</h2>
          <p className="mb-6 max-w-md">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button className="bg-[#2A7CC7] text-white b font-semibold px-6 py-2 rounded border-1 border-white">
            Button
          </button>
        </div>
      </div>

      {/* Sağ taraf: Görsel */}
      <div className="hidden lg:block lg:w-[35%]">
        <img
          src={aboutend}
          alt="About Us"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
