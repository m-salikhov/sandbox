import React, { Component } from 'react';
import logo from '../img/logo.svg';

export default function Header() {

        return (
            <header>
                <img src={logo} alt="логотип скиллдрайв" />
                <div className="header__nav-and-btn">
                    <nav>
                        <ul>
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Условия</a></li>
                            <li><a href="#">Частые вопросы</a></li>
                        </ul>
                    </nav>

                    <button>Войти</button>
                </div>
            </header>
        );

};
