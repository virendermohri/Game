import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdRefresh } from "react-icons/io";
import Avtarboy4 from "../images/Avtarboy4.jpg"
const Dahboard = () => {
    return (
        <div className='container mt-3  mb-5 p-2 '>
            <div className="flex flex-col  p-4">
                <div className=" flex mb-5  items-center gap-2  items-center ">

                        <img className='w-[15%]  rounded-full shadow-xl' src={Avtarboy4} alt="" />

                    <div className=" flex w-full items-center justify-between ">
                        <p className='font-bold '>~$~  Vishal  ~$~</p>
                        <Link to={"/Recharge"}>  <button className='bg-slate-100 shadow rounded-xl pt-2 pb-2 pr-5 pl-5 '>Recharge</button></Link>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className=''>Available Balance : 78788$</p>
                    <IoMdRefresh onClick={()=>{window.location.reload(false)}} className='text-2xl text-slate-400'/>
                </div>
                
            </div>

        </div>
    )
}

export default Dahboard
