import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Works() {
    return (
    // padding for line spacing
    <div align="center">
      <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Row>
          <Col>
            <h3>
              <b>How Groopy Works</b>
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <img
              src="https://i.imgur.com/BShMTtT.png"
              alt="groopy how it works"
              style={{
                width: "500px",
                height: "200px",
                align: "center",
              }}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ paddingTop: 50 }}>
          <Col style={{ align: "cen" }}>
            <h4>
              <b>
                Simply look for the item under listings, and the group that is
                closest to you!
              </b>
            </h4>
            <h5> Click 'Join Group' to get the link to the telegram group</h5>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ paddingTop: 100 }}>
          <h4>
            <b>
              If the item you are interested in is not listed, you can initiate
              and become the group leader through these steps:
            </b>
          </h4>
        </Row>

        {/* images for instructions */}
        <Row className="justify-content-md-center" style={{ paddingTop: 50 }}>
          <Col>
            <h5>1. Click on ‘Submit a listing’</h5>
          </Col>
          <Col>
            <h5>
              2. Fill in the respective information and create the telegram
              group
            </h5>
          </Col>
          <Col>
            <h5>
              3. Wait for more people to join the group and get the items
              together!
            </h5>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ paddingTop: 10 }}>
          <Col xs={12} sm={4} md={4}>
            <img
              src="https://i.imgur.com/DC5OLKR.png"
              alt="submit"
              width="200"
              height="100"
            />
          </Col>
          <Col xs={12} sm={4} md={4}>
            <img
              src="https://i.imgur.com/Ej1xVyJ.png"
              alt="submit"
              width="200"
              height="200"
            />
          </Col>
          <Col xs={12} sm={4} md={4}>
            <img
              src="https://i.imgur.com/ZanDihz.png"
              alt="submit"
              width="200"
              height="200"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Works;
