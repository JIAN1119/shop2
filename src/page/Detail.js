import { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, Row, Col, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function Detail(props) {
    let [count, setCount]= useState(true)
    let { link } = useParams();

    // 배열 내에서 id가 {link}인 오브젝트를 찾아 전체 값을 반환한다
    let findShoes = props.shoes.find((a) => { return a.id == link })


    // [1] alertbox의 상태값을 저장한다
    let [showAlert, setShowAlert] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000)
        console.log('detail 렌더링후 2초경과')
        
        return ()=>{
                clearTimeout(timer)
                console.log('클린업펑션 동작')
            }
    }, )
    // [3] detail 렌더링된 후 2초 경과시 showAlert 상태 false로 바꾼다


    // 2초 지나면 알럿박스 사라지도록 한다



    return (

        <Container>
<Button onClick={()=>{setCount(!count)}}>df</Button>
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