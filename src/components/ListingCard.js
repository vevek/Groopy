import React from "react";
import { 
  Col, 
  Button, 
  Card,
} from "react-bootstrap";

function ListingCard(props) {
    return (
        <Col>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                  <Card.Title>
                        <b>{props.title}</b>
                  </Card.Title>
                  <Card.Text>
                        <p>Category: {props.category}</p>
                    <p>Location group: {props.location}</p>
                    <p>No. of people in the group: {props.numpeople} </p>
                  </Card.Text>
                  <Button variant="primary">Join group</Button>
                </Card.Body>
              </Card>
            </Col>
    );
}

export default ListingCard;
