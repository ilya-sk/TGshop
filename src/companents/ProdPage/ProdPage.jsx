import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProdPage.css";

const ProductPage = ({ match, products, className }) => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);
  const navigate = useNavigate();
  return product ? (
    
    <div className={"productp " + className}>
            <button  onClick={() => navigate(-1)} className={"add-btnp"}>Назад к экскурсиям</button> 
      <h1 className={"titlep"}>{product.title}</h1>
      <img className={"imgp"} src={product.image} alt={product.title} />
      <p className={"descriptionp"}>{product.description}</p>
      <h3 className={"pricep"}>Стоимость: {product.price} $</h3>
      <h2 className={"program"}>Программа:</h2>
      <p className={"aboutp"}>{product.about}</p>
      <h2 className={"program"}>В стоимость входит:</h2>
      <p className={"inpricep"}>{product.inprice}</p>
      <p className={"textp"}>
        Подробнее раскажем в чате и предоставим дополнительную скидку для детей
        и больших групп
      </p>
      <Link to="https://t.me/Deemooi">
        <button className={"add-btnp"}>Перейти в чат Telegram</button>
      </Link>
    
    </div>
  ) : (
    <p>нет данных</p>
  );
};

export default ProductPage;
