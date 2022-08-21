
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';

import { Button, Container, Nav, Navbar, Row, Col, ListGroup, Card } from 'react-bootstrap';

import shoesdata from './store/data';
import Detail from './page/Detail';
import Cart from './page/Cart';
// import { Home, Card } from './page/Home';
import { Cs } from './page/Cs';


function App() {
  let { link } = useParams();
  let navigate = useNavigate();

  let [shoes, setShoes] = useState(shoesdata);

  let shoes2 = useSelector((state) => { return state.shoesdata })
  let [moreshoes, setMoreShoes] = useState(shoes)


  // Home컴포넌트 변수
  let [clickCount, setClickCount] = useState(0)
  let [serverData, setServerData] = useState();

  // 로컬스토리지에 빈 배열을 저장한다 > 최근 본 상품 기능
  useEffect(() => {
    localStorage.setItem('viewed', JSON.stringify([]))
    console.log('로컬스토리지 저장완료')
  }
    , [])


  let viewedId;
  viewedId = localStorage.getItem('viewed')  
  viewedId = JSON.parse(viewedId)
  console.log(viewedId)
  return (
    <div className="App">

      <Container fluid>

        <Navbar fixed="top" bg="success" variant="dark">
          <Navbar.Brand onClick={() => { navigate('/') }}>지안마트</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/store') }}>스토어</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cs') }}>고객센터</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
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
                  <Card style={{ width: '18rem' }}>
                    <Card.Header>최근 본 상품</Card.Header>
                    <ListGroup variant="flush">
                    </ListGroup>
                  </Card>
{


  viewedId.map((a, i)=>{
    return (
      <img src={`img/shoes${a}.jpeg`} width="20%" />

  )})
  
}
  <Viewed />
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


                    }
                  }}>상품 더보기</Button>
                </Row>
                {/* <Outlet></Outlet> */}
              </div>} />

          <Route path="/detail/:link" element={<Detail shoes={moreshoes} />} />

          <Route path="/cs" element={<Cs />}>
            <Route path="qna" element={<div>qna</div>} />
            <Route path="fna" element={<div>fna</div>} />
          </Route>

          <Route path="/store" element={<div>스토어페이지입니다</div>} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={
            <div>
              <p className='fs-1'>404</p>
              <p className='fs-1'>존재하지 않는 페이지입니다</p>
            </div>
          }></Route>
        </Routes>


      </Container>


    </div>
  );
  // function Card(props) {
  //   let navigate = useNavigate();

  //   return (
  //     <Col md={4} >
  //       <div onClick={() => { navigate(`/detail/${props.shoes.id}`) }} >
  //         <img src={`img/shoes${props.shoes.id}.jpeg`} width="80%" />
  //         <p className='fs-3 fw-bold'>{props.shoes.title}</p>
  //         <p className='fs-6 fw-light'>{props.shoes.content}</p>
  //         <p className='fs-5 fw-bolder'>{props.shoes.price}원</p>

  //       </div>
  //     </Col>
  //   )

  // }


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
            <img src={`/img/shoes1.jpeg`} width="100%" />
          </ListGroup.Item>

    )
  }


}





export default App;
