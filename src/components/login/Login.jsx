import React from 'react'

import MyButton from '../UI/button/MyButton'
import './Login.css'

const Login = () => {
  return (
    <section className="form-container">
      <h5 className="login-title">Вход</h5>
      <form>
        {/* <label htmlFor="username">Username</label> */}
        <input
          className="input login"
          // onChange={(e) => {
          //   dispatch(updateLogin(e.target.value));
          // }}
          type="text"
          name="username"
          id="username"
          // value={login}
          placeholder="Логин"
        />

        {/* <label htmlFor="password">Password</label> */}
        <input
          className="input password"
          // onChange={(e) => {
          //   dispatch(updatePassword(e.target.value));
          // }}
          type="text"
          name="password"
          id="password"
          // value={password}
          placeholder="Пароль"
        />
        <section className="checkbox-wrapper">
          <input type="checkbox" />
          <span>Запомнить</span>
        </section>
      </form>
      <MyButton>Войти</MyButton>
    </section>
  );
}

export default Login;
