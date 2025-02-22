import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice"
import postReducer from "@/app/features/posts/postsSlice";

const store = configureStore({
    reducer: {
        counters: counterReducer,
        posts:postReducer
    }
})

export default store;