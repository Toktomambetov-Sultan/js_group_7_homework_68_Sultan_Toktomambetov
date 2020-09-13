import React from "react";
import "./App.css";
import Counter from "../Counter/Counter";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/" exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
