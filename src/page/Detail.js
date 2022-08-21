import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios';

import { Button, Container, Nav, Navbar, Row, Col, Alert } from 'react-bootstrap';


function Detail(props) {
    
    let { link } = useParams();

    
    let [findShoes, setFindShoes] =useState()
    findShoes = props.shoes.find((a)=>{ return a.id == link})

    console.log(props.shoes)
    



    // [1] alertbox의 상태값을 저장한다
    let [showAlert, setShowAlert] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000)
        console.log('detail 마운트/업데이트 됨')

        return () => {
            clearTimeout(timer)
            console.log('detail 페이지 업데이트/언마운트 됨')
        }
    })
    // [3] detail 렌더링된 후 2초 경과시 showAlert 상태 false로 바꾼다


    // 2초 지나면 알럿박스 사라지도록 한다



    return (

        <Container>
            {/* <Button onClick={()=>{setCount(!count)}}>df</Button> */}
            {/* [2] showAlert의 상태값 따라 알럿이 보이거나 사라짐 */}
            {showAlert == true ?
                <Alertbox color="warning" text="2초 안에 구매시 90% 할인" /> :
                null
            }
            <Row>
                <Col md={6}>
                    <img src={`/img/shoes${link}.jpeg`} width="100%" />
                </Col>
                <Col md={6}>
                    <p className='fs-3 fw-semibold'>{findShoes.title}</p>
                    <p>{findShoes.content}</p>

                    <p className='fs-5 fw-semibold'>{findShoes.price + '원'}</p>
                    <Button variant='success'>장바구니 담기</Button>
                </Col>
            </Row>
        </Container>


    )

    function Alertbox(props) {
        return (
            <Alert variant={props.color} >
                {props.text}
            </Alert>
        )
    }
}

export default Detail