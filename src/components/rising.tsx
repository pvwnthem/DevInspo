import React from "react";
import axios from 'axios'
import { useState, useEffect } from 'react'
import RecentPost from './RecentPost'
import RisingPost from './RisingPost'
export default function Oldest(props: any) {
    const [data, setData] = useState('')
    const [limit, setLimit] = useState(100)
    const getPosts = async () => {
        const {data} = await axios.get(`https://codeideas.herokuapp.com/api/v1/posts/rising?limit=${limit}`)
        const json = data
        let newarr: any = []
        
        
        const arr = json.map(
            (x: any) => < RisingPost title={JSON.stringify(x.title).replace(/"/g, "")} text= {JSON.stringify(x.text).replace(/"/g, "")}tags = {JSON.stringify( x.tags).replace(/[\[\]"]+/g,'').replace(/,+/g, ' #')} id= {JSON.stringify(x.id).replace(/"/g, "")} likes = {JSON.stringify(x.likes)}/> 
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