import React from 'react';
import { NavLink } from 'react-router-dom'
import './Switcher.css'

const Switcher = () => {
  return (
    <section>
      <NavLink className="link" activeClassName="active" to="/films">
        Фильмы
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/channels">
        Телеканалы
      </NavLink>
    </section>
  );
}

export default Switcher;
