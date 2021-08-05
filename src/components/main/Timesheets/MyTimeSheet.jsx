import React from "react";
import Footer from "../Footer";
// import Navbarcomp from "../Navbarcomp";
import { Form, Col, Container, Row, FormControl } from "react-bootstrap";

import { FaColumns } from "react-icons/fa";

import "../../../css/main/timeWorkLis.css";

export default function MyTimeSheet() {
  return (
    <>
      <div>
        <div>
          <Container className="mt-4">
            <Row>
              <Col>
                <Form className="d-flex ml-4 mt-4">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                  />
                </Form>
              </Col>

              <Col>
                <label htmlFor="inlineFormInputGroup" className="label1">
                  Status
                </label>
                <div
                  className="input-group mb-2 "
                  //   style={{
                  //     "background-color": "#00bcd4",
                  //     "border-color": "#00bcd4",
                  //     color: " #fff",
                  //   }}
                >
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

        <div className="limit mr-3 " style={{ float: "right" }}>
          <label id="limit_label">
            <h4>Limit &nbsp;</h4>
          </label>
          <select
            style={{
              width: "60px",
              border: " 1px solid black",
              padding: "4px",
            }}
          >
            <option value="10" selected="selected">
              10
            </option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <div align="center" className="mt-5">
          No Timesheets
        </div>
      </div>

      <Footer />
    </>
  );
}
