import React from 'react';
import Post from '../components/post'
import Submit from './submit'
import Preloader from '../components/preloader';
import Loading from '../components/loading'
import axios from 'axios'
import SecondaryNav from './secondarynav';
import { useLocation } from "react-router-dom"


import { useEffect, useState } from 'react';
export default function Home() {
    const [post, setPost] = useState({
        title: '',
        text: '',
        tags: [],
        id: '',
        
    })
    
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const thisPage = params.get("page")
    
    const getPost = async () => {
        
        const {data} = await axios.get('https://codeideas.herokuapp.com/api/v1/posts/random')
        
        setPost(data)
    }
    useEffect(() => {
        getPost();
      }, []);
    return (
        <>
            <SecondaryNav page={thisPage}/>
       </> 
    )
}