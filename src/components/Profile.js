import React, { useEffect, useState } from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";
import { RiLockPasswordLine, RiBatteryChargeLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import Avtarboy1 from "../images/Avtarboy1.jpg"
import Avtarboy2 from "../images/Avtarboy2.jpg"
import Avtarboy3 from "../images/Avtarboy3.jpg"
import Avtarboy4 from "../images/Avtarboy4.jpg"
import Avtargirl4 from "../images/Avtargirl4.jpg"
import Avtargirl3 from "../images/Avtargirl3.jpg"
import Avtargirl2 from "../images/Avtargirl2.jpg"
import Avtargirl1 from "../images/Avtargirl1.jpg"
const Profile = () => {
  const history = useNavigate()
  const [profile, setProfile] = useState("");
  useState(()=>{
    if(!localStorage.getItem("token")|| !localStorage.getItem("user")|| !localStorage.getItem("Avtar")){
      history("/login")
    }
  },[])
  useEffect(() => {
    
    if (!localStorage.getItem("token")) {
      history("/Login")
    }
    if (localStorage.getItem("user")) {

    setProfile((JSON.parse(localStorage.getItem("user")).avtar));
    }
  }, [])
  return (
    <div className='flex flex-col mb-10  items-center justify-center'>
      <div className='container mt-7 md:mt-0  p-2 '>
        <div className="flex flex-col   rounded-xl     p-4">

          <div className=" mb-2 md:mb-5  flex items-center justify-center ">
            {profile == "Avtarboy1"?
              <img className='w-[30%] md:w-[10%]  rounded-full shadow-2xl' src={Avtarboy1} alt="Profile" />
              
              :""}
            {profile === "Avtarboy2" &&
              <img className='w-[30%] md:w-[10%]  rounded-full shadow-2xl' src={Avtarboy2} alt="Profile" />
              }
            {profile === "Avtarboy3" &&
              <img className='w-[30%] md:w-[10%]  rounded-full shadow-2xl' src={Avtarboy3} alt="Profile" />
              }
            {profile === "Avtarboy4" &&
              <img className='w-[30%] md:w-[10%]  rounded-full shadow-2xl' src={Avtarboy4} alt="Profile" />
              }
            {profile === "Avtargirl1" &&
              <img className='w-[30%] md:w-[10%]  rounded-full shadow-2xl' src={Avtargirl1} alt="Profile" />
              }
           
            {profile === "Avtargirl2" &&
              <img className='w-[30%] md:w-[10%]  rounded-full shadow-2xl' src={Avtargirl2} alt="Profile" />
              }
           
            {profile === "Avtargirl3" &&
              <img className='w-[30%] md:w-[10%]  rounded-full shadow-2xl' src={Avtargirl3} alt="Profile" />
              }
           
            {profile === "Avtargirl4" &&
              <img className='w-[30%] md:w-[10%]  rounded-full shadow-2xl' src={Avtargirl4} alt="Profile" />
              }
           
          </div>

          <div className="mb-2 md:mb-5 ">
            <p className='text-center font-bold text-xl italic'>~$~  {localStorage.getItem("token") && JSON.parse(localStorage.getItem("user")).name}  ~$~</p>
          </div>
          <div className="flex  items-center justify-center">
            <p className='text-center  font-semibold'>Available Balance : {localStorage.getItem("token") && JSON.parse(localStorage.getItem("user")).balance}  </p>
            <LiaRupeeSignSolid className='font-semibold text-xl' />
          </div>

        </div>

      </div>
      <div className='container md:w-[70%]'>
        <div className="flex  mb-10 justify-around   flex-col  gap-2">

          <Link to={"/Recharge"}>
            <div className="mr-3 ml-3  flex items-center justify-between cursor-pointer  p-5 rounded-xl   bg-slate-50">
              <p>Recharge</p>
              <RiBatteryChargeLine className='text-2xl' />
            </div>
          </Link>
          <div className="mr-3 ml-3  flex items-center justify-between cursor-pointer  p-5 rounded-xl   bg-slate-50">
            <p>Withdrwal</p>
            <LiaRupeeSignSolid className='text-2xl' />
          </div>
          <div className="mr-3 flex items-center justify-between ml-3 cursor-pointer  p-5 rounded-xl   bg-slate-50">
            <p>Bank Card</p>
            <CiCreditCard1 className='text-2xl' />
          </div>
          <Link to={"/History"}>
            <div className=" mr-3 flex items-center justify-between  ml-3 cursor-pointer p-5 rounded-xl   bg-slate-50">
              <p>History</p>
              <BsClockHistory className='text-2xl' />
            </div>
          </Link>
          <div className=" mr-3 flex items-center justify-between  ml-3 cursor-pointer p-5 rounded-xl   bg-slate-50">
            <p>Security</p>
            <RiLockPasswordLine className='text-2xl' />
          </div>
        </div>
        <div className="flex  items-center justify-center">
          <button onClick={(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("Avtar");
            window.location.reload(false)
          })} className='bg-slate-100 shadow hover:bg-slate-300  rounded pt-2 pb-2 pr-5 pl-5 btn'>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
