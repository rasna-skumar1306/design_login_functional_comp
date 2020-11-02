import React, { useState } from 'react';
import { Login } from './login.component';
import { Register } from './register.component.jsx';
import './index.styles.scss';
import { useHistory } from 'react-router-dom';

const LogReg = () => {
  const [isLoginActive, setLoginActive] = useState(true);
  const history = useHistory();
  const current = isLoginActive ? 'Register' : 'Login';
  const currentActive = isLoginActive ? 'login' : 'register';
  const [classList, setClassList] = useState('right');

  const click = () => {
    if (isLoginActive) {
      setClassList('left');
      history.push('/register');
    } else {
      setClassList('right');
      history.push('/login');
    }
    setLoginActive(!isLoginActive);
  };

  return (
    <div className="logreg">
      <div className="log__app">
        <div className="log__login">
          <div className="container">
            {isLoginActive && <Login containerRef={(ref) => current} />}
            {!isLoginActive && <Register containerRef={(ref) => current} />}
          </div>
          <RightSide
            current={current}
            containerRef={(ref) => currentActive}
            click={click}
            classList={classList}
          />
        </div>
      </div>
    </div>
  );
};

const RightSide = ({ containerRef, click, current, classList }) => {
  return (
    <div
      className={`right-side ${classList}`}
      ref={containerRef}
      onClick={click}
    >
      <div className="inner-container">
        <div className="text">{current}</div>
      </div>
    </div>
  );
};

export default LogReg;
