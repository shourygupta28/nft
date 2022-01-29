import React from "react"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Single from './components/Single';
import Profile from './components/Profile'

function App() {
  return (
    <div className='Page'>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
