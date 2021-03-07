import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/list" component={() => <div>List</div>} />
          <Route path="/recived" component={() => <div>Recived</div>} />
          <Route path="/" component={() => <div>home</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
