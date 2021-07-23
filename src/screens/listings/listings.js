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
    if (items[i].category === props.type) {
      latestItems.push(items[i]);
    }
  }
  
  console.log(latestItems)

  return (
    // padding for line spacing
    <div align="center">
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
  
export default Listings;
