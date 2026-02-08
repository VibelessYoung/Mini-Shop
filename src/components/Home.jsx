import React, { useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import Footer from "./Footer";
import data from "../data.json";

function Home() {
  const [item, setItem] = useState(data.products);
  const [sort, setSort] = useState("asc");

  const sortProducts = (event) => {
    setSort(event.target.value);
    if (sort === "asc") {
      setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Header />
      <Filter count={item.length} sortProducts={sortProducts} />

      <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        <ShoppingCart />
        <Products item={item} />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
