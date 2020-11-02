import React, { useState } from 'react';
import './login.styles.scss';

export const Login = ({ containerRef }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    setCredentials({ [e.target.name]: e.target.value });
  };

  const { username, password } = credentials;
  return (
    <div className="login" ref={containerRef}>
      <div className="login__header">Login</div>
      <div className="login__contents">
        <div className="img">
          <img src="/C2Clogo.jpeg" alt="" />
        </div>
        <div className="login__form">
          <div className="login__formGroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleInput}
            />
          </div>
          <div className="login__formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
      <div className="login__footer">
        <button type="button" id="btn">
          Login
        </button>
      </div>
    </div>
  );
};
