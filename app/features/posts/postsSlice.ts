import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getPosts} from "@/app/features/posts/postsAPI";
import {state} from "sucrase/dist/types/parser/traverser/base";

const initialState = {
    posts: [],
    loading: false,
    err: null,
    updates: false,
};

export const fetchPosts = createAsyncThunk("posts/getPosts", async () => {
    return await getPosts()
});

const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.err = null; // Clear previous errors
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
                state.err = null;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.posts = [];
                state.err = action.error.message; // Correct way to store error messages
            });
    }
});

export default postSlice.reducer;
