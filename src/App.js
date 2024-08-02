import './App.css';
import { Formik, Field, Form } from 'formik';
// import { BrowserRouter as Router, Route, Link, Routes,NavLink } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About'
// import Users from './component/Users';
// import User from './component/User';
// import Error404 from './component/Error404'
function App() { 
  return ( 
   <div>
      <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        {/* initialValues icindki keywordlarimiz fielda kullanmamiz lazim aksi takdirde bir sey girmemize izin vermez */}
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
   </div>
  ); 
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
          </Router> */