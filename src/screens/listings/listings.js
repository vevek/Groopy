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
import firebase from '../../firebase.js' 

let items = []

function renderRow() {

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

    <Row
    className="justify-content-md-center"
    style={{ paddingTop: 50, paddingBottom: 20 }}
        >
    {items.map((item) => (
          <ListingCard
          key={item.id}
          title={item.title}
          image={item.image}
          location={item.location}
          numpeople={item.numpeople}
          category={item.category}
    />
        ))}
      
  </Row>
  </Container>
  </div>
  )
}

function Listings() {
  renderListings()
  return renderRow();
}

function renderListings() {

  const ref = firebase.firestore().collection('listings');

  ref.onSnapshot((querySnapshot) => {
    
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    })
  });

//   for (let i = 0; i < items.length; i += 1) {
//     <ListingCard
//       key={items[i].id}
//       title={items[i].title}
//       image={items[i].image}
//       location={items[i].location}
//       numpeople={items[i].numpeople}
//       category={items[i].category}
// />
//   }

}

export default Listings;
