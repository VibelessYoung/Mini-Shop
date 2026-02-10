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
  const [brand, setBrand] = useState();
  const [cartItems, setCartItems] = useState([]);

  const sortProducts = (event) => {
    setSort(event.target.value);
    if (sort === "asc") {
      setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setBrand(event.target.value);
      setItem(data.products);
    } else {
      setBrand(event.target.value);
      setItem(
        data.products.filter(
          (product) => product.availableBrand.indexOf(event.target.value) >= 0,
        ),
      );
    }
  };

  const addProducts = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeProducts = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((element) => element.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item,
        ),
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Header />
      <Filter
        count={item.length}
        sortProducts={sortProducts}
        brand={brand}
        filterProducts={filterProducts}
      />

      <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        <ShoppingCart cartItems={cartItems} removeProducts={removeProducts} />
        <Products item={item} addProducts={addProducts} />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
