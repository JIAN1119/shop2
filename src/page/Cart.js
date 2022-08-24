import { useEffect, useState } from 'react';
import { Table, Stack, Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
<<<<<<< Updated upstream
import { countUp } from '../store/store';

=======
import { countUp, countDown, setCheckbox, selectChecked, rmvCart } from '../store/store';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
>>>>>>> Stashed changes

function Cart() {
    // ====================================================
    // 합계 계산 무한렌더링 막기.
    // 1. 처음 장바구니 진입 시, 담은 상품들 계산되어 있어야 함
    // 2. 수량 증가시 총액 갱신되어야 함
    // ====================================================

    
    let [payPrice, setPayPrice] = useState(0);
<<<<<<< Updated upstream
    
    let sum = 0
    // let [sum, setSum] = useState(0);
    
    // useEffect(() => {
    //     // setSum(50000)
    //     sum = 50000;
    //     // setPayPrice(payPrice + a.price * a.count)
        
    // },[])
    let dispatch = useDispatch();

=======

    
    
    let [isChecked, setIsChecked] = useState()
    
    
    let dispatch = useDispatch();
    
    
    let navigate = useNavigate();
    
>>>>>>> Stashed changes
    let shoes = useSelector((state) => { return state.shoesdata })
    let cartItem = useSelector((state) => { return state.cart })
    
    let sum = 0
    
    let sum4 = 0
    let sum3 = cartItem.filter( (a) => a.checked == true )
        .map( (a) => a.price * a.count)
        .reduce( (tot, a) => tot + a, 0)

    console.log(sum3)

    useEffect(() => {

        console.log('체크상태 업데이트됨')
    }, [cartItem])

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

                <div 
                className="bg-light ms-auto"
                onClick={()=>{ 
                console.log('삭제 클릭')
                dispatch(rmvCart())}}>선택삭제</div>

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
                    {/* 장바구니 리스트 생성 */}
                    {
                        cartItem.map((a, i) => {
<<<<<<< Updated upstream
                            // let payPriceCopy = 0;
                            // setPayPrice(payPrice + a.price * a.count)
                            sum = sum + ( a.price * a.count)
                            console.log(a.price * a.count)
=======
>>>>>>> Stashed changes
                            return (
                                <tr key={a.id}>
                                    <td>
                                        <Form.Check
                                            type="checkbox"
                                            id={`check${a.id}`}
                                            label={a.id}
                                            defaultChecked={a.checked}
                                            onClick={() => { dispatch(setCheckbox(a)) }}

                                        />
                                    </td>
                                    <td> {a.title} </td>
                                    <td> {a.price} </td>
                                    {/* <td>{ cartItem[0].price }</td> */}
                                    <td>
                                        <Button size='sm' onClick={()=>{ dispatch(countDown(a.id))}}>-</Button>
                                        
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
                        // .filter( (a)=> {
                        //     return (
                        //     console.log(a.checked==true)
                        //     ) })
                    }
                </tbody>
            </Table>


            {/* 합계, 구매하기 영역 */}
            <Stack direction="horizontal" gap={1}>
                <p className='fs-4 fw-nomal'>2개</p>
                <div className="vr" />
                <p className='fs-4 fw-nomal'>합계</p>
<<<<<<< Updated upstream
                <p className='fs-4 fw-bolder'>{ sum }</p>
                <p className='fs-4 fw-bolder'>원</p>
                <Button className='ms-auto'>주문하기</Button>
=======
                <p className='fs-4 fw-bolder'>{sum3}</p>

                <p className='fs-4 fw-bolder'>원</p>
                <Button className='ms-auto' onClick={() => { navigate('/order') }}>주문하기</Button>
>>>>>>> Stashed changes

            </Stack>
            {/* <p className='fs-4 fw-bolder'>{ dispatch(selectChecked())}</p> */}
{/* <Calsum/> */}

        </div >

    )


}

export default Cart