import React from "react";
import Footer from "../Footer";
import { AiFillFilter } from "react-icons/ai";
import {
  BiChevronLeftSquare as Left,
  BiChevronRightSquare as Right,
} from "react-icons/bi";

import { FaDownload } from "react-icons/fa";
import { Form, Col, Container, Row, FormControl } from "react-bootstrap";

import { FaColumns } from "react-icons/fa";

import "../../../css/main/timesheet.css";

export default function WorkList() {
  // const [limit, setLimit] = useState("10");
  return (
    <>
      {/* <div>
        <Navbarcomp />
      </div> */}

      <div>
        <div>
          <Container>
            <Row className="ml-3">
              <Col>
                <Form className="d-flex ml-4 mt-4">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className=" mt-2"
                    aria-label="Search"
                  />
                </Form>
              </Col>

              <Col>
                <label htmlFor="inlineFormInputGroup" className="label1">
                  Status
                </label>
                <div className="input-group mb-2 ">
                  <select
                    name="data[]"
                    id="period"
                    className="no-margin requestDate"
                  >
                    <option value="1" selected="selected">
                      Submiited
                    </option>
                    <option value="2">Draft</option>
                    <option value="3">Submitted</option>
                    <option value="4">Approved</option>
                    <option value="5">Rejected</option>
                    <option value="6">Discrepant</option>
                  </select>
                </div>
              </Col>

              <Col>
                <label htmlFor="inlineFormInputGroup" className="label1">
                  Data Arrange
                </label>
                <div className="input-group mb-2">
                  <select
                    name="data[]"
                    id="period"
                    className="no-margin requestDate"
                  >
                    <option value="1">All</option>
                    <option value="2">Current Week</option>
                    <option value="3">Last Week</option>
                    <option value="4" selected="selected">
                      Current Month
                    </option>
                    <option value="5">Last Month</option>
                    <option value="6">Last 3 Months</option>
                    <option value="7">Last 6 Months</option>
                    <option value="8">Custom</option>
                  </select>
                </div>
              </Col>

              <div
                id="Facolumn"
                data-placement="bottom"
                data-toggle="tooltip"
                title="Update Columns"
                rel="tooltip"
                data-original-title="Update Columns"
              >
                <FaColumns />
              </div>
              <div
                className="ml-2"
                id="Facolumn"
                data-placement="bottom"
                data-toggle="tooltip"
                title="Update Columns"
                rel="tooltip"
                data-original-title="Update Columns"
              >
                <AiFillFilter />
              </div>
              {/* <ReactTooltip id="Facolumn" effect="solid">
            Update Columns
          </ReactTooltip> */}

              <div className="mt-2">
                <button
                  style={{ padding: "11px 9px" }}
                  type="submit"
                  className="btn btn-primary ml-5 mr-2 mt-4 mb-2"
                >
                  Search
                </button>
              </div>
            </Row>
          </Container>
        </div>
        <div className="limit mt-3 ">
          <button type="submit" className="mr-3">
            <FaDownload />
          </button>
          <label id="limit_label">
            <h4>Limit &nbsp;</h4>
          </label>
          <select className="sd1">
            <option value="10" selected="selected">
              10
            </option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div className="mt-3" style={{ margin: "0px 3rem 0px 3rem" }}>
          <table className="table table-hover tab">
            <thead
              style={{
                color: "#e5eaed",
                backgroundColor: "#e5eaed",
                lineHeight: "2rem",
              }}
            >
              <tr>
                <th style={{ width: "2rem" }}>
                  <input
                    type="checkbox"
                    className="tcheck"
                    disabled="disabled"
                  />
                  <label for="tcheck"></label>
                </th>
                <th className="mydtst" style={{ width: "10rem" }}>
                  Employee
                </th>
                <th className="mydtst" style={{ width: "7rem" }}>
                  Client
                </th>
                <th className="mydtst" style={{ width: "7rem" }}>
                  Client ID
                </th>
                <th className="mydtst" style={{ width: "3rem" }}>
                  From
                </th>
                <th className="mydtst" style={{ width: "2rem" }}>
                  To
                </th>
                <th className="mydtst" style={{ width: "15rem" }}>
                  Attachment
                </th>
                <th className="mydtst" style={{ width: "7rem" }}>
                  Total Hours
                </th>
                <th className="mydtst" style={{ width: "12rem" }}>
                  Total Billable Hours
                </th>
                <th className="mydtst" style={{ width: "8rem" }}>
                  Status
                </th>
                <th className="mydtst" style={{ width: "5rem" }}>
                  Submitted On
                </th>
                <th className="mydtst" style={{ width: "8rem" }}>
                  Actions
                </th>
              </tr>
            </thead>

            <tbody style={{ fontSize: "1.5rem" }}>
              <tr>
                <td></td>
                <td></td>
                <td>No Data Available</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "1.5rem" }}>
            Showing 0 to 0 of 0 records{" "}
            <span style={{ float: "right", marginRight: "2rem" }}>
              <Left />
              <Right />
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
