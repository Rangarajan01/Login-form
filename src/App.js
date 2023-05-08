import logo from './logo.svg';
import './App.css';
import React from 'react';
import{ useState } from 'react';

const App = () => {
  const [popupStyle, showPopup] =useState("hide")

  const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"),3000)
  }
  return (
    <div className="cover">
     <h1>LOGIN</h1>
     <input type="text" placeholder="Username" />
     <input type="password" placeholder="Password" />
     <div className="login-btn" onClick= {popup}>Login</div>
     <p className="text" onClick={popup}>Or login using</p>
     <div className="alt-login">
      <div className="Facebook"></div>
      <div className="google"></div>
     </div>
     <div className={popupStyle}>
      <h3>Login failed</h3>
      <p>Username or password incorrect</p>
     </div>
    </div>
  );
}

export default App;

