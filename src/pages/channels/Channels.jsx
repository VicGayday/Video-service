import React from 'react'

import first from '../../assets/first.svg'
import dva from '../../assets/2x2.svg'
import './Channels.css'

const Channels = () => {
  return (
    <main>
      <section className="channel">
        <img className="first-channel" src={first} alt="channel-logo" />
        <div className="channels-wrapper">
          <h3>Первый канал</h3>
          <div className="time-wrapper">
            <section className="time">13:00</section>
            <section>Новости (с субтитрами)</section>
          </div>
          <div className="time-wrapper">
            <section className="time">14:00</section>
            <section>Давай поженимся</section>
          </div>
          <div className="time-wrapper">
            <section className="time">15:00</section>
            <section>Другие новости</section>
          </div>
        </div>
      </section>
      <section className="channel">
        <img src={dva} alt="second-channel" className="channel-logo" />
        <div className="channels-wrapper">
          <h3>2x2</h3>
          <div className="time-wrapper">
            <section className="time">13:00</section>
            <section>МУЛЬТ ТВ. Сезон 4, 7 серия</section>
          </div>
          <div className="time-wrapper">
            <section className="time">14:00</section>
            <section>ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Channels;
