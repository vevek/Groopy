import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    // padding for line spacing
    <div align="center">
      <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Row className="justify-content-md-center">
          <img
            src="https://i.imgur.com/KVZbKja.png"
            alt="groopy logo"
            style={{
              width: "300px",
              height: "300px",
            }}
          />
        </Row>

        <Row className="justify-content-md-center" style={{ paddingTop: 50 }}>
          <Col>
            <h3>
              <b>About Us</b>
            </h3>
            <h5>
              Groopy is a fuss-free group buy platform that connects like-minded
              buyers together.
            </h5>
          </Col>
        </Row>

        <Row className="justify-content-md-center" style={{ paddingTop: 50 }}>
          <Col>
            <h3>
              <b>Contact Us</b>
            </h3>
            <h5>Email: contact@groopy.com</h5>
            <h5>Address: 21 Heng Mui Keng Terrace, Singapore 119613</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
