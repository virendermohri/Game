import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";
import { RiLockPasswordLine, RiBatteryChargeLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { IoMdRefresh } from "react-icons/io";
import Avtarboy4 from "../images/Avtarboy4.jpg"
const Profile = () => {
  return (
    <>
      <div className='container mt-10  p-2 '>
        <div className="flex flex-col   rounded-xl     p-4">

          <div className=" mb-2 flex items-center justify-center ">
            <img className='w-[30%]  rounded-full shadow-2xl' src={Avtarboy4} alt="nhh" />
          </div>

          <div className="mb-2 ">
            <p className='text-center font-bold text-xl italic'>~$~  Vishal  ~$~</p>
          </div>
          <div className="">
            <p className='text-center font-semibold'>Available Balance : 78788$</p>
          </div>

        </div>

      </div>
      <div className='container'>
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
          <button className='bg-slate-100 shadow hover:bg-slate-300  rounded pt-2 pb-2 pr-5 pl-5 btn'>Log out</button>
        </div>
      </div>
    </>
  )
}

export default Profile
