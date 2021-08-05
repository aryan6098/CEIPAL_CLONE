import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class Tilemodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.data,
    };
  }

  render() {
    console.log("gvvgfyt", this.state.show);
    return (
      <>
        {console.log("props", this.props.data)};
        {/* <Home fun={props.show} /> */}
        <Modal show={this.props.data}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.props.fun();
              }}
            >
              Close
            </Button>

            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
        {/* <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Add Dashboard Tile</Modal.Title>
        </Modal.Header>
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
        <Modal.Footer>
          <Button variant="primary" onClick={toggle}>
            Submit
          </Button>
          <Button variant="secondary" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal> */}
      </>
    );
  }
}
