import React, { Component } from 'react';
import Post from '../components/post'
import { useState } from 'react'
class Submit extends Component{
    state = {
        title: '',
        text: ''
    };

    

    render() {
        const [text, setText] = useState('')
        const onsubmit = (event: any) => {
            event.preventDefault();
            
            setText('')
        }

        
        return (
        <div className='w-full h-full'>

            <form action='api/v1/posts/new' method='post' onSubmit={onsubmit}>
                <input name="title" type="text" placeholder='Your Submissions Title' onChange={e => {this.setState({
                    title: e.target.value
                })
                setText(e.target.value)
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

export default Submit;