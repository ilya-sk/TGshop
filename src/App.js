import { useEffect } from "react";
import "./App.css";
import ProductList from "./companents/ProdList/ProductList";
import Header from "./companents/Header/Header";
import Form from "./companents/Form/Form";
import {Route, Routes} from 'react-router-dom'
import {useTelegram} from "./hooks/useTelegram";
import ProductPage from "./companents/ProdPage/ProdPage";
import ProductItem from "./companents/ProdItem/ProdItem";
import products from './companents/Product/Products';



const tg = window.Telegram.WebApp;

// const products = [
//     {id: '1', title: 'Платье', price: 250, description: '11-12 лет', image: imagen, about: 'Описание товара 1'},
//     {id: '2', title: 'Купальник', price: 100, description: '11-12 лет', image: imagen, about: 'Описание товара 2'},
//     {id: '3', title: 'Футболка', price: 100, description: 'Для мальчика 5-6 лет', image: imagen, about: 'Описание товара 3'},
//     {id: '4', title: 'Банты', price: 75, description: 'Белые 2шт.', image: imagen, about: 'Описание товара 4'},
//     {id: '5', title: 'Заколки', price: 75, description: 'Белые 2шт.', image: imagen, about: 'Описание товара 5'},
//     {id: '6', title: 'Шорты', price: 150, description: 'Розовые, для девочки 10-11 лет', image: imagen, about: 'Описание товара 6'},
//     {id: '7', title: 'Комбинизон', price: 150, description: 'Красный для девочки 10-11 лет', image: imagen, about: 'Описание товара 7'},
//     {id: '8', title: 'Брюки', price: 150, description: 'Размер 50', image: imagen, about: 'Описание товара 8'},
// ]

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
              <Route path="/product/:id" element={<ProductPage products={products} />} />
              <Route path="/" exact component={ProductItem} />
          </Routes>
      </div>
  );
}

export default App;
