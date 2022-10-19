import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import Post from '../components/post'
export default function Random(props: any) {
    const [post, setPost] = useState({
        title: '',
        text: '',
        tags: [],
    })

    const getPost = async () => {
        const {data} = await axios.get('http://localhost:8000/api/v1/posts/random')
        setPost(data)
    }
    useEffect(() => {
        getPost();
      }, []);
    return (
        <>
           
            < Post title={JSON.stringify(post.title).replace(/"/g, "")} text= {JSON.stringify(post.text).replace(/"/g, "")} />
       </> 
    )
    
}