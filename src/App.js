import { useEffect } from "react";
import "./App.css";
import ProductList from "./companents/ProdList/ProductList";
import Header from "./companents/Header/Header";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
