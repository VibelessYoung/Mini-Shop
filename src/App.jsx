import "./styles/Style.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <div className="flex justify-between items-start">
        <ShoppingCart />
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default App;
