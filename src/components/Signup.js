import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avtarboy1 from "../images/Avtarboy1.jpg"
import Avtarboy2 from "../images/Avtarboy2.jpg"
import Avtarboy3 from "../images/Avtarboy3.jpg"
import Avtarboy4 from "../images/Avtarboy4.jpg"
import Avtargirl4 from "../images/Avtargirl4.jpg"
import Avtargirl3 from "../images/Avtargirl3.jpg"
import Avtargirl2 from "../images/Avtargirl2.jpg"
import Avtargirl1 from "../images/Avtargirl1.jpg"
const Signup = () => {
  const [Avtar, setAvtar] = useState("")
  let history = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

  const [showModal, setShowModal] = React.useState(false);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    const { name, password, email } = credentials;

    if (credentials.cpassword != credentials.password) {

    }
    else {


      const response = await fetch(`${process.env.REACT_APP_HOST}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-type': "application/json",
        },
        body: JSON.stringify({ name, email, password, avtar: Avtar })
      });
      const json = await response.json()

      if (json.success) {
        localStorage.setItem('token', json.authToken)
        localStorage.setItem("user", JSON.stringify(json.resuser))
        setTimeout(() => {
          setShowModal(false)
          history("/")
        }, 1000);
        toast.success('Sign up Successfuly !', {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });

      }
      else {
        toast.error(json.error ? json.error : json.errors[0].msg, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,

        });
      }
    }
  }
  return (
    <>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Choose your avtar
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative items-center justify-center flex p-6 flex-auto">
                  <div className=" flex items-center justify-center  md:w-[50%] w-[50vw]   flex-wrap  gap-4 ">

                    <img onClick={() => {
                      setAvtar("Avtargirl2")
                     
                    }} src={Avtargirl2} className={` w-[20%] md:w-[20%]  ${Avtar==="Avtargirl2"?" rounded-full " :"    "} shadoww-xl hover:border cursor-pointer  rounded `} alt="" />
                    <img onClick={() => {
                      setAvtar("Avtarboy2")
                     
                    }} src={Avtarboy2} className={` w-[20%] md:w-[20%]  ${Avtar==="Avtarboy2"?"  rounded-full ":""}  shadow-xl hover:border  cursor-pointer rounded `} alt="" />
                    <img onClick={() => {
                      setAvtar("Avtarboy4")
                     
                    }} src={Avtarboy4} className={` w-[20%] md:w-[20%]  ${Avtar==="Avtarboy4"?" rounded-full  ":""} shadow-xl hover:border cursor-pointer rounded  `}alt="" />
                    <img onClick={() => {
                      setAvtar("Avtargirl3")
                     
                    }} src={Avtargirl3} className={` w-[20%] md:w-[20%]  ${Avtar==="Avtargirl3"?" rounded-full  ":""} shadoww-xl hover:border cursor-pointer  rounded `} alt="" />
                    <img onClick={() => {
                      setAvtar("Avtarboy1")
                     
                    }} src={Avtarboy1} className={` w-[20%] md:w-[20%]  ${Avtar==="Avtarboy1"?"  rounded-full ":""}  shadow-xl hover:border  cursor-pointer rounded `} alt="" />
                    <img onClick={() => {
                      setAvtar("Avtargirl1")
                     
                    }} src={Avtargirl1} className={` w-[20%] md:w-[20%]  ${Avtar==="Avtargirl1"?" rounded-full  ":""} shadoww-xl hover:border cursor-pointer  rounded `} alt="" />
                    <img onClick={() => {
                      setAvtar("Avtarboy3")
                     
                    }} src={Avtarboy3} className={` w-[20%] md:w-[20%]  ${Avtar==="Avtarboy3"?"  rounded-full ":""}  shadow-xl hover:border  cursor-pointer rounded `} alt="" />
                    <img onClick={() => {
                      setAvtar("Avtargirl4")
                     
                    }} src={Avtargirl4} className={` w-[20%] md:w-[20%]  ${Avtar==="Avtargirl4"?" rounded-full  ":""} shadoww-xl hover:border cursor-pointer  rounded `} alt="" />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded ">
                  <button
                    className="mx-5 bg-slate-100 pt-2 pb-2 pr-3 pl-3 rounded shadow"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-500 pt-2 pb-2 pr-3 pl-3  rounded text-white font-bold shadow-xl "
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      />
      <div className="flex mt-[2%] md:mt-0 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  onChange={onChange}
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={onChange}
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={onChange}
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="cpassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  autoComplete="current-password"
                  onChange={onChange}
                  required
                  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {credentials.password != credentials.cpassword && credentials.cpassword != "" ? <p className="  m-0 text-center" style={{ color: "red" }}>Password dose not match </p> : ""}

            <div>
              <button
                type="button"
                onClick={(e) => {

                  setShowModal(true)
                }
                }
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?
            <Link to="/Login" className="font-semibold mx-2 leading-6 text-blue-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Signup
