import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import "./learn.css";

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
          <h3>
            <b>
              Don't keep all the knowledge on how you buy the best items and
              lobangs to yourself!
            </b>
          </h3>
        </Row>

        <Row
          className="justify-content-md-center"
          style={{ paddingTop: 10, paddingBottom: 50 }}
        >
          <h5>
            Share your favourite articles or write your own to share your
            knowledge with others!
          </h5>
        </Row>

        <Button
          style={{ background: "#F99791", border: 0 }}
          id="readbtn"
          size="lg"
          href="https://forms.gle/vvCHfQwEEj1Dk5p87"
          target="_blank"
        >
          Share your wisdom now
        </Button>

        <Row
          className="justify-content-md-center"
          style={{ paddingTop: 70, paddingBottom: 20 }}
        >
          <Col>
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/CbBzy51.png" />
              <Card.Body>
                <Card.Title>
                  <b>6 Tips for Selecting the Perfect Apple</b>
                </Card.Title>
                <Card.Text>
                  An apple a day keeps the doctor away? That might be true, but
                  how do you choose the best apple in the first place?
                </Card.Text>
                <Button
                  style={{ background: "#F99791", border: 0 }}
                  id="readbtn"
                  href="https://www.stemilt.com/stem-blog/6-tips-for-selecting-the-perfect-apple/"
                  target="_blank"
                >
                  Read On
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/ccoHGWS.png" />
              <Card.Body>
                <Card.Title>
                  <b>100 Coolest Tech and Gadgets you need to get</b>
                </Card.Title>
                <Card.Text>
                  Your money could be better spent on getting these tech gadgets
                  that can help you.
                </Card.Text>
                <Button
                  style={{ background: "#F99791", border: 0 }}
                  id="readbtn"
                  href="https://www.bestproducts.com/tech/g864/cool-tech-products-you-need/"
                  target="_blank"
                >
                  Read On
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row
          className="justify-content-md-center"
          style={{ paddingTop: 50, paddingBottom: 20 }}
        >
          <Col>
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/K4pEArR.png" />
              <Card.Body>
                <Card.Title>
                  <b>The Best Books I read during the CB period</b>
                </Card.Title>
                <Card.Text>
                  Lockdowns are something that we are all too familiar with. But
                  are you familiar with these books?
                </Card.Text>
                <Button
                  style={{ background: "#F99791", border: 0 }}
                  id="readbtn"
                  href="https://fivebooks.com/best-books/singapore-sharlene-teo/"
                  target="_blank"
                >
                  Read On
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "35rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/lSBCrLZ.png" />
              <Card.Body>
                <Card.Title>
                  <b>Which trousers should you get in Singapore?</b>
                </Card.Title>
                <Card.Text>
                  Straight-leg, skinny, and boyfriend jeans are mainstay
                  silhouettes in most denim wardrobes.
                </Card.Text>
                <Button
                  style={{ background: "#F99791", border: 0 }}
                  id="readbtn"
                  href="https://www.vogue.com/article/best-criss-cross-jeans"
                  target="_blank"
                >
                  Read On
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Learn;
