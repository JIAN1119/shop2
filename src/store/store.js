import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim'
})

let shoesdata = createSlice({
    name: 'shoesdata',
    initialState :

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
            ,

            reducers : {
                mergeArr(state, action){
                  state.push = action.payload
                  console.log(state)

                  
                }
            }
        
        
        
})

export default configureStore({
    reducer: {
        user: user.reducer,
        shoesdata : shoesdata.reducer
    }
}) 

// 변경함수
export let { mergeArr } = shoesdata.actions 