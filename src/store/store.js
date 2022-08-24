<<<<<<< Updated upstream
import { configureStore, createSlice } from '@reduxjs/toolkit'
=======
import { configureStore, createSlice, current } from '@reduxjs/toolkit'
import fnadata from './csData'
import noticeData from './noticeData'
>>>>>>> Stashed changes

let user = createSlice({
    name: 'user',
    initialState: 'kim'
})

let shoesdata = createSlice({
    name: 'shoesdata',
    initialState:

        [
            {
                id: 0,
                title: "White and Black",
                content: "Born in France",
                price: 120000
            },

            {
                id: 1,
                title: "Red Knit",
                content: "Born in Seoul",
                price: 110000
            },

            {
                id: 2,
                title: "Grey Yordan",
                content: "Born in the States",
                price: 130000
            }
        ]

})

let cart = createSlice({
    name: 'cart',
    initialState:
        [
            { id: 0, title: 'White and Black', price: 10000, count: 1, checked: true },
            { id: 2, title: 'Grey Yordan', price: 5000, count: 1, checked: false }
        ]
    ,
    reducers: {
        countUp(state, action) {
            let idx = state.findIndex((a) => {
                return a.id == action.payload
            });
            state[idx].count = state[idx].count + 1
            console.log(idx)
            console.log(state[idx].count)
        },

        countDown(state, action) {
            let idx = state.findIndex( (a) => a.id == action.payload )
            if ( state[idx].count > 1 ){
                state[idx].count = state[idx].count - 1
            }
        },

        addCart(state, action) {
            let isInCart = state.findIndex((a) => {
                return a.id == action.payload.id
            })
            console.log(isInCart)
            if (isInCart < 0) {
                console.log('처음 담은 상품')
                state.push(action.payload)
            } else {
                console.log('이미 담은 상품')
                state[isInCart].count++
            }
            console.log('장바구니 담음')
            console.log(action.payload.id)
        },

        // 장바구니에서 해당 품목 삭제한다
        rmvCart(state) {

            for(var i = 0; i < state.length; i++){ 
                if (state[i].checked == true) { 
                  state.splice(i, 1);
                  i--; 
                }
              }

        },
        
        setCheckbox(state, action) {
            // 방법2-2 바로 체크값 반대로
            let finded = state.find((a) => a.id == action.payload.id)
            finded.checked = !finded.checked
            console.log(finded.checked)            // state[0].checked = !state[0].checked
            // console.log(state[0].checked)

        },

        // 체크된 항목들의 합계 계산 (수량상관X)
        selectChecked(state) {
            state.filter( (a) => a.checked == true )
            .map( (a) => a.price)
            .reduce( (tot, a) => tot + a , 0 )

        }


    }

})




export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
<<<<<<< Updated upstream
        shoesdata: shoesdata.reducer
=======
        shoesdata: shoesdata.reducer,
        fnadata: fnadata.reducer,
        noticeData: noticeData.reducer

>>>>>>> Stashed changes
    }
})

// 변경함수
export let { countUp, countDown, addCart, rmvCart, setCheckbox, selectChecked } = cart.actions