import { useRef, useState } from "react";



export default function MyComponent() {
const [isLogin, SetIsLogin] = useState(true);
const inputVal = useRef();


function handleClick(){
  SetIsLogin(!isLogin)
}

    return (
    <div>
      <input type="text" ref={inputVal}></input>
      <button className="btn btn primary border border-primary" onClick={handleClick}>
        
        { isLogin ? "Login" : "Logout"}
       
      </button>
    </div>
  )
}
