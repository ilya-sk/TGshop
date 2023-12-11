import { useEffect } from "react";
import "./App.css";
import ProductList from "./companents/ProdList/ProductList";


const tg = window.Telegram.WebApp;

function App() {
  useEffect (() => {
    tg.ready();
  }, [])
  const onClose = () => {
tg.close()
  }

  return <div className="App">
  <ProductList></ProductList>
    </div>;
}

export default App;
