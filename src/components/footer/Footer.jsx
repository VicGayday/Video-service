import React from 'react'
import logo from '../../assets/footer-logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <img className="logo" src={logo} alt="logo" />
      <section className="credentials">
        <div className="address">
          426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
          246 (ДК «Металлург»)
        </div>
        <div className="phone">+7 (3412) 93-88-61, 43-29-29</div>
        <div className="website">htc-cs.ru</div>
      </section>
    </footer>
  );
}

export default Footer;
