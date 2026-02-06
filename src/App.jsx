import "./styles/Style.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Header />
      <Filter />

      <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        <ShoppingCart />
        <Products />
      </main>

      <Footer />
    </div>
  );
}

export default App;
