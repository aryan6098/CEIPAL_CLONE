import React, { Component } from "react";
import "../../css/main/WorkList.css";
import "../../css/main/Navcom.css";

import Navbarcomp from "./Navbarcomp";

export default class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <>
        <div>
          <Navbarcomp search />
        </div>
        <div className="container-fluid ">
          <div class="content_page_head">Work List(s)</div>
          <br />
          <br />
          <br />
          <br />
          <div className="container">
            <div id="table">
              <table
                id="list_table123"
                class="data-table dataTable margin-10b margin-2t"
                width="100%"
                cellspacing="0"
                cellpadding="0"
              >
                <thead>
                  <tr className="tableHead">
                    <th>&emsp;Request Number</th>
                    <th>Request Group</th>
                    <th>Request Type</th>
                    <th>Requested By</th>
                    <th>Assigned To</th>
                    <th>Description</th>
                    <th>Submitted On</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="9" align="center">
                      No worklist found in your stack, you will be notified if
                      any worklist fall under your pool for approval.
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
            </div>
          </div>
        </div>
      </>
    );
  }
}
