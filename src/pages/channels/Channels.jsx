import React from 'react'

import first from '../../assets/first.svg'
import dva from '../../assets/2x2.svg'
import rbk from '../../assets/rbk.png'
import a from '../../assets/a.png'
import './Channels.css'

const Channels = () => {

  const channels = [
    {
      image: first,
      channelTitle: "Первый канал",
      timeFirst: "13:00",
      currentShowFirst: "Новости (с субтитрами)",
      timeSecond: "14:00",
      currentShowSecond: "Давай поженимся",
      timeThird: "15:00",
      currentShowThird: "Другие новости",
    },
    {
      image: dva,
      channelTitle: "2х2",
      timeFirst: "13:00",
      currentShowFirst: "МУЛЬТ ТВ. Сезон 4, 7 серия",
      timeSecond: "14:00",
      currentShowSecond: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия",
      timeThird: "15:00",
      currentShowThird: "БУРДАШЕВ. Сезон 1, 20 серия",
    },
    {
      image: rbk,
      channelTitle: "РБК",
      timeFirst: "13:00",
      currentShowFirst: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС",
      timeSecond: "14:00",
      currentShowSecond: "ДЕНЬ. Главные темы",
      timeThird: "15:00",
      currentShowThird: "Главные новости",
    },
    {
      image: a,
      channelTitle: "AMEDIA PREMIUM",
      timeFirst: "13:00",
      currentShowFirst: "Клиент всегда мёртв",
      timeSecond: "14:00",
      currentShowSecond: "Голодные игры: Сойка-пересмешница. Часть I",
      timeThird: "15:00",
      currentShowThird: "Секс в большом городе",
    },
  ];

  return (
    <main>
      {channels.map((channel) => (
        <section className="channel">
          <img
            className="channel-logo"
            src={channel.image}
            alt="channel-logo"
          />
          <div className="channels-wrapper">
            <h3 className="channel-title">{channel.channelTitle}</h3>
            <div className="time-wrapper">
              <section className="time first-line">{channel.timeFirst}</section>
              <section className="current-show first-line">
                {channel.currentShowFirst}
              </section>
            </div>
            <div className="time-wrapper">
              <section className="time">{channel.timeSecond}</section>
              <section className="current-show">
                {channel.currentShowSecond}
              </section>
            </div>
            <div className="time-wrapper">
              <section className="time">{channel.timeThird}</section>
              <section className="current-show">{channel.currentShowThird}</section>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

export default Channels;
