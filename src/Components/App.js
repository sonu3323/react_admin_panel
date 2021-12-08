import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Config from "./Config_Pages/Config";
import FinanceDashboard from "./Finance_dashboard/FinanceDashboard";
import OrderQuote from "./OrderQuote/OrderQuote";
import Order from "./Order_Pages/Order";
import Sale from "./Sale_Pages/Sale";
import FinanceRequests from "./Finance_Requests/FinanceRequests";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <FinanceDashboard />
          </Route>

          <Route exact path="/order">
            <Order />
          </Route>

          <Route exact path="/config">
            <Config />
          </Route>

          <Route exact path="/quote">
            <OrderQuote />
          </Route>

          <Route exact path="/sale">
            <Sale />
          </Route>

          <Route exact path="/financerequests">
            <FinanceRequests />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
