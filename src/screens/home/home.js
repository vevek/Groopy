import React, { Component } from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import CategoryCard from "../../components/CategoryCard";

const Categories = [
  {
    id: 1,
    title: "Entertainment",
    body: "Find your next favourite game here!",
    type: "Entertainment"
  },
  {
    id: 2,
    title: "Food",
    body: "Feeling hungry? Get some food here!",
    type: "Food"
  },
  {
    id: 3,
    title: "Home Appliances",
    body: "Brighten up your house with new appliances!",
    type: "Home Appliances"
  },
  {
    id: 4,
    title: "Clothing",
    body: "Find suitable clothings that match your style!",
    type: "Clothing"
  },
  {
    id: 5,
    title: "Books",
    body: "Wide genres of books for you to choose from!",
    type: "Books"
  },
  {
    id: 6,
    title: "Electronics",
    body: "Look for the latest devices and gadgets here!",
    type: "Electronics"
  },
  {
    id: 7,
    title: "Kids/Baby",
    body: "Find the perfect item for your little ones.",
    type: "Kids/Baby",
  },
  {
    id: 8,
    title: "Tools",
    body: "Find the perfect tools to fix your stuffs.",
    type: "Tools",
  },
];

function renderRow() {
  const latestCategories = [];
  for (let i = 0; i < Categories.length; i += 1) {
    latestCategories.push(Categories[i]);
  }
  console.log(latestCategories)

  return (
    <div align="center">
      {/* Carousel slideshow */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/tNHKk4a.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100" 
            src="https://i.imgur.com/fx9Eh3v.png"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/QUFFvcm.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Category and class name */}
      <Row
        className="justify-content-md-center"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        {latestCategories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
            body={category.body}
            type={category.type}
          />
        ))}
      </Row>
    </div>
  );
}

function Home(props) {
  return renderRow();
}

export default Home;
