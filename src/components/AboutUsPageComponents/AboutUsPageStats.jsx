export default function AboutUsPageStats() {
  const stats = [
    { value: "15k", label: "Happy Customers" },
    { value: "150k", label: "Monthly Visitors" },
    { value: "15", label: "Countries Worldwide" },
    { value: "100+", label: "Top Partners" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-6xl mb-4 font-extrabold">{stat.value}</div>
            <div className="text-gray-600 text-xl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
