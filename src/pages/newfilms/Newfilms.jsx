import React from 'react'

import './Newfilms.css'
import cat from '../../assets/cat.svg'
import batman from '../../assets/batman.svg'
import hollywood from "../../assets/hollywood.svg"
import strippers from "../../assets/strippers.svg"

const Newfilms = () => {
  return (
    <React.Fragment>
      <section className="newfilms">
        <section className="film-container">
          <object className="film-icon" type="image/svg+xml" data={cat} aria-label="cat" />
          <h5 className="film-title">
            Мульт в кино. Выпуск №103. Некогда грустить!
          </h5>
        </section>
        <section className="film-container">
          <object
            className="film-icon"
            data={batman}
            aria-label="batman"
            type="image/svg+xml"
          />
          <h5 className="film-title">Новый Бэтмен</h5>
        </section>
        <section className="film-container">
          <object
            className="film-icon"
            data={hollywood}
            aria-label="hollywood"
            type="image/svg+xml"
          />
          <h5 className="film-title">Однажды...в Голливуде</h5>
        </section>
        <section className="film-container">
          <object className="film-icon" data={strippers} aria-label="strippers" type="image/svg+xml" />
          <h5 className="film-title">Стриптизершы</h5>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Newfilms;
