import { Button, Card } from 'react-bootstrap';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ComputerIcon from '@material-ui/icons/Computer';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import BuildIcon from '@material-ui/icons/Build';

function getIcon(id) {
    let icon;
    if (id === 1) {
        icon = <SportsEsportsIcon></SportsEsportsIcon>
    } else if (id === 2) {
        icon = <FastfoodIcon></FastfoodIcon>
    } else if (id === 3) {
        icon = <HomeIcon></HomeIcon>
    } else if (id === 4) {
        icon = <PersonIcon></PersonIcon>
    } else if (id === 5) {
        icon = <MenuBookIcon></MenuBookIcon>
    } else if (id === 6) {
        icon = <ComputerIcon></ComputerIcon>
    } else if (id === 7) {
        icon = <ChildFriendlyIcon></ChildFriendlyIcon>
    } else if (id === 8) {
        icon = <BuildIcon></BuildIcon>
    }
    return icon;
}

function CategoryCard(props) {
    let icon = getIcon(props.id);

    return (
        <Card style={{ width: '18rem' }}>
            {icon}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.body}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CategoryCard;