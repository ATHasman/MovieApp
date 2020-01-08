import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ActorsData from '../Data/ActorsData.json'
import actorModel from '../Data/ActorModel.js'


// AcotrCard Props: 
//      actorDataIndex (number) - in ActorsData model objArray
//      
export default class ActorCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            key : ""
            
         }
    }
    render() { 
        const displayActor = new actorModel (ActorsData[0]);
        const displayActorAge = displayActor.calcAge();
        return (   
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={displayActor.image} />
                <Card.Body>
                    <Card.Title><Card.Link href={displayActor.imdbLink}>{`${displayActor.firstName} ${displayActor.lastName}`}</Card.Link></Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Date of Birth: {displayActor.birthDay}</ListGroupItem>
                        <ListGroupItem>Age: {displayActorAge}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
            </div>
          );
    }
}
 