import {createSlice} from "@reduxjs/toolkit";

const initialCount = [
    {
        id: 1,
        value: 1
    },
    {
        id: 2,
        value: 5
    }

]

const counterSlice = createSlice({
    name:"counters",
    initialState:initialCount,
    reducers: {
        increment:(state:{id:number, value:number}[], action)=>{
            // action.payload = action.payload + 1;
            console.log("action",action)
            const counterIndex = state.findIndex(counter => counter.id=== action.payload)
            state[counterIndex].value++

        },
        decrement:(state, action)=>{
            console.log("action",action)
            const counterIndex = state.findIndex(counter => counter.id=== action.payload)
            state[counterIndex].value = state[counterIndex].value - 1;
        }
    }
})

export default counterSlice.reducer;
export const {increment, decrement}= counterSlice.actions;