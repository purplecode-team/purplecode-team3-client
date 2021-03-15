import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/graphql";
import { GlobalStyle } from "./components/common/GlobalStyle";
import Main from "./pages/Main";
import Search from "./pages/Search";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/search" component={Search} />
            <Route path="/signup" component={SignUpPage} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
