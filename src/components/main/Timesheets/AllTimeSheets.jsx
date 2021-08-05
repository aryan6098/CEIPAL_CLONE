import React from "react";
import Footer from "../Footer";
import { MdUnfoldMore } from "react-icons/md";
import { AiFillFilter } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

import {
  Form,
  Col,
  Container,
  Row,
  FormControl,
  Pagination,
} from "react-bootstrap";
import { FaColumns } from "react-icons/fa";

import "../../../css/main/timeWorkLis.css";
export default function AllTimeSheets() {
  return (
    <>
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
                className="ml-2 Facolumn"
                id="Facolumn"
                data-placement="bottom"
                data-toggle="tooltip"
                title="Update Columns"
                rel="tooltip"
                data-original-title="Update Columns"
              >
                <AiFillFilter />
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
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "7rem" }}>
                  Client ID
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "3rem" }}>
                  From
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "2rem" }}>
                  To
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "15rem" }}>
                  Attachment
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "7rem" }}>
                  Total Hours
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "12rem" }}>
                  Total Billable Hours
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "5rem" }}>
                  Status
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "8rem" }}>
                  Submitted On
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
                <th className="mydtst" style={{ width: "8rem" }}>
                  Actions
                  <MdUnfoldMore
                    style={{ fontSize: "18px", margin: "-4px 0 0 0" }}
                  />
                </th>
              </tr>
            </thead>

            <tbody style={{ fontSize: "1.5rem" }}>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>No Timesheet</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "1.5rem" }}>
            Showing 0 to 0 of 0 records{" "}
            <span style={{ float: "right", marginRight: "2rem" }}>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>

                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </span>
          </p>
        </div>

        <Footer />
      </div>

      <Footer />
    </>
  );
}
