import React from 'react'
function Home() {
  const handleClick = (e)=>{
    console.log("Click Me",e)
  }
  const handleClickAgain = (name,e)=>{
    console.log("hello" + name,e.target)
  }
  return (
    <div className='home'>
        <h1>Home Page</h1>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={(e)=>handleClickAgain('Abi',e)}>Clickme Again</button>
    </div>
  )
}

export default Home