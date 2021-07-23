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

function Complete() {
  return (
    // padding for line spacing
    <div align="center">
      <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Row className="justify-content-md-center">
          <img
            src="https://i.imgur.com/mH4iejK.png"
            alt="completed"
            style={{
              width: "250px",
              height: "300px",
            }}
          />
        </Row>

        <Row className="justify-content-md-center" style={{ paddingTop: 10 }}>
          <Col>
            <h3>
              <b>Submitted!</b>
            </h3>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Complete;
