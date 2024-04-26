import React from 'react'
import { Link } from 'react-router-dom';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdRefresh } from "react-icons/io";
import Avtarboy4 from "../images/Avtarboy4.jpg"
const Dashboard = () => {
    return (
        <div className='container  mt-3 flex justify-center items-center  mb-3  p-2 '>
            <div className="flex flex-col md:w-[60%]    p-4">
                <div className=" flex mb-5  items-center gap-2  items-center ">

                        <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtarboy4} alt="" />

                    <div className=" flex w-full items-center justify-between ">
                        <p className='font-bold  md:text-2xl '>~$~  Vishal  ~$~</p>
                        <Link to={"/Recharge"}>  <button className='bg-slate-100 shadow rounded-xl pt-2 pb-2 pr-5 pl-5 '>Recharge</button></Link>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className='flex  items-center '>Available Balance : 78788 <LiaRupeeSignSolid className='text-xl'/></p>
                    <IoMdRefresh onClick={()=>{window.location.reload(false)}} className='text-2xl text-slate-400'/>
                </div>
                
            </div>

        </div>
    )
}

export default Dashboard
