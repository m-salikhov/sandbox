import React, { Component } from 'react';
import photoIvanov from '../img/teamPhotos/ivanov.png';
import photoSmirnov from '../img/teamPhotos/smirnov.png';
import photoYartsev from '../img/teamPhotos/yartsev.png';
import photoMorozov from '../img/teamPhotos/morozov.png';
import photoDeeva from '../img/teamPhotos/deeva.png';
import photoStrelkova from '../img/teamPhotos/strelkova.png';


class Team extends Component {
    render() {
        return (
            <section className='team'>
                <h2>Команда</h2>
        <div className="team__container">
          <div className="team__first-row">
            <div className="team__card">
              <img
                className="team__photo"
                src={photoIvanov}
                alt="фото Иван Иванов"
              />
              <p className="team__name">Иван Иванов</p>
              <p className="team__position">CEO</p>
            </div>
            <div className="team__card">
              <img
                className="team__photo"
                src={photoSmirnov}
                alt="фото Алексей Смирнов"
              />
              <p className="team__name">Алексей Смирнов</p>
              <p className="team__position">Frontend-разработчик</p>
            </div>
            <div className="team__card">
              <img
                className="team__photo"
                src={photoYartsev}
                alt="фото Денис Ярцев"
              />
              <p className="team__name">Денис Ярцев</p>
              <p className="team__position">Backend-разработчик</p>
            </div>
            <div className="team__card">
              <img
                className="team__photo"
                src={photoMorozov}
                alt="фото Николай Морозов"
              />
              <p className="team__name">Николай Морозов</p>
              <p className="team__position">Дизайнер</p>
            </div>
          </div>
          <div className="team__second-row">
            <div>
              <img
                className="team__photo"
                src={photoDeeva}
                alt="фото Ирина Деева"
              />
              <p className="team__name">Ирина Деева</p>
              <p className="team__position">Копирайтер</p>
            </div>
            <div className="team__card">
              <img
                className="team__photo"
                src={photoStrelkova}
                alt="фото Мария Стрелкова"
              />
              <p className="team__name">Мария Стрелкова</p>
              <p className="team__position">SMM</p>
            </div>
          </div>
        </div>
                
            </section>
        );
    }
}

export default Team;