import './App.css';
import SignUp from './component/SignUp';
// import { BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About'
// import Users from './component/Users';
// import User from './component/User';
// import Error404 from './component/Error404'
function App() { 
  return(
    <div>
      <SignUp />
    </div>
  )
 
  
 
}

export default App;
  /*  <li><NavLink activeStyle={{backgroundColor:"black", color:"#fff"}} to="/" >Home</NavLink></li> 
            <li><NavLink activeStyle={{backgroundColor:"black", color:"#fff"}} to="/about">About</NavLink></li> 
            <li><NavLink activeStyle={{backgroundColor:"black", color:"#fff"}} to="/users">Users</NavLink></li>
            <Router>
            <div>
              <nav> 
                <ul>
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/users">Users</Link></li> 
                </ul> 
              </nav> 
              {Routes: A element looks through its children elements and renders the first one that matches the current URL.}
              <Routes>
                <Route path="/"   Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/users" Component={Users} />
                <Route path="/user/:id" Component={User} />
                <Route path="*" Component={Error404} />
              </Routes>
            </div> 
          </Router>
          return ( 
            <div>
               <h1>Sign Up</h1>
            {/*  <Formik
               initialValues={{
                 firstName: '',
                 lastName: '',
                 email: '',
                 gender:""
               }}
               onSubmit={ (values) => {
                 console.log(values)
               }}
             > }
               { handleSubmit ekldikten sonra artik guncelma isinden kurtulduk ve inputleri gormeyi basldik 
               ama ekledigim verileri goremiyorum bu sorunu cozmek icin handleChange ekledik}
               {({handleSubmit,handleChange,values})=>(
                 <form onSubmit={handleSubmit}>
                 { initialValues icindki keywordlarimiz fielda kullanmamiz lazim aksi takdirde bir sey girmemize izin vermez }
                 <label htmlFor="firstName">First Name</label>
                 <input  name="firstName" onChange={handleChange}/>
                  <br/>
                  <br/>
                 <label htmlFor="lastName">Last Name</label>
                 {/* <Field id="lastName" name="lastName" placeholder="Doe" /> }
                 <input  name="lastName" onChange={handleChange}/>
                 <br/>
                 <br/>
                 <label htmlFor="email">Email</label>
                 { <Field
                   id="email"
                   name="email"
                   placeholder="jane@acme.com"
                   type="email"
                 /> }
                 <input  name="email" onChange={handleChange}/>
         
                 <br/>
                 <br/>
                 <span>male</span>
                 <input type='radio' name="gender" value="male" onChange={handleChange}/>
                 <span>female</span>
                 <input type='radio' name="gender" value="female" onChange={handleChange}/>
                 <br/>
                 <br/>
                 <button type="submit">Submit</button>
                 <br/>
                 <br/>
                 <code>{JSON.stringify(values)}</code>
               </form>
               )}
               
             { </Formik> }
            </div>
           ); 
         } 
         ///useFormik///useFormik///useFormik///useFormik
         const {formik,values,handleChange,handleSubmit} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender:""
    },
    onSubmit: values => {
      console.log(values)
    },
  });
  return(
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
    <label htmlFor="firstName">First Name</label>
    <input  name="firstName" onChange={handleChange}/>
     <br/>
     <br/>
    <label htmlFor="lastName">Last Name</label>
    
    <input  name="lastName" onChange={handleChange}/>
    <br/>
    <br/>
    <label htmlFor="email">Email</label>
    
    <input  name="email" onChange={handleChange}/>

    <br/>
    <br/>
    <span>male</span>
    <input type='radio' name="gender" value="male" onChange={handleChange}/>
    <span>female</span>
    <input type='radio' name="gender" value="female" onChange={handleChange}/>
    <br/>
    <br/>
    <button type="submit">Submit</button>
    <br/>
    <br/>
    <code>{JSON.stringify(values)}</code>
  </form>
    </div>
    
  )*/