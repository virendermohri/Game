import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdRefresh } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import Avtarboy1 from "../images/Avtarboy1.jpg"
import Avtarboy2 from "../images/Avtarboy2.jpg"
import Avtarboy3 from "../images/Avtarboy3.jpg"
import Avtarboy4 from "../images/Avtarboy4.jpg"
import Avtargirl4 from "../images/Avtargirl4.jpg"
import Avtargirl3 from "../images/Avtargirl3.jpg"
import Avtargirl2 from "../images/Avtargirl2.jpg"
import Avtargirl1 from "../images/Avtargirl1.jpg"
const Dashboard = () => {
    const [profile, setProfile] = useState("Avtarboy4");

    const history = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history("/Login")
        }
        if (localStorage.getItem("user")) {

            setProfile(JSON.parse(localStorage.getItem("user")).avtar);
          }
    }, [])
    return (
        <div className='container  mt-3 flex justify-center items-center  mb-3  p-2 '>
            <div className="flex flex-col md:w-[60%]    p-4">
                <div className=" flex mb-5  items-center gap-2  items-center ">
                {profile == "Avtarboy1"?
              <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtarboy1} alt="Profile" />
              
              :""}
            {profile === "Avtarboy2" &&
              <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtarboy2} alt="Profile" />
              }
            {profile === "Avtarboy3" &&
              <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtarboy3} alt="Profile" />
              }
            {profile === "Avtarboy4" &&
              <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtarboy4} alt="Profile" />
              }
            {profile === "Avtargirl1" &&
              <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtargirl1} alt="Profile" />
              }
           
            {profile === "Avtargirl2" &&
              <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtargirl2} alt="Profile" />
              }
           
            {profile === "Avtargirl3" &&
              <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtargirl3} alt="Profile" />
              }
           
            {profile === "Avtargirl4" &&
              <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtargirl4} alt="Profile" />
              }
           
                    {/* <img className='w-[15%] md:w-[10%]  rounded-full shadow-xl' src={Avtarboy4} alt="" /> */}

                    <div className=" flex w-full items-center justify-between ">
                        <p className='font-bold  md:text-2xl '>~$~  { localStorage.getItem("token") && JSON.parse(localStorage.getItem("user")).name}  ~$~</p>
                        <Link to={"/Recharge"}>  <button className='bg-slate-100 shadow rounded-xl pt-2 pb-2 pr-5 pl-5 '>Recharge</button></Link>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className='flex   items-center '>Available Balance : {localStorage.getItem("token") && JSON.parse(localStorage.getItem("user")).balance}  <LiaRupeeSignSolid className='text-xl' /></p>
                    <IoMdRefresh onClick={() => { window.location.reload(false) 
                    }} className='text-2xl cursor-pointer text-slate-400' />
                </div>

            </div>

        </div>
    )
}

export default Dashboard
