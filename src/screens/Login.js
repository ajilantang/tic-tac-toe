import React from "react";
import { navigate } from "hookrouter";
import "../App.css";
import { HOME } from "../constants/paths";

function Login() {
  let navigateToMain = () => {
    navigate(HOME);
  };
  return (
    <div>
      <header className="App-header">
        <p>Welcome to tic-tac-toe</p>
      </header>
      <div style={{ flex: 1 }}>
        <input
          style={{ padding: 10, width: "100%", margin: 10 }}
          placeholder="email"
        />
        <input
          style={{ padding: 10, width: "100%", margin: 10 }}
          type="password"
          placeholder="password"
        />
      </div>
      <button onClick={navigateToMain}>
        <p>Play the game</p>
      </button>
    </div>
  );
}

export default Login;
