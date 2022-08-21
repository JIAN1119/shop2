import { configureStore, createSlice } from '@reduxjs/toolkit'

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
    name: 'user',
    initialState:
        [
            { id: 0, title: 'White and Black', price: 10000, count: 1 },
            { id: 2, title: 'Grey Yordan', price: 5000, count: 1 }
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
        addCart(state, action) {
            let isInCart = state.findIndex((a)=>{
                return a.id == action.payload.id 
            })
            console.log(isInCart)
            if(isInCart < 0 ){
                console.log('처음 담은 상품')
                state.push(action.payload)
            } else {
                console.log('이미 담은 상품')
                state[isInCart].count++
            }
         console.log('장바구니 담음')
         console.log(action.payload.id)
        }
    }


})

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
        shoesdata: shoesdata.reducer
    }
})

// 변경함수
export let { countUp, addCart } = cart.actions