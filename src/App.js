import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div> 
    </Router>
  ); 
}

function Home() { 
  return <h2>Home</h2>; } 
  
function About() { 
  return <h2>About</h2>; } 
  
function Users() { 
  return <h2>Users</h2>; }

export default App;
