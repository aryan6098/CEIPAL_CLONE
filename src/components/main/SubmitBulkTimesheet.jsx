import React, { Component } from "react";
import Navbarcomp from "./Navbarcomp";
import "../../css/main/submitbulktime.css";
import { Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
const options = [
  { value: "Mr. John", label: "Mr. John" },
  { value: "Mr. Peter", label: "Mr. Peter" },
  { value: "Zoya", label: "Zoya" },
];
class SubmitBulkTimesheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  componentWillMount() {}

  render() {
    const { selectedOption } = this.state;
    return (
      <>
        <Navbarcomp />
        <section className="container-fluid timesheets">
          <div className="row mt-5 ml-4">
            <div className="col d-flex justify-content-start timesheet ">
              Add Timesheet
            </div>
            <div className="col d-flex justify-content-end mr-5 timesheet">
              <button>Cancel</button>
            </div>
          </div>
          <div className="container-fluid mt-4 box">
            <div className="container-fluid inner">
              <div className="row ml-5 mr-5">
                <div className="col-sm form">
                  <Form>
                    <Form.Group as={Row} controlId="selectclient">
                      <Form.Label column sm={3}>
                        Select Client
                      </Form.Label>
                      <Col sm={7}>
                        <Select
                          className="area"
                          for="formHorizontalEmail"
                          value={selectedOption}
                          onChange={this.handleChange}
                          options={options}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                      <Form.Label column sm={3}>
                        Date Range
                      </Form.Label>
                      <Col sm={7}>
                        <Form.Control
                          type="date"
                          placeholder="date"
                          className="area"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="attachment">
                      <Form.Label column sm={3}>
                        Attachments
                      </Form.Label>
                      <Col sm={7}>
                        <Form.File.Input />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="signature">
                      <Form.Label column sm={3}>
                        Signature
                      </Form.Label>
                      <Col sm={7}>
                        <Form.Control disabled className="area" />
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
                <div className="col-sm ml-5">
                  <Form>
                    <Form.Group as={Row} controlId="comments">
                      <Form.Label column sm={3}>
                        Comments
                      </Form.Label>
                      <Col sm={7}>
                        <Form.Control
                          className="area"
                          type="textarea"
                          placeholder="Comments"
                          style={{ height: "6rem" }}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="class">
                      <Form.Label column sm={3}>
                        Class
                      </Form.Label>
                      <Col sm={7}>
                        <Form.Control className="area" />
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SubmitBulkTimesheet;
