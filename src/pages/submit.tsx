import React, { Component } from 'react';
import ExamplePost from '../components/examplePost'
import { useState } from 'react'
import  Redirect, { Navigate }  from 'react-router-dom';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import {useEffect} from 'react'
import axios from 'axios'
import '../components/examplePost.css'

export default function Submit(){
    const navigate = useNavigate()
    const [text, setText] = useState('')
    const [chars, setChars] = useState(0)
    const [title, setTitle] = useState('')
    const [formValue, setformValue] = React.useState({
        title: '',
        text: ''
      });
      const [toggle, setToggle] = useState(0)
    const [toggle2, setToggle2] = useState(0)

    const [button, setButton] = useState(false);
    const [titleFull, setTitleFull] = useState(false);
    const [textFull, setTextFull] = useState(false);
        setTimeout(() => {
            setToggle(toggle + 1)
            setToggle2(toggle2 + 1)
        }, 150
        )
        useEffect(() => {
            
            if(formValue.title.length >= 128) {
                setTitleFull(true)
            } 
            if(formValue.text.length >= 1024) {
                setTextFull(true)
            } 
            if(formValue.text.length < 1024) {
                setTextFull(false)
            }
            if(formValue.title.length < 128) {
                setTitleFull(false)
            }
            
          }, [titleFull, toggle]);
      // if the url has a req.query than render a simple success message
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
        <div className='w-full h-full md:px-2 px-4'>
        <form onSubmit={(e) =>handleSubmit(e)}>
            <div className="md:w-2/3 w-full md:px-2 px-2 py-1   mx-auto flex flex-col h-full ">
            <div className='flex mt-16 self-center'>
                <span className='md:text-5xl sm:text-3xl text-2xl font-semibold text-gray-800'>Share Your Project Ideas!</span>
            </div>
            <hr className='md:w-2/3 w-full mx-auto mt-4'></hr>
            <div className='mt-12 md:w-2/3 w-full flex mx-auto '>
                <span className='ml-2 text-lg flex font-semibold'>Title <p className='text-sm my-auto ml-2'>  (max 128)</p></span>
            </div>
                <div className=' w-full md:px-2 px-2 py-1 mx-auto flex  '>
                    <input name="title" type="text" value={formValue.title} maxLength={128} onChange={e => {
                    setTitle(e.target.value);
                    handleChange(e)
               
                }} className='md:w-2/3 mt-2 w-full md:px-2 h-12 mx-auto bg-gray-200 rounded-lg px-2 text-xl' placeholder='Your Title Here!' ></input>
                { titleFull ?  (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="my-auto w-8 self-center absolute shake">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  
                ) : (
                    <a className='absolute '></a>
                )}
                
                </div>
                

                <div className='mt-12 md:w-2/3 w-full flex mx-auto '>
                <span className='ml-2 text-lg flex font-semibold'>Body <p className='text-sm my-auto ml-2'>  (max 1024)</p></span>
            </div>
                <div className=' w-full md:px-2 px-2 py-1 mx-auto flex  '>
                    <textarea name="text"  value={formValue.text} maxLength={1024} onChange={e => {
                    setTitle(e.target.value);
                    handleChange(e)
               
                }} className='md:w-2/3 mt-2 w-full md:px-2 md:h-56 h-40 mx-auto bg-gray-200 rounded-lg px-2 text-xl' placeholder='.....'  ></textarea>
                { textFull ?  (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="my-auto w-8 self-center absolute shake">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  
                ) : (
                    <a className='absolute '></a>
                )}
                
                
                </div>
                <div className=' px-2 flex  mx-auto md:w-2/3 w-full'>
                    <button type='submit' className='mx-auto  mr-4  bg-blue-700 py-2 text-xl px-8 rounded-lg mt-8'>Submit</button>
                </div>
            
            </div>
        </form>




            


        
        </div>
        )
            }