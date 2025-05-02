import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function TeamPageTrial() {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6 mb-6">
      <h2 className="text-5xl font-bold">Start your 14 days free trial</h2>
      <h6 className="text-gray-600 max-w-md">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </h6>
      <button className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-blue-700">
        Try it free now
      </button>
      <div className="flex gap-6 text-gray-600 mt-2 4">
        <Twitter className="w-5 h-5 cursor-pointer hover:text-sky-400" />
        <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
        <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
        <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-700" />
      </div>
    </div>
  );
}
