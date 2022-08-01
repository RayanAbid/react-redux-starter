import React, { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import { firstAction } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // To fetch data when component mounts.
  useEffect(async () => {
    await dispatch(firstAction());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test {state.firstState.gender}</p>
      </header>
    </div>
  );
}

export default App;
