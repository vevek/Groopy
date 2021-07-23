import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

function Submit() {
  return (
    // padding for line spacing
    <div align="center">
      <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Row className="justify-content-md-center">
          <img
            src="https://i.imgur.com/5aWelby.png"
            style={{
              width: "250px",
              height: "300px",
            }}
          />
        </Row>

        <Row className="justify-content-md-center" style={{ paddingTop: 10 }}>
          <Col>
            <h3>
              <b>Submit a Groopy Listing</b>
            </h3>
          </Col>
        </Row>

        {/* Form edit */}
        <Form style={{ paddingTop: 50 }}>
          {/* list name */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name of item:</Form.Label>
            <Form.Control type="text" placeholder="Listing name" />
          </Form.Group>

          {/* Category */}
          <Row className="justify-content-md-center">
            <Col>
              <h6>Category</h6>
            </Col>
          </Row>

          <DropdownButton
            id="dropdown-basic-button"
            title="Choose a Category"
            style={{ paddingBottom: 20 }}
            variant="secondary"
          >
            <Dropdown.Item href="#/action-1">Entertainment</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Food</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Home Appliances</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Fashion</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Beauty</Dropdown.Item>
            <Dropdown.Item href="#/action-6">
              Books and Stationery
            </Dropdown.Item>
            <Dropdown.Item href="#/action-7">Computer</Dropdown.Item>
            <Dropdown.Item href="#/action-8">Kids and Baby</Dropdown.Item>
          </DropdownButton>

          {/* Location */}
          <Row className="justify-content-md-center">
            <Col>
              <h6>Location</h6>
            </Col>
          </Row>

          <DropdownButton
            id="dropdown-basic-button"
            title="Choose a Location"
            style={{ paddingBottom: 20 }}
            variant="secondary"
          >
            <Dropdown.Item href="#/action-1">North</Dropdown.Item>
            <Dropdown.Item href="#/action-2">South</Dropdown.Item>
            <Dropdown.Item href="#/action-3">East</Dropdown.Item>
            <Dropdown.Item href="#/action-4">West</Dropdown.Item>
          </DropdownButton>

          {/* Telegram link */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Telegram group link:</Form.Label>
            <Form.Control type="text" placeholder="Link" />
          </Form.Group>

          {/* File upload */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Link to image:</Form.Label>
            <Form.Control type="text" placeholder="Image URL" />
          </Form.Group>

          {/* Submit form */}
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              alert("Submitted!");
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Submit;
