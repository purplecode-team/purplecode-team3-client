import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./containers/common/GlobalStyle";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
