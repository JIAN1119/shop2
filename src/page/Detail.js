import { useState } from 'react';
import { Button, Container, Nav, Navbar, Row, Col, Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function Detail(props) {
    let {link} = useParams();
    // console.log(Number(id)+1)
    // console.log(props.shoes[0].id)
    
    // 배열 내에서 id가 {link}인 오브젝트를 찾아 전체 값을 반환한다
    let findShoes = props.shoes.find((a)=>{ return a.id == link})

    console.log(findShoes.title)

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={`/img/shoes${link}.jpeg`} width="100%" />
                </Col>
                <Col md={6}>
                    <p className='fs-3 fw-semibold'>{findShoes.title}</p>
                    <p>{findShoes.content}</p>
                    <p className='fs-5 fw-semibold'>{findShoes.price+'원'}</p>
                    <Button variant='success'>장바구니 담기</Button>
                </Col>
            </Row>
        </Container>


    )
}

export default Detail