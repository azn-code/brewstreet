import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F5F2] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#4B2E2B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            About BrewStreet
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Brewing exceptional coffee experiences with premium beans,
            professional equipment, and a passion for quality.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900"
              alt="Coffee Shop"
              className="rounded-3xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#4B2E2B]">
              Our Story
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              BrewStreet was founded with one goal—to make premium coffee
              accessible to everyone. Whether you&apos;re an espresso enthusiast or
              someone discovering specialty coffee for the first time, we
              carefully select every bean and brewing accessory to elevate your
              coffee experience.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              From ethically sourced coffee beans to professional brewing
              equipment, every product reflects our commitment to quality,
              sustainability, and customer satisfaction.
            </p>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-[#4B2E2B]">
            Our Mission
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We believe every cup tells a story. Our mission is to provide
            exceptional coffee, premium brewing tools, and an unforgettable
            experience for coffee lovers around the world.
          </p>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#4B2E2B] mb-14">
            Why Choose BrewStreet?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow">
              <div className="text-5xl">☕</div>
              <h3 className="text-xl font-bold mt-4">
                Premium Coffee
              </h3>
              <p className="mt-3 text-gray-600">
                Carefully selected specialty coffee beans from trusted farms.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow">
              <div className="text-5xl">🌱</div>
              <h3 className="text-xl font-bold mt-4">
                Sustainable
              </h3>
              <p className="mt-3 text-gray-600">
                Supporting ethical sourcing and environmentally friendly practices.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow">
              <div className="text-5xl">🚚</div>
              <h3 className="text-xl font-bold mt-4">
                Fast Delivery
              </h3>
              <p className="mt-3 text-gray-600">
                Fresh coffee delivered safely to your doorstep.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow">
              <div className="text-5xl">⭐</div>
              <h3 className="text-xl font-bold mt-4">
                Trusted Quality
              </h3>
              <p className="mt-3 text-gray-600">
                Hundreds of satisfied coffee lovers trust BrewStreet.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#4B2E2B] text-white py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold">5K+</h2>
            <p className="mt-3">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">100+</h2>
            <p className="mt-3">Coffee Products</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">15+</h2>
            <p className="mt-3">Coffee Brands</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">98%</h2>
            <p className="mt-3">Positive Reviews</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-[#4B2E2B]">
            Ready to Brew Something Amazing?
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Explore our premium coffee collection and discover your next favorite cup.
          </p>

          <Link
            href="/products"
            className="inline-block mt-8 bg-[#4B2E2B] text-white px-8 py-4 rounded-xl hover:bg-[#3a2320] transition"
          >
            Explore Products →
          </Link>

        </div>

      </section>

    </main>
  );
}