import React from "react";
import {
  Form,
  Col,
  Container,
  Row,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { FaDownload } from "react-icons/fa";
// import { Table } from "react-bootstrap";
import "../../../css/main/NavEss.css";
import EssNav from "../EssNav";

function RequestDetails() {
  return (
    <>
      <div>
        <EssNav />
      </div>

      <div>
        <h3>My Request Details</h3>
      </div>

      <Container>
        <Row>
          <Col>
            <label htmlFor="inlineFormInputGroup">Status</label>
            <div className="input-group mb-2 ">
              <select
                name="data[]"
                id="period"
                className="no-margin requestDate"
              >
                <option value="1" selected="selected">
                  All
                </option>
                <option value="2">Request Raised</option>
                <option value="3">Request Submitted</option>
                <option value="4">Approved</option>
                <option value="5">Rejected</option>
                <option value="6">Ignored</option>
              </select>
            </div>
          </Col>

          <Col>
            <label htmlFor="inlineFormInputGroup">Request By</label>
            <div className="input-group mb-2">
              <select
                name="data[]"
                id="period"
                className="no-margin requestDate"
              >
                <option value="1" selected="selected">
                  All
                </option>
              </select>
            </div>
          </Col>

          <Col>
            <label htmlFor="inlineFormInputGroup">Request Status</label>
            <div className="input-group mb-2">
              <select
                name="data[]"
                id="period"
                className="no-margin requestDate "
              >
                <option value="1" selected="selected">
                  All
                </option>
                <option value="2">Open </option>
                <option value="3">Close</option>
              </select>
            </div>
          </Col>

          <Col>
            <label htmlFor="inlineFormInputGroup">Period</label>
            <div className="input-group mb-2">
              <select
                name="data[]"
                id="period"
                className="no-margin requestDate"
              >
                <option value="1" selected="selected">
                  All
                </option>
                <option value="2">Last 3 Months</option>
                <option value="3">Last 6 Months</option>
                <option value="4">Last 1 Year</option>
              </select>
            </div>
          </Col>

          <Col>
            <button type="submit" className="btn btn-primary mt-4 mr-2  mb-2">
              Apply
            </button>
            <button type="submit" className="btn btn-default mt-4 mb-2">
              Reset
            </button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Form className="d-flex mt-4">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="btn btn-primary  mr-2  mb-2 ">Search</Button>
            </Form>
          </Col>

          <Col>
            <Form display="inline">
              <label htmlFor="inlineFormInputGroup">Sort By</label>
              <div className="input-group">
                <select name="data[]" id="period" className="sortby ">
                  <option value="1" selected="selected">
                    Requested ID
                  </option>
                  <option value="2">Requested Date </option>
                  <option value="3">Requested ID</option>
                </select>
              </div>

              <button type="submit" className="btn sort-button">
                <AiOutlineSortAscending />
              </button>

              <button type="submit" className="btn sort-button">
                <AiOutlineSortDescending />
              </button>
            </Form>
          </Col>

          <Col>cdcsdcsd</Col>
        </Row>
      </Container>
    </>
  );
}

export default RequestDetails;
