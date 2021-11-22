import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { updateLogin, updatePassword, signIn } from '../../store/reducers/auth';
import MyButton from '../UI/button/MyButton'
import './Login.css'

const Login = ({modal, setModal}) => {

  const dispatch = useDispatch();
  const login = useSelector((s) => s.auth.login);
  const password = useSelector((s) => s.auth.password);

   const loginHandler = (event) => {
    //  event.preventDefault();
       dispatch(signIn(true))
       setModal(!modal)
   };

  return (
    <section className="form-container">
      <h5 className="login-title">Вход</h5>
      <form>
        <input
          className="input login"
          onChange={(e) => {
            dispatch(updateLogin(e.target.value));
          }}
          type="text"
          name="username"
          id="username"
          value={login}
          placeholder="Логин"
        />

        <input
          className="input password"
          onChange={(e) => {
            dispatch(updatePassword(e.target.value));
          }}
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Пароль"
        />
        <section className="checkbox-wrapper">
          <input type="checkbox" />
          <span>Запомнить</span>
        </section>
      </form>
      <MyButton onClick={loginHandler}>Войти</MyButton>
    </section>
  );
}

export default Login;
