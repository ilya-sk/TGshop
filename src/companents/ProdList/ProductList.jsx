import React, {useState} from 'react';
import './ProdList.css';
import ProductItem from "../ProdItem/ProdItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import imagen from './imagen.png';

const products = [
    {id: '1', title: 'Платье', price: 250, description: '11-12 лет', image: imagen, about: 'Описание товара 1'},
    {id: '2', title: 'Купальник', price: 100, description: '11-12 лет', image: imagen, about: 'Описание товара 2'},
    {id: '3', title: 'Футболка', price: 100, description: 'Для мальчика 5-6 лет', image: imagen, about: 'Описание товара 3'},
    {id: '4', title: 'Банты', price: 75, description: 'Белые 2шт.', image: imagen, about: 'Описание товара 4'},
    {id: '5', title: 'Заколки', price: 75, description: 'Белые 2шт.', image: imagen, about: 'Описание товара 5'},
    {id: '6', title: 'Шорты', price: 150, description: 'Розовые, для девочки 10-11 лет', image: imagen, about: 'Описание товара 6'},
    {id: '7', title: 'Комбинизон', price: 150, description: 'Красный для девочки 10-11 лет', image: imagen, about: 'Описание товара 7'},
    {id: '8', title: 'Брюки', price: 150, description: 'Размер 50', image: imagen, about: 'Описание товара 8'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://77.105.172.136:8000/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;