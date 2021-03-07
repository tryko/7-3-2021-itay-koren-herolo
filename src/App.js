import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./views/List";
import Recived from "./views/Recived";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/recived" component={Recived} />
          <Route path="/" component={() => <div>home</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
