import React from 'react';

const Login = () => {
  return (
    <section className="form-container">
      <form>
        <label htmlFor="username">Username</label>
        <input
          // onChange={(e) => {
          //   dispatch(updateLogin(e.target.value));
          // }}
          type="text"
          name="username"
          id="username"
          // value={login}
          placeholder="Username"
        />

        <label htmlFor="password">Password</label>
        <input
          // onChange={(e) => {
          //   dispatch(updatePassword(e.target.value));
          // }}
          type="text"
          name="password"
          id="password"
          // value={password}
          placeholder="******************"
        />
      </form>
      <button className="signin-button" type="button">
        Sign In
      </button>
    </section>
  );
}

export default Login;
