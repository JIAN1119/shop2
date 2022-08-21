import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCart } from '../store/store';

import axios from 'axios';

import { Button, Container, Nav, Navbar, Row, Col, Alert } from 'react-bootstrap';


function Detail(props) {

    let { link } = useParams();
    let dispatch = useDispatch();

    let findShoes;
    // let [findShoes, setFindShoes] = useState()
    findShoes = props.shoes.find((a) => { return a.id == link })
    console.log(findShoes)
    // setFindShoes(findShoes = props.shoes.find((a) => { return a.id == link }))

    // console.log(findShoes)


    // =========================================================
    //      상세페이지 처음 진입 시 할인 내용 알럿 떴다가 사라진다
    // =========================================================
    let [showAlert, setShowAlert] = useState(true)
    let [showCartAlert, setShowCartAlert] = useState(false)

    useEffect(() => {
        let timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000)
        console.log('detail 마운트/업데이트 됨')

        return () => {
            clearTimeout(timer)
            console.log('detail 페이지 업데이트/언마운트 됨')
        }
    }, [])

    // =========================================================
    //      장바구니 알럿 뜨고 2초 지나면 사라지게 한다
    // =========================================================
    useEffect(() => {
        let timer = setTimeout(() => {
            setShowCartAlert(false);
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [showCartAlert])

    // =========================================================
    //      상품의 Id를 로컬스토리지에 array로 저장한다
    // =========================================================

    // localStorage.getItem('viewed')
    let pulled = localStorage.getItem(('viewed'))
    let lsItem =  JSON.parse(pulled)
    
    lsItem.unshift(findShoes.id)
    let rmv = [...new Set(lsItem)]
    console.log(rmv)

    localStorage.setItem('viewed', JSON.stringify(rmv))
    console.log('로컬저장완료')


    return (
        <Container>

            {
                showAlert == true ?
                    <Alertbox color="warning" text="2초 안에 구매시 90% 할인" /> :
                    null
            }

            {showCartAlert == true ?
                <Alertbox color="success" text="장바구니에 잘 담았어요 :)" /> :
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
                    <Button onClick={() => {
                        dispatch(addCart({ id: findShoes.id, title: findShoes.title, price: findShoes.price, count: 1 }))
                        setShowCartAlert(true)
                    }} variant='success'>장바구니 담기</Button>
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