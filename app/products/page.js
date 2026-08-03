import { supabase } from "../../lib/supabase";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
  }

  return (
    <main>
      <Navbar />
      <ProductCard products={products || []} />
    </main>
  );
}