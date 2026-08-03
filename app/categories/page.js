import { supabase } from "../../lib/supabase";
import Navbar from "../../components/Navbar";
import CategoryCard from "../../components/CategoryCard";

export default async function CategoriesPage() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
  }

  return (
    <main>
      <Navbar />

      <section className="bg-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Browse Categories
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Find everything you need for the perfect cup of coffee.
          </p>
        </div>
      </section>

      <CategoryCard categories={categories || []} />
    </main>
  );
}