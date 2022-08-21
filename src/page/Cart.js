import { Table, Stack, Button, Form } from 'react-bootstrap'

import { useSelector } from "react-redux"


function Cart() {

    let store = useSelector((state) => { return state })

    let shoes = store.shoesdata
    console.log(shoes)

    return (
        <div>


            <Stack direction="horizontal" gap={3}>

                    <Form.Check
                        type="checkbox"
                        id="checkAll"
                        label="전체선택"
                        />

                <div className="bg-light ms-auto">선택삭제</div>
                
            </Stack >

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>싱픔명</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>합계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>


                    <Form.Check
                        type="checkbox"
                        id="checkAll"
                        />

                        </td>
                        <td>상품1</td>
                        <td>20000</td>
                        <td>
                            <Button size='sm'>-</Button>
                            <span className='fs-6 p-3'>12</span>
                            <Button size='sm'>+</Button>
                            
                            </td>
                        <td>40000</td>
                    </tr>
                </tbody>



            </Table>

            <Stack direction="horizontal" gap={1}>
                <p className='fs-4 fw-nomal'>2개</p>
                <div className="vr" />
                <p className='fs-4 fw-nomal'>합계</p>
                <p className='fs-4 fw-bolder'>50000</p>
                <p className='fs-4 fw-bolder'>원</p>
                <Button className='ms-auto'>주문하기</Button>

            </Stack>

        </div >

    )

}

export default Cart