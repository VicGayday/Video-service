import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import "./Header.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MyModal from "../UI/modal/MyModal";
import Login from '../login/Login'
import { signIn } from '../../store/reducers/auth'
import logo from '../../assets/logo.png'

const Header = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((s) => s.auth.login)
  const isAuth = useSelector((s) => s.auth.isAuth)

  const [search, setSearch] = useState("")
  const [modal, setModal] = useState(false)

  const signOut = () => {
    dispatch(signIn(false))
  }

  return (
    <header>
      <img className="logo-svg" src={logo} alt="logo" />

      <form className="input-container">
        <MyInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск..."
        />
        <button type="button" className="find">
          Найти
        </button>
      </form>

      <section className="login-block">
        {isAuth ? loggedUser : ""}

        {!isAuth ? (
          <MyButton onClick={() => setModal(!modal)}>Войти</MyButton>
        ) : (
          <button onClick={signOut} className="signout-button">
            Выйти
          </button>
        )}
      </section>

      <MyModal visible={modal} setVisible={setModal}>
        <Login modal={modal} setModal={setModal} />
      </MyModal>
    </header>
  );
};

export default Header;
