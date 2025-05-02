export default function AboutUsPageContent() {
  return (
    <div className="container p-4 mb-5 font-bold">
      {/* Üst kısım - tam genişlikte paragraf */}
        <p className="text-red-500 text-left ">Problems trying</p>

      {/* Alt kısım - mobilde dikey, ortalanmış; md ve üstü yatay hizalı */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 text-center md:text-left">
        <h2 className="md:flex-1">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h2>
        <p className="md:flex-1 text-left">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>
    </div>
  );
}
