import { useState } from 'react';
import { Button, Container, Nav, Navbar, Row, Col, Carousel } from 'react-bootstrap';

function Home(props) {

    let [shoes, setShoes] = useState(props.shoes)

    return (
        <>
            <Container fluid>
                <Row>
                    <img src="img/bg.png"/>
                </Row>
                <Row>
                    <Card shoes={shoes[0]} />
                    <Card shoes={shoes[1]} />
                    <Card shoes={shoes[2]} />
                </Row>

            </Container>
        </>

    )
}

function Card(props) {
    return (
        <Col md={4}>
            <img src={`img/shoes${props.shoes.id}.jpeg`} width="80%" />
            <p className='fs-3 fw-normal'>{props.shoes.title}</p>
            <p className='fs-3 fw-bolder'>{props.shoes.price}</p>
        </Col>
    )

}

export { Home, Card }