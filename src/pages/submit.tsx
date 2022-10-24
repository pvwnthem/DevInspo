import React, { Component } from 'react';
import ExamplePost from '../components/examplePost'
import { useState } from 'react'
import  Redirect, { Navigate }  from 'react-router-dom';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';




export default function Submit(){
    
    const [text, setText] = useState('')
    const [chars, setChars] = useState(0)
    const [title, setTitle] = useState('')
    

    const navigate = useNavigate()
    const handleSubmit = (e: any) => {
        console.log('form submitted')
        e.preventDefault()
        
        
   }
    
        

        
        return (
        <div className='w-full h-full'>

            <form action='https://codeideas.herokuapp.com/api/v1/posts/new' method='post' className='mx-auto flex flex-col items-center'>
                <input name="title" type="text" className=" md:w-1/3 w-full mt-24 border border-black rounded px-2 py-2 " maxLength={128} placeholder='Your Submissions Title'  onChange={e => {
                    setTitle(e.target.value)
               
                }
                
                }></input>
                <textarea name="text" placeholder='Your Submissions Body'  className='border border-black rounded h-56 md:w-1/3 w-full py-2 px-2 max-w-full' maxLength={1024} onChange={b => {setText(b.target.value)}}></textarea>
                <button type="submit" onClick={() => navigate('/')}>Submit</button>
            </form>







            <ExamplePost title={title} text={text} titleLimit={128} textLimit = {1024}/>
        
        </div>
        )
            }