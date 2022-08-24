import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Nav, Accordion } from 'react-bootstrap'
import { useSelector } from 'react-redux';
// import { fnadata } from './../store/csData.js'

function Cs() {

    let navigate = useNavigate()


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
                    <Nav.Link eventKey="2" onClick={()=>{
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
                fnaData.map((item, index)=>{
                    return (
                        <FnaList title={item.title} content={item.content} index={index}/>
                    )
                })

            }


            </Accordion>
        </>
    )
}


function FnaList({title, content, index}){

    return (
        <Accordion.Item eventKey={index}>
                <Accordion.Header> {title} </Accordion.Header>
                <Accordion.Body>
                    {content}
                </Accordion.Body>
            </Accordion.Item>

    )
}

function Notice() {

    return (
        <>
            <p className="fs-4 fw-bolder">공지사항</p>
            리스트
        </>

    )
}

export { Qna, Fna, Notice, Cs }