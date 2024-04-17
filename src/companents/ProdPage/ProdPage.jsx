import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProdPage.css";

const ProductPage = ({ match, products, className }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);
  return product ? (
    <div className={'productp ' + className}>  
      <h2 className={'titlep'}>{product.title}</h2>
      <img className={'imgp'} src={product.image} alt={product.title} />
      <p className={'descriptionp'}>{product.description}</p>
      <p className={'pricep'}>Стоимость: {product.price} L.E.</p>
      <p className={'aboutp'}>{product.about}</p>
      <Link to="https://t.me/SkIlyaA">
        <button className={'add-btnp'}>Перейти в чат Telegram</button>
      </Link>
    </div>
  ) : (
    <p>нет данных</p>
  );
};

export default ProductPage;
