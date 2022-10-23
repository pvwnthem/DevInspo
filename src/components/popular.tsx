import React from "react";
import axios from 'axios'
import { useState, useEffect } from 'react'
import RecentPost from './RecentPost'
export default function Recent(props: any) {
    const [data, setData] = useState('')
    const [limit, setLimit] = useState(25)
    const getPosts = async () => {
        const {data} = await axios.get(`http://localhost:8000/api/v1/posts/popular?limit=${limit}`)
        const json = data
        const arr = json.map(
            (x: any) => < RecentPost title={JSON.stringify(x.title).replace(/"/g, "")} text= {JSON.stringify(x.text).replace(/"/g, "")} id= {JSON.stringify(x.id).replace(/"/g, "")} likes = {JSON.stringify(x.likes)} tags = {JSON.stringify( x.tags).replace(/[\[\]"]+/g,'').replace(/,+/g, ' #')} serverTags = {JSON.stringify(x.serverTags)} /> 
        )
        console.log(arr)
        return arr;
    }
    const [D, setD] = useState('')
    useEffect(() => {
        getPosts().then((posts) => setD(posts))
        console.log(D)
    },[]);
    
    return(
        <div>{D}</div>
    )

}   