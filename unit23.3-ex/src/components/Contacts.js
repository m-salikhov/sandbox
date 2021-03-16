import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
            <section className='contacts'>
                <h2>Контакты</h2>
                <div className="contacts__container">
                    <div>
                        <p className="contacts__type">Электронная почта</p>
                        <p className="contacts__value">drive@skillfactory.com</p>
                    </div>
                    <div className="rectangle"></div>
                    <div>
                        <p className="contacts__type">Телефон</p>
                        <p className="contacts__value">+7 912 123-45-67</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contacts;