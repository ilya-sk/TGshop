import { useEffect } from "react";
import "./App.css";
import ProductList from "./companents/ProdList/ProductList";
import Header from "./companents/Header/Header";

// const tg = window.Telegram.WebApp;

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])

  return (
      <div className="App">
          <Header />
          <Routes>
              <Route index element={<ProductList />}/>
              <Route path={'form'} element={<Form />}/>
          </Routes>
      </div>
  );
}

export default App;
