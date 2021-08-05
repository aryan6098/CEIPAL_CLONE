import React, { Component } from "react";
import FloatingLabel from "react-bootstrap-floating-label";
import {
  Modal,
  Button,
  Row,
  Col,
  Form,
  Container,
  Table,
} from "react-bootstrap";

import Navbarcomp from "./Navbarcomp";
import TileModal from "./TileModel";
import "../../css/main/Homecomp.css";

import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("user-info");
    this.toggle = this.toggle.bind(this);
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      show: false,
    };
  }
  toggle() {
    this.setState({
      show: !this.state.show,
    });

    console.log("show", this.state.show);
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <div>
          <Navbarcomp search />
        </div>
        <div>
          <div>
            <div className="topnavitabs" id="topDashboardHeader">
              <div className="content_page_head">Dashboard</div>
              <div className="pull-right">
                <span>
                  {/* <TileModal data={this.state.show} fun={this.state.toggle} /> */}
                  <button
                    onClick={this.toggle}
                    id="addDashboardTileLink"
                    style={{ background: "white", border: "none" }}
                  >
                    Add Title
                  </button>
                </span>
              </div>
            </div>
          </div>
          <br /> <br />
          <div id="content">
            <div className="tile-emp-info">
              <div>
                <Container>
                  <Row>
                    <Col>
                      <b>Employee Name</b> Executive <br />
                      Employee-Id : ABCD <br />
                      Employee number <br />
                      employeeid@infostride.com <br />
                      <button> Add About Yourself</button>
                    </Col>

                    <Col>
                      <h6>TIMESHEETS</h6>
                      <p className="well nm">
                        You don’t have any pending timesheets.
                      </p>
                      <br />
                      <h6>STATUS REPORTS</h6>
                      <p className="well nm">
                        You don't have any status reports to submit
                      </p>
                    </Col>

                    <Col className="key_Dates ">
                      <h6>Key Dates</h6>
                      <Table className="dataTable">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Approved From</th>
                            <th>Approved Until</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="4">No Data</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div
                className="data-table dataTable col-md-12 margin-20t cl"
                id="ActivePlacementUI"
              >
                <h6>Active Placements</h6>
                <div id="ActivePlacementUIdiv" className=".mCustomScrollBox">
                  <div tabindex="0">
                    <div dir="ltr">
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        className="data-table dataTable"
                      >
                        <thead>
                          <tr>
                            <th>Job Code</th>
                            <th>Title</th>
                            <th>End Client</th>
                            <th>Start Date</th>
                          </tr>
                        </thead>
                        <tbody id="DashboardActivePlacements">
                          <tr>
                            <td colSpan="5" rowSpan="10">
                              No Data
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      id="mCSB_2_scrollbar_vertical"
                      className="mCSB_scrollTools mCSB_2_scrollbar mCS-light mCSB_scrollTools_vertical"
                    >
                      <div className="mCSB_draggerContainer">
                        <div
                          id="mCSB_2_dragger_vertical"
                          className="mCSB_dragger"
                          oncontextmenu="return false;"
                        >
                          <div className="mCSB_dragger_bar"></div>
                          <div className="mCSB_draggerRail"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <br />
              <div className="col-md-6 col-lg-3">
                <div className="panel">Announcements</div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div
                  className="holidays tile-portlet mb-5"
                  data-id="13"
                  id="tile_13"
                  data-panel-id="company_holidays"
                >
                  <div
                    className="panel-heading tile-sort-handle ui-sortable-handle "
                    data-placement="top"
                    data-toggle="tooltip"
                    title="Drag &amp; Drop tiles to sort."
                    rel="tooltip"
                    data-original-title="Drag &amp; Drop Tiles to Sort"
                  >
                    <span className="panel-title ">Holidays Calendar</span>
                  </div>
                  <div className="panel-body pn scrollable mCustomScrollbar _mCS_1 mCS-autoHide ">
                    <div
                      id="mCSB_1"
                      className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                      tabindex="0"
                    >
                      <div
                        id="mCSB_1_container"
                        className="mCSB_container"
                        dir="ltr"
                      >
                        <div className="col-md-12 pt-0">
                          <div className="data-table dataTable">
                            <table
                              className="data-table dataTable"
                              cellpadding="0"
                              border="0"
                              width="95%"
                            >
                              <thead>
                                <tr>
                                  <th>Holiday Name</th>
                                  <th>Date</th>
                                  <th>Day</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>New Year Day</td>
                                  <td>01/01/2021</td>
                                  <td>Friday</td>
                                </tr>
                                <tr>
                                  <td>Memorial day</td>
                                  <td>05/31/2021</td>
                                  <td>Monday</td>
                                </tr>
                                <tr>
                                  <td>Independence Day</td>
                                  <td>08/15/2021</td>
                                  <td>Sunday</td>
                                </tr>
                                <tr>
                                  <td>Labor Day</td>
                                  <td>09/06/2021</td>
                                  <td>Monday</td>
                                </tr>
                                <tr>
                                  <td>Diwali</td>
                                  <td>11/04/2021</td>
                                  <td>Thursday</td>
                                </tr>
                                <tr>
                                  <td>Diwali Extended Holiday</td>
                                  <td>11/05/2021</td>
                                  <td>Friday</td>
                                </tr>
                                <tr>
                                  <td>Thanksgiving Day</td>
                                  <td>11/25/2021</td>
                                  <td>Thursday</td>
                                </tr>
                                <tr>
                                  <td>Extended Thanksgiving Day</td>
                                  <td>11/26/2021</td>
                                  <td>Friday</td>
                                </tr>
                                <tr>
                                  <td>Christmas</td>
                                  <td>12/25/2021</td>
                                  <td>Saturday</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={() => this.toggle()}>
          <Modal.Header closeButton>
            <Modal.Title>Add Dashboard Tile</Modal.Title>
          </Modal.Header>
          <br />
          <br />

          <Modal.Body>
            <Row className="g-2">
              <Col md>
                <FloatingLabel label="Choose tile"></FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Works with selects"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option value="1" selected="selected">
                      Select
                    </option>
                    <option value="2">My Team</option>
                    <option value="3">To do List</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
          </Modal.Body>

          <br />
          <br />
          <Modal.Footer>
            <Button
              style={{
                color: "#fff",
                "background-color": "dc3545",
                "border-color": "dc3545",
                "border-radius": "3px",
                padding: "7px 25px",
                "margin-bottom": 0,
                "font-size": "13px",
                "font-weight": "400",
              }}
              variant="danger"
              onClick={() => {
                this.toggle();
              }}
            >
              Close
            </Button>

            <Button
              variant="primary"
              onClick={() => {
                this.toggle();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Home;
