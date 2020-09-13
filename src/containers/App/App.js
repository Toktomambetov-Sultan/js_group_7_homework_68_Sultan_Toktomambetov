import React from "react";
import "./App.css";
import Counter from "../Counter/Counter";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Redirect from="/" exact to="/counter" />
            <Route path="/counter" exact component={Counter} />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
