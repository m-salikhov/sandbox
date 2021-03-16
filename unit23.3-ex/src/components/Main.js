import React, { Component } from 'react';
import topImg from '../img/topImg.svg';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import Team from './Team';


class Main extends Component {
    render() {
        return (
            <main> 
                <div class="top-image">
                    <img src={topImg} alt="заглавное изображение" />
                </div>
                <AboutUs/>
                <Contacts/>
                <Team/>
            </main>
        );
    }
}

export default Main;