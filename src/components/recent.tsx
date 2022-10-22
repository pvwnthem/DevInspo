import React from "react";
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Recent(props: any) {
    const [data, setData] = useState('')
    const getPosts = async () => {
        const {data} = await axios.get('https://codeideas.herokuapp.com/api/v1/posts/getrecent')
        setData(data)
    }
    return(
        <p>e</p>
    )

}   