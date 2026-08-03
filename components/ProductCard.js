import React from "react";

export default function ProductCard({ products = [] }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-600">
            Featured Beans
          </p>

          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Shop our latest coffee selection
          </h2>

          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Discover fresh roasts and specialty blends.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            No products found.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={
                      product.image_url ||
                      "https://via.placeholder.com/500x400?text=Coffee"
                    }
                    alt={product.name}
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </div>

                <div className="space-y-3">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-700">
                      Coffee
                    </span>

                    <span className="text-lg font-bold text-slate-900">
                      ${product.price}
                    </span>

                  </div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {product.description}
                  </p>

                  <div className="flex gap-3 pt-2">

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                      Stock: {product.stock}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        product.featured
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {product.featured ? "Featured" : "Regular"}
                    </span>

                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}