import React, { Component } from 'react';
import ExamplePost from '../components/examplePost'
import { useState } from 'react'
import  Redirect, { Navigate }  from 'react-router-dom';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

import axios from 'axios'


export default function Submit(){
    const navigate = useNavigate()
    const [text, setText] = useState('')
    const [chars, setChars] = useState(0)
    const [title, setTitle] = useState('')
    const [formValue, setformValue] = React.useState({
        title: '',
        text: ''
      });
    
      const handleSubmit = async (e: any) => {
        
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("title", formValue.title)
        loginFormData.append("text", formValue.text)
      
        try {
            
          // make axios post request
          await axios.get(`/api/v1/posts/new?title=${formValue.title}&text=${formValue.text}`)
         
          
        } catch(error) {
          console.log(error)
        }
        
      }
    
      const handleChange = (event: any) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }


   
    
        

        
        return (
        <div className='w-full h-full'>

            <form  className='mx-auto flex flex-col items-center' onSubmit={(e) =>handleSubmit(e)}>
                <input name="title" type="text" className=" md:w-1/3 w-full mt-24 border border-black rounded px-2 py-2 "value={formValue.title}             maxLength={128} placeholder='Your Submissions Title'  onChange={e => {
                    setTitle(e.target.value);
                    handleChange(e)
               
                }
                
                }></input>
                <textarea name="text" placeholder='Your Submissions Body' value={formValue.text}  className='border border-black rounded h-56 md:w-1/3 w-full py-2 px-2 max-w-full' maxLength={1024} onChange={b => {handleChange(b);setText(b.target.value)}}></textarea>
                <button type="submit" >Submit</button>
            </form>







            <ExamplePost title={title} text={text} titleLimit={128} textLimit = {1024}/>
        
        </div>
        )
            }