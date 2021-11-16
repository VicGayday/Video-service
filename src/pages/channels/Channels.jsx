import React from 'react'

import first from '../../assets/first.svg'
import dva from '../../assets/2x2.svg'
import rbk from '../../assets/rbk.png'
import a from '../../assets/a.png'
import './Channels.css'

const Channels = () => {
  return (
    <main>
      <section className="channel">
        <img className="first-channel" src={first} alt="channel-logo" />
        <div className="channels-wrapper">
          <h3 className="channel-title">Первый канал</h3>
          <div className="time-wrapper">
            <section className="time">13:00</section>
            <section className="current-show">Новости (с субтитрами)</section>
          </div>
          <div className="time-wrapper">
            <section className="time">14:00</section>
            <section className="current-show">Давай поженимся</section>
          </div>
          <div className="time-wrapper">
            <section className="time">15:00</section>
            <section className="current-show">Другие новости</section>
          </div>
        </div>
      </section>

      <section className="channel">
        <img src={dva} alt="second-channel" className="channel-logo" />
        <div className="channels-wrapper">
          <h3 className="channel-title">2x2</h3>
          <div className="time-wrapper">
            <section className="time">13:00</section>
            <section className="current-show">
              МУЛЬТ ТВ. Сезон 4, 7 серия
            </section>
          </div>
          <div className="time-wrapper">
            <section className="time">14:00</section>
            <section className="current-show">
              ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия
            </section>
          </div>
          <div className="time-wrapper">
            <section className="time">15:00</section>
            <section className="current-show">
              БУРДАШЕВ. Сезон 1, 20 серия
            </section>
          </div>
        </div>
      </section>

      <section className="channel">
        <img src={rbk} alt="third-channel" className="rbk-channel" />
        <div className="channels-wrapper">
          <h3 className="channel-title">РБК</h3>
          <div className="time-wrapper">
            <section className="time">13:00</section>
            <section className="current-show">
              ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС
            </section>
          </div>
          <div className="time-wrapper">
            <section className="time">14:00</section>
            <section className="current-show">ДЕНЬ. Главные темы</section>
          </div>
          <div className="time-wrapper">
            <section className="time">15:00</section>
            <section className="current-show">Главные новости</section>
          </div>
        </div>
      </section>

      <section className="channel">
        <img src={a} alt="forth-channel" className="a-channel" />
        <div className="channels-wrapper">
          <h3 className="channel-title">AMEDIA PREMIUM</h3>
          <div className="time-wrapper">
            <section className="time">13:00</section>
            <section className="current-show">Клиент всегда мёртв</section>
          </div>
          <div className="time-wrapper">
            <section className="time">14:00</section>
            <section className="current-show">
              Голодные игры: Сойка-пересмешница. Часть I
            </section>
          </div>
          <div className="time-wrapper">
            <section className="time">15:00</section>
            <section className="current-show">Секс в большом городе</section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Channels;
