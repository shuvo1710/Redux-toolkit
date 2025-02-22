"use client"
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "@/app/features/posts/postsSlice";


const Post = () => {

    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])

    console.log("posts", posts)


    return (
        <div>

        </div>
    );
};

export default Post;