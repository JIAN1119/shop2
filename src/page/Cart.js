import { useEffect, useState } from 'react';
import { Table, Stack, Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { countUp } from '../store/store';


function Cart() {
    // ====================================================
    // 합계 계산 무한렌더링 막기.
    // 1. 처음 장바구니 진입 시, 담은 상품들 계산되어 있어야 함
    // 2. 수량 증가시 총액 갱신되어야 함
    // ====================================================

    
    let [payPrice, setPayPrice] = useState(0);
    
    let sum = 0
    // let [sum, setSum] = useState(0);
    
    // useEffect(() => {
    //     // setSum(50000)
    //     sum = 50000;
    //     // setPayPrice(payPrice + a.price * a.count)
        
    // },[])
    let dispatch = useDispatch();

    let shoes = useSelector((state) => { return state.shoesdata })
    let cartItem = useSelector((state) => { return state.cart })

    console.log(shoes)
    console.log(cartItem)

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
                    {
                        cartItem.map((a, i) => {
                            // let payPriceCopy = 0;
                            // setPayPrice(payPrice + a.price * a.count)
                            sum = sum + ( a.price * a.count)
                            console.log(a.price * a.count)
                            return (
                                <tr key={a.id}>
                                    <td>
                                        <Form.Check
                                            type="checkbox"
                                            id="checkAll"
                                            label={a.id}
                                        />
                                    </td>
                                    <td> {a.title} </td>
                                    <td> {a.price} </td>
                                    {/* <td>{ cartItem[0].price }</td> */}
                                    <td>
                                        <Button size='sm'>-</Button>
                                        <span className='fs-6 p-3'>{a.count}</span>
                                        <Button size='sm' onClick={() => {
                                            dispatch(countUp(a.id))
                                            console.log(a.id)
                                        }}>+</Button>
                                    </td>
                                    <td> {a.price * a.count } </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>


            {/* 합계, 구매하기 영역 */}
            <Stack direction="horizontal" gap={1}>
                <p className='fs-4 fw-nomal'>2개</p>
                <div className="vr" />
                <p className='fs-4 fw-nomal'>합계</p>
                <p className='fs-4 fw-bolder'>{ sum }</p>
                <p className='fs-4 fw-bolder'>원</p>
                <Button className='ms-auto'>주문하기</Button>

            </Stack>

        </div >

    )


}

export default Cart