export default function CategoryCard({ categories }) {
  return (
    <section className="py-12 px-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-amber-900 rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold text-white">
              {category.name}
            </h3>

            <p className="text-white mt-2">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}