import React, { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import { firstAction } from "./redux/action";
import { connect } from "react-redux";

function App(props) {
  useEffect(async () => {
    await props.firstAction();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>test {props.firstState[0].gender}</p>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    firstState: state.firstState,
  };
};
export default connect(mapStateToProps, {
  firstAction,
})(App);
