import { Container, Row, Col } from "react-bootstrap";

function Order() {

    return (
        <>
            <Container>

                <Row>
                    <p className="fs-2 fw-bold">주문하기</p>
                </Row>

                <Row>
                    <p className="fs-4 fw-bolder">주문자</p>
                    <hr />
                    이름
                    이메일
                    휴대전화

                ㅋ</Row>

                
                <Row>
                    <p className="fs-4 fw-bolder">배송지정보</p>
                    배송지명
                    받는 사람
                    연락처
                    주소
                    배송시요청사항
                </Row>
                
                
                <Row>
                    <p className="fs-4 fw-bolder">주문상품</p>
                </Row>

                
                <Row>
                    <p className="fs-4 fw-bolder">결제수단</p>
                </Row>

                
                <Row>
                    <p className="fs-4 fw-bolder">결제금액</p>
                    총금액
                    필수동의항목 체크
                </Row>
            </Container>









        </>
    )

}

export { Order };