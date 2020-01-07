import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActorCard from "./Components/ActorCard"
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <ActorCard/>
      </Container>
    </div>
  );
}

export default App;
