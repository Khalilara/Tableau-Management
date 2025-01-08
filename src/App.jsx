import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/welcome";
import Tab2 from "./components/tableu2";
import EditableTable from "./components/tableau";
import Navbar from "./components/navbar";
import Register from "./pages/register";
import Profile from "./pages/Profile";
import Tab3 from "./components/tableau3";
import Tab4 from "./components/tableau4";
import Log from "./pages/Logging";
const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
      <>
      <Navbar />
      <Welcome />
      </>
    },
    {
      path: '/register',
      element:
      <>
      <Navbar />
      <Register />
      </>
    },
    {
      path: '/tableau',
      element:
      <>
      <Navbar />
      <EditableTable />
      </>
    },
    {
      path: '/tableau2',
      element:
      <>
      <Navbar />
      <Tab2 />
      </>
    },
    {
      path: '/tableau3',
      element:
      <>
      <Navbar />
      <Tab3 />
      </>
    },
    {
      path: '/tableau4',
      element:
      <>
      <Navbar />
      <Tab4 />
      </>
    },
    {
      path: '/profile',
      element:
      <>
      <Navbar />
      <Profile />
      </>
    },
    {
      path: '/logging',
      element:
      <>
      <Navbar />
      <Log />
      </>

    }
  ]
)
const App = () => {

  return (
    <RouterProvider router={router} />
  )
};

export default App
