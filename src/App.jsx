import "./styles/Style.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Products />
      <ShoppingCart />
    </>
  );
}

export default App;
