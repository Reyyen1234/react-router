import './App.css';
import Header from './component/Header';
//import SignUp from './component/SignUp';
import { useState,useMemo } from 'react';
// import { BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About'
// import Users from './component/Users';
// import User from './component/User';
// import Error404 from './component/Error404'
function App() {
  const [number,setNumber]=useState(0) 
  const data= useMemo(()=>{
       return({name:"mehmet",number})
  },[number])
  return(
    <div>
     {/*  <SignUp /> */}
     
     <Header data={data}/>
     <h1>{number}</h1>
     <button onClick={()=>setNumber(number+1)}>Click</button>
    </div>
  )
 
  
 
}

export default App;
  