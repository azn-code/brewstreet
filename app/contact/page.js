"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { supabase } from "../../lib/supabase";

export default function ContactPage() {
 const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("contact_messages")
      .insert([form]);

    setLoading(false);

  if (error) {
  console.error("Supabase Error:", error);
  alert(error.message);
  return;
}

    alert("Message sent successfully!");

 setForm({
  name: "",
  email: "",
  message: "",
});
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="bg-[#4B2E2B] text-white py-20 text-center">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-lg">
          We'd love to hear from you.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-3xl p-8 space-y-6"
        >
        <input
       type="text"
       placeholder="Your Name"
       value={form.name}
       onChange={(e) => setForm({ ...form, name: e.target.value })}
       className="w-full border p-4 rounded-xl"
  required
      />
        

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border p-4 rounded-xl"
            required
          />

         
         
          <textarea
            rows="6"
            placeholder="Message..."
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full border p-4 rounded-xl"
            required
          />


          <button
            type="submit"
            className="bg-[#4B2E2B] text-white px-8 py-4 rounded-xl w-full hover:bg-[#3a2320]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </section>
    </main>
  );
}