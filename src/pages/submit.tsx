import React, { Component } from 'react';
import Post from '../components/post'
import { useState } from 'react'

import { useNavigate  } from "react-router-dom"
import { Function } from 'estree';



class Submit extends Component<{ nav?: any }>{
    state = {
        title: '',
        text: '',
        
        charLimit: 256
    };
    content = {
        
    }
    handleChange = (e: any) => {
        this.setState({[e.target.n]:e.target.v})
    }
    
    handleSubmit = (e: any) => {
        e.preventDefault();
        if (
            this.state.text.length <= this.state.charLimit
        ) {
             
        }
        this.props.nav.navigate('/');
    }
    render() {
        

        
        return (
        <div className='w-full h-full'>

            <form action='api/v1/posts/new' method='post'>
                <input name="title" type="text" placeholder='Your Submissions Title' onChange={e => {this.setState({
                    title: e.target.value
                })
               
                }
                
                }></input>
                <input name="text" placeholder='Your Submissions Body' onChange={b => {this.setState({
                    text: b.target.value
                })}}></input>
                <button type="submit">Submit</button>
            </form>

            <Post title={this.state.title} text={this.state.text}/>
        
        </div>
        )
    }
}

export function SubWithRouter(props: any) {
    const navigate = useNavigate()
    return (<Submit nav={navigate}/>)
}
export default SubWithRouter