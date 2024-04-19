import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';
import logo from './logo.png'

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            Добро пожаловать:
            <span className={'username'}>
                {user?.username}
            </span>
            <img className={'avatar'} src={logo} alt={user?.username}/>
        </div>
    );
};

export default Header;