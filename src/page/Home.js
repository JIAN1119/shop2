import { useState } from 'react';
import axios from 'axios'


import { Button, Container, Nav, Navbar, Row, Col, Carousel } from 'react-bootstrap';

function Home(props) {

    let [shoes, setShoes] = useState(props.shoes)
    console.log(shoes)
    let testArr = [1, 2, 3, 4]
    let [clickCount, setClickCount] = useState(0)

    return (
        <>
            <Container fluid>
                <Row>
                    <img src="img/bg.png" />
                </Row>
                <Row>
                    {
                        shoes.map((a, i) => {
                            console.log(i + 1 + ' 번째 상품 리스트 생성')
                            return (
                                <Card shoes={a} key={i} />
                            )
                        })
                    }
                </Row>
                <Row>

                    <Button variant="light" onClick={() => {

                        if (clickCount == 0){
                            setClickCount(clickCount + 1)
                            axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
    
                                let shoesCopy = [...shoes, ...result.data]
    
                                console.log('1회클릭')
                                setShoes(shoesCopy)
                            })
                                .catch(() => {
                                    console.log('실패함')
                                })
                                
                            } else if (clickCount == 1){
                                setClickCount(clickCount + 1)
                                axios.get('https://codingapple1.github.io/shop/data3.json').then((result) => {
        
                                    let shoesCopy = [...shoes, ...result.data]
        
                                    console.log('2회클릭')
                                    setShoes(shoesCopy)
                                })
                                    .catch(() => {
                                        console.log('실패함')
                                    })
                                
                                
                        }
                    }}>상품 더보기</Button>

                    {/* 더보기버튼 누르면 데이터 가져와서 기존 데이터 배열에 붙여넣는다 */}

                </Row>
            </Container>
        </>

    )
}

function Card(props) {
    return (
        <Col md={4}>
            <img src={`img/shoes${props.shoes.id}.jpeg`} width="80%" />
            <p className='fs-3 fw-bold'>{props.shoes.title}</p>
            <p className='fs-4 fw-light'>{props.shoes.content}</p>
            <p className='fs-4 fw-bolder'>{props.shoes.price}원</p>
        </Col>
    )

}

export { Home, Card }