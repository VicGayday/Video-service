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
          <img className="film-icon" src={cat} alt="cat"></img>
          <h5 className="film-title">
            Мульт в кино. Выпуск №103. Некогда грустить!
          </h5>
        </section>
        <section className="film-container">
          <img className="film-icon" src={batman} alt="batman"></img>
          <h5 className="film-title">Новый Бэтмен</h5>
        </section>
        <section className="film-container">
          <img className="film-icon" src={hollywood} alt="hollywood"></img>
          <h5 className="film-title">Однажды...в Голливуде</h5>
        </section>
        <section className="film-container">
          <img className="film-icon" src={strippers} alt="strippers"></img>
          <h5 className="film-title">Стриптизершы</h5>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Newfilms;
