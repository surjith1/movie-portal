import React,{useState} from 'react'

const Mode = () => {
  const [mode, setMode]=useState("light");
  const styles = {
    background:mode==="light" ? "black" : "white",
  }
  return (
  <h1>Welcome to Mode</h1>
  
  )
}

export default Mode