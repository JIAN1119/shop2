import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCart, addCartQty } from '../store/store';

import axios from 'axios';

import { Button, Container, Nav, Navbar, Row, Col, Alert, Tab, Tabs } from 'react-bootstrap';


function Detail(props) {
    let [tabidx, setTabidx] = useState(0)

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
    let lsItem = JSON.parse(pulled)

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
                        // dispatch(addCartQty())
                    }} variant='success'>장바구니 담기</Button>
                </Col>
            </Row>
            <Row>
                {/* 하단 탭영역  */}
                <DetailTab />


                {/* <Nav variant="tabs" defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link eventKey="link0" onClick={() => {
                            setTabidx(0);
                            console.log('탭1')
                        }}>버튼0</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link1" onClick={() => {
                            setTabidx(1);
                            console.log('탭2')
                        }}>버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link2" onClick={()=>{
                            setTabidx(2);
                            console.log('탭3')
                        }}>버튼2</Nav.Link>
                    </Nav.Item>
                </Nav> */}

                {/* <TabContent tabidx={tabidx} />; */}

             
            </Row>
        </Container>


    )
}


function Alertbox(props) {
    return (
        <Alert variant={props.color} >
            {props.text}
        </Alert>
    )
}


// 탭 항목 UI - 1.부트스트랩
function DetailTab() {
        const [key, setKey] = useState('info');
    
        return (
                <Tabs
                    id="controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="info" title="상품정보">
                        <div>
                            가을 하나에 차 둘 불러 듯합니다. 흙으로 내일 다 노루, 내 봅니다. 옥 동경과 시와 그러나 하늘에는 어머니 써 벌레는 봅니다. 시와 별 별 이름을 같이 묻힌 추억과 둘 있습니다. 하나에 벌써 내 시인의 계집애들의 소학교 나의 까닭입니다. 오는 하나에 옥 아직 이름자 못 나는 된 어머니, 봅니다. 이름과, 것은 언덕 자랑처럼 애기 봅니다. 많은 아스라히 이런 그러나 벌레는 별에도 듯합니다. 무엇인지 언덕 오면 이웃 이런 경, 나는 차 이름자를 봅니다.
                        </div>
                    </Tab>
                    <Tab eventKey="etcInfo" title="베송/교환/환불">
                        <div>
                            이 벌레는 같이 하나의 가슴속에 무엇인지 별을 피어나듯이 있습니다. 별빛이 아침이 같이 그리고 이런 헤일 가슴속에 별 봅니다. 이름을 헤는 하나에 그리고 까닭입니다. 어머니, 계절이 이름과, 헤는 별들을 거외다. 불러 나는 오는 너무나 이름자를 이 듯합니다. 속의 말 옥 아침이 봅니다. 많은 같이 한 파란 북간도에 거외다. 별에도 이름을 어머님, 당신은 피어나듯이 동경과 까닭입니다. 걱정도 하나에 별 다 우는 위에 부끄러운 별 봅니다. 나는 별 새워 오는 둘 너무나 어머니 경, 별을 있습니다.
                        </div>
                    </Tab>
                    <Tab eventKey="review" title="상품평">
                        <div>
                            아스라히 마디씩 별에도 봅니다. 봄이 언덕 부끄러운 봅니다. 나의 나는 하나 계십니다. 위에도 못 벌레는 슬퍼하는 새워 마리아 멀리 계십니다. 별 한 못 멀리 나는 흙으로 사랑과 부끄러운 있습니다. 하나의 헤는 아직 새워 밤이 이름과 묻힌 경, 이웃 있습니다. 이름자 북간도에 파란 까닭입니다. 새워 소녀들의 아무 부끄러운 쉬이 까닭이요, 다하지 겨울이 릴케 있습니다. 별 릴케 차 둘 가득 무성할 계십니다. 아직 피어나듯이 나는 별 어머님, 써 듯합니다. 이름을 시와 멀듯이, 무덤 당신은 듯합니다.
                        </div>
                    </Tab>
                </Tabs>
            );
        }
        
// 탭 항목 UI - 2.직접만들기
        function TabContent({ tabidx }) {
            if (tabidx === 0)
            return (
                <div>111111</div>
                )
    if (tabidx === 1)
        return (
            <div>2222222</div>
        )
    if (tabidx === 2)
        return (
            <div>33333333333</div>
        )
}



export default Detail