import React, { Component } from 'react';
import ExamplePost from '../components/examplePost'
import { useState } from 'react'
import  Redirect, { Navigate }  from 'react-router-dom';
import { redirect, useNavigate  } from "react-router-dom"
import { Function } from 'estree';



class Submit extends Component<{ nav: any }>{
    state = {
        title: '',
        text: '',
        chars: 0
        
       
    };
    content = {
        
    }
    
    handleChange = (e: any) => {
        this.setState({[e.target.n]:e.target.v})
    }
    
    handleSubmit = (e: any) => {
        e.preventDefault()
        this.props.nav('/')
   }
    render() {
        

        
        return (
        <div className='w-full h-full'>

            <form action='/api/v1/posts/new' method='post' className='mx-auto flex flex-col items-center'>
                <input name="title" type="text" className=" md:w-1/3 w-full mt-24 border border-black rounded px-2 py-2 " maxLength={128} placeholder='Your Submissions Title'  onChange={e => {this.setState({
                    title: e.target.value
                })
               
                }
                
                }></input>
                <textarea name="text" placeholder='Your Submissions Body'  className='border border-black rounded h-56 md:w-1/3 w-full py-2 px-2 max-w-full' maxLength={1024} onChange={b => {this.setState({
                    
                    text: b.target.value
                })}}></textarea>
                <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
            </form>







            <ExamplePost title={this.state.title} text={this.state.text} titleLimit={128} textLimit = {1024}/>
        
        </div>
        )
    }
}

export function SubWithRouter(props: any) {
    const navigate = useNavigate()
    return (<Submit nav={navigate}/>)
}
export default SubWithRouter