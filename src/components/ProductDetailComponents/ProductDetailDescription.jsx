import desc from "../../assets/photos/desc.jpg";

export default function ProductDetailDescription() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 text-lg font-semibold text-gray-800">
        <p className="cursor-pointer">Description</p>
        <p className="cursor-pointer">Additional Information</p>
        <p className="cursor-pointer">
          Reviews <span className="font-bold text-green-600">(0)</span>
        </p>
      </div>

      {/* Gray line */}
      <hr className="my-4 border-t-2 border-gray-300" />

      {/* Content section using flex */}
      <div className="flex flex-col md:flex-row md:justify-between md:space-x-6 space-y-6 md:space-y-0">
        {/* Column 1: Photo */}
        <div className="md:w-1/3">
          <img src={desc} alt="Product" className="w-full h-auto" />
        </div>

        {/* Column 2: Text description */}
        <div className="md:w-1/3">
          <h5 className="text-lg font-semibold mb-2">
            the quick fox jumps over
          </h5>
          <p className="text-gray-700 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. Met minim Mollie non desert Alamo est
            sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
        </div>

        {/* Column 3: Bullet-style details */}
        <div className="md:w-1/3">
          <h5 className="text-lg font-semibold mb-2">
            the quick fox jumps over
          </h5>
          <p>&gt; the quick fox jumps over the lazy dog</p>
          <p>&gt; the quick fox jumps over the lazy dog</p>
          <p>&gt; the quick fox jumps over the lazy dog</p>
          <h5 className="text-lg font-semibold mt-4 mb-2">
            the quick fox jumps over
          </h5>
          <p>&gt; the quick fox jumps over the lazy dog</p>
          <p>&gt; the quick fox jumps over the lazy dog</p>
          <p>&gt; the quick fox jumps over the lazy dog</p>
        </div>
      </div>
    </div>
  );
}
