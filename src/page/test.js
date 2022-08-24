function Test() {

    // 리스트 중 check값이 true인 것만 찾는다 > filter
    // 찾은 것의 key가 price인 것들만 합쳐서 하나로 반환한다 > reduce
    let arr = [
        { id: 0, check: true, price: 300 },
        { id: 1, check: false, price: 500 },
        { id: 2, check: true, price: 100 },
        { id: 3, check: false, price: 200 },
    ]

    let numArr = [ 1, 3, 5, 6, 10]
    let boolArr = [ true, false, true]

    // numArr필터링 해주는 함수 (5이상)인 값
    const isAbv5 = numArr.filter( (a) => {return a > 5});
    console.log(isAbv5) 
    
    
    // 불린값일 경우 파라미터만 써도 필터된다
    const isTrue = boolArr.filter((a)=>{return a})
    console.log(isTrue)
    
    // arr 중 값이 true인 것 새배열로 생성
    
    
    
// ==========================================================================================
// 오브젝트 요소들로 이루어진 array에서 key = check의 값이 true 인 것들을 찾아 key = price 의 총합구한다
// ==========================================================================================

/*
    const arrChcked = arr.filter(a => a.check) // (1) 배열 내 요소(object) 중 'check'값이 true인 것만 찾아 새 배열로 반환
    .map( a => a.price) // (2) 새 배열에서 price key의 값들만 모아 새 배열로 반환 
    .reduce( (tot, a) => tot + a , // (3) 위 배열의 값을 모두 더해 하나의 값으로 반환
    0)
    
    console.log(arrChcked)
    */
    
    let arr2 = [
        { id: 0, title: 'White and Black', price: 10000, count: 1, checked : true },
        { id: 2, title: 'Grey Yordan', price: 5000, count: 1, checked : true},
        { id: 3, title: '33333', price: 2000, count: 1, checked : false}
    ]
// ============================================================
//     체크 관련 함수
// ============================================================
/*
const arr2Checked = arr2.filter( a  => a.checked )
.map( a => a.price )
.reduce( ( tot, a ) => tot + a, 0)
console.log(arr2Checked)

const arr3Checked = arr2.filter( a  => a.checked )
.map( a => a.price )
.reduce( ( tot, a ) => tot + a, 0)
console.log(arr3Checked)
*/

// ============================================================
//     리스트 삭제 관련 함수
// ============================================================
// 체크박스 값 O 인것들 추려서 삭제한다

const trueArr = arr2.filter((a)=>a.checked == true)
console.log(trueArr)

const trueArrId = trueArr.map((a)=> a.id)
console.log(trueArrId)

arr2 = trueArr
console.log(arr2)

// 일단 Slice 체크
// const cut = arr2.slice(1, 3)
// console.log(cut)




        return (
            <>
                dsf
            </>

        )


}


export default Test;