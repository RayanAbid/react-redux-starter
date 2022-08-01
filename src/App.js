import React, { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import { firstAction } from "./redux/action";
import { connect } from "react-redux";

function App(props) {
  useEffect(async () => {
    await dispatch(firstAction());
  }, []);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test {state.gender}</p>
      </header>
    </div>
  );
}

export default App;
