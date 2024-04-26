import React from 'react'
import { FaUser, FaRegUser } from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { IoGameControllerOutline, IoGameController, IoTrophyOutline } from "react-icons/io5"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Dahboard from './Dahboard';
const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <div className="container   ">
                <div className="max-[630px]:hidden p-5 flex-row flex w-[100vw]  items-center justify-between  ">
                    <div className="flex-row flex  max-[1000px]:w-[40vw]  max-[700px]:w-[50vw]  max-[2000px]:w-[20vw]   items-center justify-between ">

                        <div className="">
                            <Link to={"/"}>
                                <p className='italic  text-2xl font-bold' >MONEY2X</p>
                            </Link>

                        </div>

                        <div className="">
                            <Link to={"/Guess"}>
                                <p className={`hover:text-black font-semibold ${location.pathname==="/Guess"?" text-slate-400  ":" text-black "}`}>Guess</p>
                            </Link>
                        </div>
                        <div className="">
                            <Link to={"/"}>
                                <p className={`hover:text-black font-semibold ${location.pathname==="/"?" text-slate-400 ":"  text-black "}`}>Color Game</p>
                            </Link>
                        </div>

                    </div>
                    <div className="">
                        <Link to={"/Profile"}>
                            <p className={`hover:text-black font-semibold ${location.pathname==="/Profile"?" text-slate-400 ":"  text-black "}`}>My Account</p>
                        </Link>
                    </div>
                </div>
                {/* <Dahboard/> */}
                <div className="min-[630px]:hidden shadow-xl   pt-5 pb-5 bg-white w-[100%] grid grid-rows-1 grid-flow-col gap-0 fixed bottom-0 left-0">
                    <div className="guess   flex justify-center items-center ">

                        <Link to={"/Guess"}>
                            {location.pathname === "/Guess" ?
                                <IoGameController className='text-3xl' /> :
                                <IoGameControllerOutline className='text-3xl' />
                            }
                        </Link>
                    </div>
                    <div className="twox  flex justify-center items-center ">

                        <Link to={"/"}>
                            {location.pathname === "/" ?
                                <IoMdTrophy className='text-3xl' /> :
                                <IoTrophyOutline className='text-3xl' />}
                        </Link>
                    </div>
                    <div className="profile  flex justify-center items-center ">

                        <Link to={"/Profile"}>
                            {location.pathname === "/Profile" ?
                                <FaUser className='text-3xl' /> :
                                <FaRegUser className='text-3xl' />}
                        </Link>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
