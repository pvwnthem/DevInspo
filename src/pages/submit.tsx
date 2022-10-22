import React, { Component } from 'react';
import ExamplePost from '../components/examplePost'
import { useState } from 'react'

import { useNavigate  } from "react-router-dom"
import { Function } from 'estree';



class Submit extends Component<{ nav?: any }>{
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
        e.preventDefault();
        
        this.props.nav.navigate('/');
    }
    render() {
        

        
        return (
        <div className='w-full h-full'>

            <form action='api/v1/posts/new' method='post'>
                <input name="title" type="text" maxLength={128} placeholder='Your Submissions Title'  onChange={e => {this.setState({
                    title: e.target.value
                })
               
                }
                
                }></input>
                <input name="text" placeholder='Your Submissions Body' maxLength={1024} onChange={b => {this.setState({
                    text: b.target.value
                })}}></input>
                <button type="submit">Submit</button>
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