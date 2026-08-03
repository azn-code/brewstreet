import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

export default async function Home() {
  const { data: products, error: productError } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  const { data: categories, error: categoryError } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  if (productError) console.error(productError);
  if (categoryError) console.error(categoryError);

  return (
    <main>
      <Navbar />
      <Hero />
      <CategoryCard categories={categories || []} />
      <ProductCard products={products || []} />
    </main>
  );
}