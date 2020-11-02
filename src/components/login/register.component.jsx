import React, { useState } from 'react';
import firebase from '../../firebase';
import { Button } from 'semantic-ui-react';

export const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    mail: '',
    password: '',
    confirmPassword: '',
  });

  const [err, setErr] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const newValue = e.target.value;
    const change = e.target.name;
    setCredentials((prev) => {
      if (change === 'username') {
        return {
          username: newValue,
          mail: prev.mail,
          password: prev.password,
          confirmPassword: prev.confirmPassword,
        };
      } else if (change === 'mail') {
        return {
          username: prev.username,
          mail: newValue,
          password: prev.password,
          confirmPassword: prev.confirmPassword,
        };
      } else if (change === 'password') {
        return {
          username: prev.username,
          mail: prev.mail,
          password: newValue,
          confirmPassword: prev.confirmPassword,
        };
      } else if (change === 'confirmPassword') {
        return {
          username: prev.username,
          mail: prev.mail,
          password: prev.password,
          confirmPassword: newValue,
        };
      }
    });
  };

  const validateForm = () => {
    let errors = [];

    let error;

    if (formEmpty()) {
      error = { message: 'fill all the fields' };
      setErr(errors.concat(error));
      return false;
    } else if (!passwordValid(credentials)) {
      error = { message: 'Password is Invalid' };
      setErr(errors.concat(error));
      return false;
    } else {
      return true;
    }
  };

  const formEmpty = () => {
    return (
      !username.length ||
      !mail.length ||
      !password.length ||
      !confirmPassword.length
    );
  };

  const passwordValid = ({ password, confirmPassword }) => {
    if (password.length < 8 || confirmPassword.length < 8) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const DisplayErrors = () =>
    err.map((error, i) => <p key={i}>{error?.message}</p>);

  const { username, password, mail, confirmPassword } = credentials;
  const handleSubmit = (e) => {
    if (validateForm()) {
      e.preventDefault();
      setErr([]);
      setLoading(true);
      setCredentials({
        username: '',
        mail: '',
        password: '',
        confirmPassword: '',
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(credentials.mail, credentials.password)
        .then((createdUser) => {
          console.log(createdUser);
          setLoading(false);
        })
        .catch((errr) => {
          console.error(errr);
          alert(errr.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="register">
      <div className="register__header">Register</div>
      <div className="register__contents">
        <div className="img">
          <img src="/C2Clogo.jpeg" alt="" />
        </div>
        <div className="register__form">
          <div className="register__formGroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleInput}
            />
          </div>
          <div className="register__formGroup">
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              name="mail"
              placeholder="Email Address"
              value={mail}
              onChange={handleInput}
            />
          </div>
          <div className="register__formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInput}
            />
          </div>
          <div className="register__formGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat Password"
              value={confirmPassword}
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
      <div className="register__footer">
        <Button
          disabled={loading}
          type="button"
          id="btn"
          className={loading ? 'loading' : ''}
          onClick={handleSubmit}
        >
          Register
        </Button>
      </div>
      {err.length > 0 && (
        <div className="error">
          <h3>Error</h3>
          <DisplayErrors />
        </div>
      )}
    </div>
  );
};
