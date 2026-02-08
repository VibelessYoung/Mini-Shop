import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer";
import data from "../data.json";

function Home() {
  const [item, setItem] = useState(data.products);
  console.log(item);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Header />
      <Filter />

      <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        <ShoppingCart />
        <Products item={item} />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
