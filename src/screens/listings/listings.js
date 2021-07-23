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

let items = []

function Listings(props) {
  
  let latestItems = [];
  const [refresh, setRefresh] = useState(false);
  const [filterType, setFilter] = useState("All");
  let count = 0;
  let stop = false;

  const ref = firebase.firestore().collection('listings');
  ref.onSnapshot((querySnapshot) => {
        setRefresh(true);
    querySnapshot.forEach((doc) => {
        items.push(doc.data());
          
    })
  })

  for (let i = 0; i < items.length; i += 1) {
    if (filterType === "All") {
      latestItems.push(items[i]);
    } else if (filterType === items[i].category) {
      latestItems.push(items[i]);
    }
  }
  

  
  console.log(latestItems)

  return (
    // padding for line spacing
    <div align="center">
      
      {renderHeader()}

      <DropdownButton
        id="dropdown-basic-button"
        title="Choose a Category"
        style={{ paddingBottom: 20 }}
        variant="secondary"
      >
        <Dropdown.Item
          href="#/action-0"
          onClick={() => {
            setFilter("All");
          }}>All</Dropdown.Item>
        <Dropdown.Item
          href="#/action-1"
          onClick={() => {
            setFilter("Entertainment");
          }}>Entertainment</Dropdown.Item>
        <Dropdown.Item 
          href="#/action-2"
          onClick={() => {
              setFilter("Home Appliances");
          }}>Home Appliances</Dropdown.Item>
        <Dropdown.Item 
          href="#/action-3"
          onClick={() => {
              setFilter("Food");
          }}>Food</Dropdown.Item>
        <Dropdown.Item 
          href="#/action-4"
          onClick={() => {
              setFilter("Kids/Baby");
          }}>Kids/Baby</Dropdown.Item>
        <Dropdown.Item 
          href="#/action-5"
          onClick={() => {
              setFilter("Tools");
          }}>Tools</Dropdown.Item>
        <Dropdown.Item 
          href="#/action-6"
          onClick={() => {
              setFilter("Books");
          }}>Books</Dropdown.Item>
        <Dropdown.Item 
          href="#/action-7"
          onClick={() => {
              setFilter("Clothing");
          }}>Clothing</Dropdown.Item>
        <Dropdown.Item 
          href="#/action-8"
          onClick={() => {
              setFilter("Electronics");
          }}>Electronics</Dropdown.Item>
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
