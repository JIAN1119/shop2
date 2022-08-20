
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import axios from 'axios'

import { Button, Container, Nav, Navbar, Row, Col, Carousel } from 'react-bootstrap';

import shoesdata from './store/data';
import Detail from './page/Detail';
import { Home, Card } from './page/Home';
import { Cs } from './page/Cs';


function App() {
  let {link} = useParams();
  let [shoes, setShoes] = useState(shoesdata);
  // let findShoes = shoes.find((a)=>{ return a.id == link})

  let navigate = useNavigate();


  return (
    <div className="App">

      <Container fluid>

        <Navbar fixed="top" bg="success" variant="dark">
          <Navbar.Brand onClick={() => { navigate('/') }}>지안마트</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">스토어</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cs') }}>고객센터</Nav.Link>
          </Nav>
        </Navbar>
        <Row className="py-3 my-3">
        </Row>



        <Routes>
          <Route path="/"
            element={
              <div>
                <Home shoes={shoes} />
              </div>} />

          <Route path="/detail/:link" element={<Detail shoes={shoes} />} />

          <Route path="/cs" element={<Cs />}>
            <Route path="qna" element={<div>qna</div>} />
            <Route path="fna" element={<div>fna</div>} />
          </Route>

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


}

export default App;
