import React from 'react';
import { useState } from 'react';


export default function Textforms(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const [text, setText]=useState("enter the text here");

    
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
        
  return (
    <div>
        <h1>
            {props.heading}
        </h1>
      <div className="mb-3">
        {/* <label htmlFor="My text box" className="form-label">Email address</label> */}
        {/* <input type="email" className="form-control" id="My text box" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
        <label htmlFor="My text box" className="form-label">Example textarea</label>
         */}
        <textarea className="form-control"  id="My text box" rows="3" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick ={handleUpClick} >convert to upper case</button>

    </div>
  )
}
