import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
<<<<<<< Updated upstream
=======
import { Nav, Accordion, Table, Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import noticeData from '../store/noticeData';
// import { fnadata } from './../store/csData.js'
>>>>>>> Stashed changes


function Cs (){

<<<<<<< Updated upstream
    return(
        <div>
            <p className='fs-1'>고객센터</p>
            <p>(공통 : 탭메뉴 만들기)</p>
            <Outlet/>
            <p>하위경로 영역 시작</p>

        </div>
=======
    // let fnaData = useSelector((state) => { return state.csFnaData })
    let fnaData = useSelector((state) => { return state.fnadata })
    let noticeData = useSelector((state) => { return state.noticeData })

    console.log(fnaData);
    console.log(noticeData);

    return (
        <div>
            <p className='fs-1'>고객센터</p>
            <Nav justify variant="tabs" defaultActiveKey="0">
                <Nav.Item>
                    <Nav.Link eventKey="0" onClick={() => {
                        navigate('fna')
                    }}>자주묻는질문</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1" onClick={() => {
                        navigate('notice')
                    }}>공지사항</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" onClick={() => {
                        navigate('qna')
                    }}>문의하기</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet />
        </div>

    )
}

function Qna() {
    // let navigate = useNavigate()
    // let fnaData = useSelector((state) => { return state.csFnaData })
    // console.log(fnaData);

    return (
        <>
            <p className="fs-4 fw-bolder">문의하기</p>
            작성자
            연락처
            이메일
            문의내용
            동의
            폼양식으로
        </>

    )
}

function Fna() {
    let fnaData = useSelector((state) => { return state.fnadata })

    return (
        <>
            <p className="fs-4 fw-bolder">자주묻는질문</p>
            <Accordion>

                {
                    fnaData.map((item, index) => {
                        return (
                            <FnaList title={item.title} content={item.content} index={index} />
                        )
                    })
                }
            </Accordion>
        </>
    )
}


function FnaList({ title, content, index }) {

    return (
        <Accordion.Item eventKey={index}>
            <Accordion.Header> {title} </Accordion.Header>
            <Accordion.Body>
                {content}
            </Accordion.Body>
        </Accordion.Item>
>>>>>>> Stashed changes

    )
}

<<<<<<< Updated upstream
=======
function Notice() {
    let noticeData = useSelector((state) => { return state.noticeData })

    return (
        <>
            <p className="fs-4 fw-bolder">공지사항</p>
            {/* 
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th width="20%">분류</th>
                        <th width="60%">제목</th>
                        <th width="20%">작성일</th>
                    </tr>
                    </thead>


                <tbody> */}
            <Container>
                <Row>
                    <Col xs={9} >제목</Col>
                    <Col>분류</Col>
                    {/* <Col>작성일</Col> */}
                </Row>
                <Row>

                </Row>
            </Container>


            {
                noticeData.map((a, i) => {
                    return (
                        <NoticeList type={a.type} title={a.title} date={a.date} content={a.content} />
                    )
                })
            }
            {/* </tbody>
            </Table> */}

        </>

    )
}


function NoticeList({ type, title, date, content }) {

    return (
        <>
            {/* <tr>
                <td>{type}</td>
                <td>{title}</td>
                <td>{date}</td>
            </tr>
            {content} */}

            <Container>
                <Row>
                    <Col xs={9} >{title}</Col>
                    <Col>{type}</Col>
                    {/* <Col>{date}</Col> */}
                </Row>
                <Row className='p-5'>
                    {content}
                </Row>
            </Container>


        </>

    )
}
>>>>>>> Stashed changes

export { Cs }