import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import forUser3 from "./components/forUser3";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/test" component={forUser3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
