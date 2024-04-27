import Navbar from "./components/Navbar";
import ColorGame from "./components/ColorGame"
import Guess from "./components/Guess"
import Profile from "./components/Profile"
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Recharge from "./components/Recharge";
import History from "./components/History";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
function App() {
  useState(async()=>{
    if(!localStorage.getItem("token")){
    }
    else{
      const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/getuser`, {
        method: 'POST',
        headers: {
          'Content-type': "application/json",
          "auth-token":localStorage.getItem("token")
        },
        
      });
      const json = await response.json()

      if (json.success) {
       
        localStorage.setItem("user", JSON.stringify(json.user))
      }
     
    }
    
  },[])
  const router = createBrowserRouter([
    {
      path: "/",
      element:<><Navbar/><ColorGame/></>
    },
    {
      path: "/Guess",
      element:<><Navbar/><Guess/></>
    },
    {
      path: "/Profile",
      element:<><Navbar/> <Profile/></>
    },
    {
      path: "/Recharge",
      element:<><Navbar/> <Recharge/></>
    },
    {
      path: "/History",
      element:<><Navbar/> <History/></>
    },
    {
      path: "/Login",
      element:<><Navbar/> <Login/></>
    },
    {
      path: "/Signup",
      element:<><Navbar/> <Signup/></>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>

    </>
  );
}

export default App;
