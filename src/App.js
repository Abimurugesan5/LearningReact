import './App.css';
import React from'react'
function App() {
  const title='Welcome to the new blog';
  const likes=50;
  // const person ={name:"abi", age:30};
  const link = "http://www.google.com";
  return (
    <div className="App">
    <div className='contant'>
      <h1>{title}</h1>
      <p>Liked{likes} times </p>
      <p>{Math.random()*10}</p>
      <a href={link}>Google Site</a>  
       </div>
    </div>
  );
}

export default App;
