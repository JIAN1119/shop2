import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function Cs (){

    return(
        <div>
            <p className='fs-1'>고객센터</p>
            <p>(공통 : 탭메뉴 만들기)</p>
            <p>하위경로 영역 시작</p>
            <Outlet/>

        </div>

    )
}


export { Cs }