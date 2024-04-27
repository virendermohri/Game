import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import { useNavigate } from 'react-router-dom'

const ColorGame = () => {
  
  const history=useNavigate()
useEffect(()=>{
if(!localStorage.getItem("token")){
  history("/Login")
}
},[])
  return (
    <>
    <Dashboard/>
      {/* ColorGame */}
    </>
  )
}

export default ColorGame
