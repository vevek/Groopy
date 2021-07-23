import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import CategoryCard from '../../components/CategoryCard';

const Categories = [
    {
        id: 1,
        title: "Entertainment",
        body: 'Find your next game here!', 
    },
    {
        id: 2,
        title: "Food",
        body: 'Feeling hungry? Click here!', 
    },
    {
        id: 3,
        title: "Home Appliances",
        body: 'Want to brighten up your house? Click here!', 
    },
    {
        id: 4,
        title: "Clothing",
        body: 'Find suitable clothings that match your style!', 
    },
    {
        id: 5,
        title: "Books",
        body: 'Wide genres of books for you to choose from!', 
    },
    {
        id: 6,
        title: "Electronics",
        body: 'Look for the latest devices here!', 
    },
    {
        id: 7,
        title: "Kids/Baby",
        body: 'Find the perfect item for your little ones.', 
    },
    {
        id: 8,
        title: "Tools",
        body: 'Find the perfect tools to fix your stuffs.', 
    },
];

function renderRow() {
    const latestCategories = [];
    for (let i = 0; i < Categories.length; i += 1) {
        latestCategories.push(Categories[i]);
    }

    return (
        <div align="center">
            <Row>
            {latestCategories.map((category) => (
                <CategoryCard
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    body={category.body} />
            ))}
            </Row>
        </div>
    );
}

function Home(props) {
    return (
        renderRow() 
    );
}

export default Home;
