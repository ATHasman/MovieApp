import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ActorsData from '../Data/ActorsData'


// AcotrCard Props: 
//      actorDataIndex (number) - in ActorsData model objArray
//      
export default class ActorCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 

        return (   
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ActorsData[0].image} />
                <Card.Body>
                    <Card.Title><Card.Link href={ActorsData[0].imdbLink}>{`${ActorsData[0].firstName} ${ActorsData[0].lastName}`}</Card.Link></Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Date of Birth: {ActorsData[0].birthDay}</ListGroupItem>
                        <ListGroupItem>Age: {ActorsData[0].birthDay}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            </div>
          );
    }
}
 
// export default ActorCard;