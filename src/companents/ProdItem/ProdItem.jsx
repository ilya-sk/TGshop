import React from 'react';
import Button from "../Button/Button";
import './ProdItem.css';
import { Link } from 'react-router-dom';


const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <img className={'img'} src={product.image} alt={product.title}/>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price} L.E. </b></span>
            </div>
            <Link to={`/product/${product.id}`}>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Подробнее
            </Button>
            </Link>
        </div>
    );
};

export default ProductItem;