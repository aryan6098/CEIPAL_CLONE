import React, { Component } from "react";
import { Navbar, Nav, Form, Dropdown } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { AiOutlineAppstore, AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "../../css/main/Navcom.css";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { Redirect } from "react-router-dom";
class Navbarcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isLogout: false,
    };
  }
  display() {
    this.setState({ show: !this.state.show });
  }
  logout() {
    localStorage.removeItem("user-info");
    this.setState({ isLogout: true });
  }

  render() {
    return (
      <div>
        {this.state.isLogout ? <Redirect to="/" /> : null}
        <>
          <Navbar className="navbar" variant="dark">
            <Navbar.Brand href="/#">
              <img
                id="img"
                src="https://infostride.com/wp-content/uploads/2019/05/logo.png"
                alt=""
              />
            </Navbar.Brand>

            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/essrequest"}>
                ESS
              </Nav.Link>
              <Nav.Link as={Link} to={"/timesheet"}>
                Timesheets
              </Nav.Link>
            </Nav>
            <Form inline className="icon">
              {this.state.show ? (
                <input
                  className="textsearch"
                  type="text"
                  id="textbox"
                  placeholder="&nbsp;Search By Employee Id Empoyee Name Employee Code "
                ></input>
              ) : null}
              <i
                className="a"
                data-tip
                data-for="search"
                type="button"
                onClick={() => this.display()}
              >
                <FiSearch />
              </i>
              <ReactTooltip id="search" effect="solid">
                Search
              </ReactTooltip>

              <Nav.Link
                as={Link}
                to={"/worklist"}
                className="a"
                data-tip
                data-for="Work List"
              >
                <MdNotificationsNone />
              </Nav.Link>
              <ReactTooltip id="Work List" effect="solid">
                Work List
              </ReactTooltip>

              <Dropdown className="add">
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <MdAdd />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item id="title">Quick Links</Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to="./submit_timesheet"
                      style={{ textDecoration: "none" }}
                    >
                      Submit Timesheet
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      to="./submit_bulk_timesheet"
                      style={{ textDecoration: "none" }}
                    >
                      Submit Bulk Timesheet
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <ReactTooltip id="Quick Links" effect="solid">
                Quick Links
              </ReactTooltip>
              <div className="profile-drop">
                <Dropdown>
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                    <CgProfile />
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ width: "auto" }}>
                    <Dropdown.Item id="profile-title">
                      <b>Employee Name </b> <br />
                      (Executive)
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FaRegBuilding />
                      INFOSTRIDE (INDIA)
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <button
                        className="a"
                        id="profile-logout"
                        onClick={() => this.logout()}
                      >
                        Logout
                        <AiOutlineLogout />
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <i className="a" data-tip data-for="App" type="button">
                <AiOutlineAppstore />
              </i>
              <ReactTooltip id="App" effect="solid">
                App
              </ReactTooltip>
            </Form>
          </Navbar>
        </>
      </div>
    );
  }
}

export default Navbarcomp;
