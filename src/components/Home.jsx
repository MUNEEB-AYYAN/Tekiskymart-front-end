export default function Categories() {
  const categories = [
    { name: "GIFT-ITEMS", image: "/jwelery.jpg" },
    { name: "DATES", image: "/dates.jpg" },
    { name: "PERFUMES", image: "/perfumes.jpg" },
    { name: "OTHERS", image: "/heal.jpg" },
    { name: "CLOTHES", image: "/cloths.jpg" },
    { name: "HOMEMADE SNACKS", image: "/snacks.webp" },
    { name: "CROCKERY", image: "/crock.webp" },
    { name: "WATCHES", image: "/watch.webp" },
    { name: "MOBILES", image: "/mobiles.webp" },
    { name: "MOBILES", image: "/dry fruits.webp" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="flex gap-6 overflow-x-auto">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
