import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/index");
    };
  return (
    <div>
        <h1 className='bg-slate-800 text-4xl capitalize text-white p-5'
        onClick={handleClick}>Foxbash</h1>
        {/**<button onClick={handleClick()}>Create</button>*/}
    </div>
  )
}

export default Navbar