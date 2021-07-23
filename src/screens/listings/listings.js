import React, { Component, useState, useEffect } from "react";
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Dropdown,
  DropdownButton,
  } from "react-bootstrap";
import ListingCard from "../../components/ListingCard";
import firebase from '../../firebase.js' 

const items = []

function Listings(props) {
  const latestItems = [];
  const [refresh, setRefresh] = useState(false);

  const ref = firebase.firestore().collection('listings');
  ref.onSnapshot((querySnapshot) => {
        setRefresh(true);
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        })
  })

  for (let i = 0; i < items.length; i += 1) {
      latestItems.push(items[i]);
  }
  
  console.log(latestItems)

  return (
    // padding for line spacing
    <div align="center">
      
      {renderHeader()}

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
        {latestItems.map((item) => (
          <ListingCard
            id={item.id}
            title={item.title}
            image={item.image}
            location={item.location}
            numpeople={item.numpeople}
            category={item.category}
            />
        ))}
      </Row>
  </div>
  )
}
  
function renderHeader() {
  return (
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
  )
}
export default Listings;
