import { Link } from "react-router-dom";
import { React, useState } from "react";
import Navbarcomp from "./Navbarcomp";
import { Tabs, Tab } from "react-bootstrap";
import MyTimeSheet from "./Timesheets/MyTimeSheet";
import MyDueTimeSheet from "./Timesheets/MyDueTimeSheet";
import Footer from "./Footer";
import "../../css/main/timesheet.css";
import "../../css/main/Navcom.css";
import WorkList from "./Timesheets/WorkList";
import AllTimeSheets from "./Timesheets/AllTimeSheets";
export default function Timesheet() {
  const [key, setKey] = useState("mytimesheet");

  return (
    <>
      <Navbarcomp search />
      <section className=" container.fluid timesheets ">
        <div>
          <div className="timesheetfirst">
            <Link to="/timesheet" className="timesheetfirstPart">
              Timesheets List
            </Link>
          </div>

          <div className="container.fluid ml-4 mr-4 timesheetcompo">
            <div className="timesheetlist">
              <Tabs
                style={{ borderTop: "none" }}
                activeKey={key}
                onSelect={(k) => setKey(k)}
              >
                <Tab
                  className="timesheetnames"
                  eventKey="mytimesheet"
                  title="My Time Sheet"
                >
                  <MyTimeSheet />
                </Tab>
                <Tab eventKey="myduetimesheet" title="My Due Time Sheet">
                  <MyDueTimeSheet />
                </Tab>
                <Tab
                  className="timesheetnames"
                  eventKey="worklist"
                  title="Work List"
                >
                  <WorkList />
                </Tab>
                <Tab
                  className="timesheetnames"
                  eventKey="alltimesheets"
                  title="All Time Sheet"
                >
                  <AllTimeSheets />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
