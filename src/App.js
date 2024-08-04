import './App.css';
import Header from './component/Header';
//import SignUp from './component/SignUp';
import { useState,useMemo,useCallback } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About'
// import Users from './component/Users';
// import User from './component/User';
// import Error404 from './component/Error404'
function App() {
  const [number,setNumber]=useState(0) 
  const [text,setText]=useState("")
  /* const data= useMemo(()=>{
       return({name:"mehmet",number})
  },[number]) */
  const increment= useCallback(()=>{
    setNumber((prevState)=> prevState +1)
  },[]) // Remove number from the dependency array
  return(
    <div>
     {/*  <SignUp /> */}
     
     <Header increment={increment}/>
     <h1>{number}</h1>
     
     <br />
     <br />
     <input value={text} onChange={(target)=>setText(target.value)}></input>
    </div>
  )

}

export default App;
  