
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col, Carousel } from 'react-bootstrap';
import { useState } from 'react';
import shoesdata from './store/data'


function App() {

  let [shoes, setShoes] = useState(shoesdata)
  console.log(shoes)

  return (
    <div className="App">

      <Container fluid>
        <Navbar fixed="top" bg="success" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>

        <Row>
          <img src="img/bg.png" />
        </Row>

        <Row>
          <Card shoes={shoes[0]}/>
          <Card shoes={shoes[1]}/>
          <Card shoes={shoes[2]}/>
      
        </Row>

      </Container>


    </div>
  );

  function Card(props) {
    return (
      <Col md={4}>
        <img src={`img/shoes${props.shoes.id+1}.jpeg`} width="80%" />
        <p className='fs-3 fw-normal'>{props.shoes.title}</p>
        <p className='fs-3 fw-bolder'>{props.shoes.price}</p>
      </Col>
    )

  }
}

export default App;
