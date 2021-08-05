import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import { Route, Switch } from "react-router-dom";
import EssNav from "./components/main/EssNav";
import RequestDetails from "./components/main/ESS/RequestDetails";
import WorkList from "./components/main/WorkList";
import Timesheet from "./components/main/Timesheet";
import EssRequest from "./components/main/ESS/EssRequest";
import SignIn from "./components/Login_Signup/SignIn";
import SignUp from "./components/Login_Signup/SignUp";
import SubmitBulkTimesheet from "./components/main/SubmitBulkTimesheet";
import SubmitTimeSheet from "./components/main/SubmitTimeSheet";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/home" component={Home}></Route>

        <Route exact path="/essnav" component={EssNav}></Route>

        <Route exact path="/essrequest" component={EssRequest}></Route>

        <Route exact path="/worklist" component={WorkList}></Route>

        <Route exact path="/timesheet" component={Timesheet}></Route>

        <Route exact path="/requestdetails" component={RequestDetails}></Route>
        <Route
          exact
          path="/submit_bulk_timesheet"
          component={SubmitBulkTimesheet}
        ></Route>
        <Route
          exact
          path="/submit_timesheet"
          component={SubmitTimeSheet}
        ></Route>
      </Switch>

      <Footer />

      {/* <Home2/> */}
    </>
  );
}

export default App;
