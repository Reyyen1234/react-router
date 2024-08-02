import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About'
import Users from './component/Users';
import User from './component/User';
function App() { 
  return ( 
    <Router>
      <div>
        <nav> 
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">About</Link></li> 
            <li><Link to="/users">Users</Link></li> 
          </ul> 
        </nav> 
        {/*Routes: A element looks through its children elements and renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/"  exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/users" Component={Users} />
          <Route path="/user/:id" Component={User} />
        </Routes>
      </div> 
    </Router>
  ); 
}


export default App;
