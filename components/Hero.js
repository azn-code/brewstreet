import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Brewstreet Coffee
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            Handcrafted small-batch coffee, roasted with care. Explore single origins,
            seasonal blends, and brewing accessories to elevate your ritual.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-3 shadow-md"
            >
              Shop Coffee
            </a>

            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-md border border-white/30 hover:border-white px-5 py-3 text-sm font-medium"
            >
              Brewing Guides
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-300">
            Free shipping on orders over $50 • Roasted fresh weekly
          </div>
        </div>
      </div>
    </section>
  )
}
