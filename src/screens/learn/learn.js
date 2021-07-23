import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

function Learn() {
  return (
    // padding for line spacing
    <div align="center">
      <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Row className="justify-content-md-center">
          <img
            src="https://i.imgur.com/kLNo5rx.png"
            alt="wisdom"
            // style={{
            //   width: "300px",
            //   height: "300px",
            // }}
          />
        </Row>

        <Row
          className="justify-content-md-center"
          style={{ paddingTop: 50, paddingBottom: 20 }}
        >
          <Col>
            <h3>
              <b>
                Don't keep all the knowledge on how you buy the best items and
                lobangs to yourself!
              </b>
            </h3>
          </Col>
        </Row>

        <Button variant="primary" size="lg">
          Share your wisdom now
        </Button>

        <Row 
        className="justify-content-md-center"
        style={{ paddingTop: 50, paddingBottom: 20 }}>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Read On</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>


        </Row>

        <CardColumns
          className="justify-content-md-center"
          style={{ paddingTop: 50, paddingBottom: 20 }}
        >
          <Card>
            <Card.Img variant="top" src="https://i.imgur.com/CbBzy51.png" />
            <Card.Body>
              <Card.Title>
                <b>6 Tips for Selecting the Perfect Apple</b>
              </Card.Title>
              <Card.Text>
                An apple a day keeps the doctor away? That might be true, but
                how do you choose the best apple in the first place?
              </Card.Text>
            </Card.Body>
            <Button variant="primary" size="lg">
              Read on
            </Button>
          </Card>
        </CardColumns>
      </Container>
    </div>
  );
}

export default Learn;
