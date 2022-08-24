
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';

import { BsCart, BsFillCircleFill } from "react-icons/bs";
import { RiCheckboxBlankCircleFill, RiNumber1 } from "react-icons/ri";
import { Button, Container, Nav, Navbar, Row, Col, ListGroup, Card, Badge } from 'react-bootstrap';

import shoesdata from './store/data';
import Detail from './page/Detail';
import Cart from './page/Cart';
// import { Home, Card } from './page/Home';

import { Order } from './page/Order';
import Test from './page/test';
import { Cs, Qna, Fna, Notice } from './page/Cs';


function App() {
  let { link } = useParams();
  let navigate = useNavigate();

  let [shoes, setShoes] = useState(shoesdata); // 상품 데이터 (원본)

  // 처음 홈에 출력되는 상품
  let shoes2 = useSelector((state) => { return state.shoesdata })

  // 장바구니 내 상품
  let cartItem = useSelector((state) => { return state.cart })
  let cartNum = shoes2.length

  let [moreshoes, setMoreShoes] = useState(shoes) // 상품 데이터 (갱신됨)


  // Home컴포넌트 변수
  let [clickCount, setClickCount] = useState(0)
  let [serverData, setServerData] = useState();

  // 로컬스토리지에 빈 배열을 저장한다 > 최근 본 상품 기능
  useEffect(() => {
    localStorage.setItem('viewed', JSON.stringify([]))
    console.log('로컬스토리지 저장완료')
  }
    , [])


  // 카트에 상품 추가되면, 뱃지 숫자 변경한다
  // 카트 내 리스트 추가 감지하거나, store내에서 변경 감지한다
  // useEffect(()=>{

  // },[카트 변경값])

  let viewedId;
  viewedId = localStorage.getItem('viewed')
  viewedId = JSON.parse(viewedId)
  console.log(viewedId)
  return (
    <div className="App">

      <Container fluid>

        <Navbar className="px-3" fixed="top" bg="light" variant="light">
          <Navbar.Brand onClick={() => { navigate('/') }}>지안마트</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/store') }}>스토어</Nav.Link>
            {/* <Nav.Link onClick={() => { navigate('/detail') }}>detail</Nav.Link> */}
            <Nav.Link onClick={() => { navigate('/cs') }}>고객센터</Nav.Link>
          </Nav>

          <Nav>
            {/* <Nav.Link className='justify-content-end' onClick={() => { navigate('/cart') }}>장바구니</Nav.Link> */}

            {/* 장바구니 아이콘 */}
            <Nav.Link onClick={() => { navigate('/cart') }}>
              <div style={{ position: 'relative' }}>
                <BsCart style={{ strokeWidth: '0.8', fontSize: '2rem', color: 'black', strokeLinecap: 'round' }} />

                <div style={{ position: 'absolute', top: '-30%', right: '-20%' }}>
                  <Badge className="p-1" bg="danger" text="light">
                    {cartItem.length}
                  </Badge>
                </div>
              </div>
            </Nav.Link>
          </Nav>



        </Navbar>
        <Row className="py-3 my-3">
        </Row>

        <Routes>
          <Route path="/"
            element={
              <div>
                <Row>
                  <img src="img/bg.png" />
                </Row>

                <Row>
                  <Col sm={4}>
                    <Card style={{ width: '100%' }}>
                      <Card.Header>최근 본 상품</Card.Header>
                      <ListGroup>

                        {

                          // 최근 본 상품이 있다면 이미지 보여주고, 없다면 텍스트 출력
                          viewedId.length > 0 ?

                            viewedId.map((a, i) => {
                              return (
                                <ListGroup.Item>
                                  <img src={`/img/shoes${a}.jpeg`} width="80%"
                                    onClick={() => {
                                      navigate(`/detail/${a}`)
                                    }} />
                                </ListGroup.Item>
                              )
                            })
                            :
                            <ListGroup className='p-5 my-5'>
                              최근 본 상품이 없어요 :(
                            </ListGroup>}
                      </ListGroup>

                    </Card>
                  </Col>
                </Row>

                <Home />
                <Row>
                  <Button variant="light" onClick={() => {
                    if (clickCount == 0) {
                      setClickCount(clickCount + 1)
                      console.log('1회클릭')
                      axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                        let shoesCopy = [...moreshoes, ...result.data];
                        setMoreShoes(shoesCopy);
                        console.log(moreshoes)
                      })
                        .catch(() => {
                          console.log('요청실패')
                        })

                    } else if (clickCount == 1) {
                      setClickCount(clickCount + 1)
                      console.log('2회클릭')
                      axios.get('https://codingapple1.github.io/shop/data3.json').then((result) => {
                        let shoesCopy = [...moreshoes, ...result.data];
                        setMoreShoes(shoesCopy);
                        console.log(moreshoes)
                      })
                        .catch(() => {
                          console.log('요청실패')
                        })
                    } else {
                      console.log('3ghl')

                    }
                  }}>상품 더보기</Button>

{ clickCount > 1 ? <div className='my-3'>더 보여줄 상품이 없어요 :(</div> : null}

                </Row>
                {/* <Outlet></Outlet> */}
              </div>} />

          <Route path="/detail/:link" element={<Detail shoes={moreshoes} cartNum={cartNum} />} />

          <Route path="/cs" element={<Cs />}>
            <Route path="qna" element={<div>qna</div>} />
            <Route path="fna" element={<div>fna</div>} />
          </Route>

          <Route path="/store" element={<div>스토어페이지입니다</div>} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/order" element={<Order />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={
            <div>
              <p className='fs-1'>404</p>
              <p className='fs-1'>존재하지 않는 페이지입니다</p>
            </div>
          }></Route>
        </Routes>


      </Container>


    </div >
  );



  function Home() {

    return (
      <Row>
        {
          moreshoes.map((a, i) => {
            console.log(i + 1 + ' 번째 상품 리스트 생성')
            return (
              <Col md={4} >
                <div onClick={() => { navigate(`/detail/${a.id}`) }} >
                  <img src={`img/shoes${a.id}.jpeg`} width="80%" />
                  <p className='fs-3 fw-bold'>{a.title}</p>
                  <p className='fs-6 fw-light'>{a.content}</p>
                  <p className='fs-5 fw-bolder'>{a.price}원</p>

                </div>
              </Col>

              // <Card shoes={a} key={i} />
            )
          })
        }
      </Row>


    )
  }

  function Viewed(props) {

    return (
      <ListGroup.Item>
        <img src={`/img/shoes1.jpeg`} width="80%" />
      </ListGroup.Item>

    )
  }


}





export default App;
