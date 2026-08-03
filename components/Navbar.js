import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-amber-900">
          BrewStreet
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-amber-900 transition">
            Home
          </Link>

          <Link href="/categories" className="hover:text-amber-900 transition">
            Categories
          </Link>

          <Link href="/products" className="hover:text-amber-900 transition">
            Products
          </Link>

          <Link href="/about" className="hover:text-amber-900 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-amber-900 transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/products"
          className="bg-amber-900 text-white px-5 py-2 rounded-lg hover:bg-amber-800 transition"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
}