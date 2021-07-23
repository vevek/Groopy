import React, { Component } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Card,
  Form,
  Dropdown,
  DropdownButton,
  } from "react-bootstrap";
import ListingCard from "../../components/ListingCard";


function Listings() {



  return (
      // padding for line spacing
      <div align="center">
        <Container style={{ paddingTop: 50, paddingBottom: 50 }}>

        <Row
            className="justify-content-md-center"
            style={{ paddingTop: 10, paddingBottom: 20 }}
          >
            <Col>
              <h1>
                <b>Listings</b>
              </h1>
            </Col>
        </Row>

          {/* Filter by category */}
          <Row className="justify-content-md-center">
            <Col>
              <h6>Filter by location</h6>
            </Col>
          </Row>

          <DropdownButton
            id="dropdown-basic-button"
            title="Choose a location"
            style={{ paddingBottom: 20 }}
            variant="secondary"
          >
            <Dropdown.Item href="#/action-1">North</Dropdown.Item>
            <Dropdown.Item href="#/action-2">South</Dropdown.Item>
            <Dropdown.Item href="#/action-3">East</Dropdown.Item>
            <Dropdown.Item href="#/action-4">West</Dropdown.Item>
          </DropdownButton>

          {/* Listing */}
          <Row align="center" style={{ paddingTop: 10, paddingBottom: 20 }}>

          <ListingCard
            title="Spanish mackerel"
            image={"https://i.imgur.com/mp826UB.jpg"}
            category="Groceries"
            location="West"
            numpeople="20" />
          
          <ListingCard
            title="Nike Bag"
            image={"https://i.imgur.com/nYyc66f.jpg"}
            category="Fashion"
            location="East"
            numpeople="15" />

          </Row>

          {/* Listing 2 */}
          <Row align="center" style={{ paddingTop: 10, paddingBottom: 20 }}>
            
          <ListingCard
            title="How to win 1st prize in LifeHack 2021"
            image={"https://i.imgur.com/Tf9dgjB.jpg"}
            category="Books"
            location="North"
            numpeople="100" />
          
          <ListingCard
            title="Huggies Diapers"
            image={"https://i.imgur.com/mp826UB.jpg"}
            category="Kids"
            location="South"
            numpeople="5" />

          </Row>

        </Container>
      </div>
    );
}

export default Listings;
