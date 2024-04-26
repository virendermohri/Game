import Navbar from "./components/Navbar";
import ColorGame from "./components/ColorGame"
import Guess from "./components/Guess"
import Profile from "./components/Profile"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Recharge from "./components/Recharge";
import History from "./components/History";
function App() {
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
  ])
  return (
    <>
      <RouterProvider router={router}/>

    </>
  );
}

export default App;
