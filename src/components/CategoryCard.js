import { Button, Card } from 'react-bootstrap'; 
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ComputerIcon from '@material-ui/icons/Computer';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import BuildIcon from '@material-ui/icons/Build';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Listings from '../screens/listings/listings';

function getIcon(id) {
    let icon;
    if (id === 1) {
        icon = <SportsEsportsIcon style={{ fontSize: 80, color: 'gray' }}></SportsEsportsIcon>
    } else if (id === 2) {
        icon = <FastfoodIcon style={{ fontSize: 80, color: 'gray' }}></FastfoodIcon>
    } else if (id === 3) {
        icon = <HomeTwoToneIcon style={{ fontSize: 80, color: 'gray' }}></HomeTwoToneIcon>
    } else if (id === 4) {
        icon = <PersonIcon style={{ fontSize: 80, color: 'gray' }}></PersonIcon>
    } else if (id === 5) {
        icon = <MenuBookIcon style={{ fontSize: 80, color: 'gray' }}></MenuBookIcon>
    } else if (id === 6) {
        icon = <ComputerIcon style={{ fontSize: 80, color: 'gray' }}></ComputerIcon>
    } else if (id === 7) {
        icon = <ChildFriendlyIcon style={{ fontSize: 80, color: 'gray' }}></ChildFriendlyIcon>
    } else if (id === 8) {
        icon = <BuildIcon style={{ fontSize: 80, color: 'gray' }}></BuildIcon>
    }
    return icon;
}

function CategoryCard(props) {
    let icon = getIcon(props.id);

    return (
        <Card style={{ width: '18rem', background: "white" }}>
            <div class="align-self-center mt-4">
            {icon}
            </div>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.body}</Card.Text>
                <Button
                    style={{ background: "#F99791", border: 0 }}
                    id="sublist"
                    className="mt-auto"
                    href="/listings-page"
                    >Go</Button>
            </Card.Body>
        </Card>
    );
}

export default CategoryCard;