import clients1 from "../assets/photos/clients1.svg";
import clients2 from "../assets/photos/clients2.svg";
import clients3 from "../assets/photos/clients3.svg";
import clients4 from "../assets/photos/clients4.svg";
import clients5 from "../assets/photos/clients5.svg";
import clients6 from "../assets/photos/clients6.svg";

const clients = [
  { imageURL: clients1 },
  { imageURL: clients2 },
  { imageURL: clients3 },
  { imageURL: clients4 },
  { imageURL: clients5 },
  { imageURL: clients6 },
];

export default function Clients() {
  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="flex flex-wrap justify-evenly items-center">
        {clients.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex justify-center items-center px-8 py-4"
          >
            <img
              src={item.imageURL}
              alt={`Client ${index + 1}`}
              className="w-full max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
