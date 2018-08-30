import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import DashBoard from "../components/DashBoard";
// import AddBook from "../components/AddBook";
// import EditBook from "../components/EditBook";
import NotFound from "../components/NotFound";
import AddPerson from "../components/AddPerson";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
    <Route path="/" component={AddPerson} />
      {/* <Header />
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/add" component={AddPerson} />
        <Route component={NotFound} />
      </Switch> */}
    </div>
  </BrowserRouter>
);

export default AppRouter;
