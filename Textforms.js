import React from 'react';
import { useState } from 'react';


export default function Textforms(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowclick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
    }
    const [text, setText]=useState("");

    
    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
        
  return (
    <>
    <div className='container' >
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
        <button className="btn btn-primary mx-2" onClick ={handleUpClick} >convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick ={handleLowclick} >convert to lowercase</button>

    </div>
          <div className='container my-2' > 
          <h1>  
            you text summary is here
          </h1>
          <p >
            {text.trim().split(" ").length} words and {text.replace(/ /g,'').length} characters
          </p>
          <p>{0.008 * text.split(" ").length } Minutes for read</p>
          <h2>Preview </h2>
          <p>
            {text}
          </p>
          </div>

    </>
  )
}
