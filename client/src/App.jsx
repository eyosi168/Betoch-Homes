import HomePage from "./components/routes/home/HomePage"
import ListPage from "./components/routes/listPage/ListPage";
import Layout from "./components/routes/layout/Layout";
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import SinglePage from "./components/routes/singlePage/SinglePage";
import Login from "./components/routes/login/Login";
import ProfilePage from "./components/routes/profilePage/ProfilePage";
import Register from "./components/routes/register/Register";

function App() {
  const router= createBrowserRouter([
   {
      path:"/",
      element: <Layout/>
      ,
      children:[{
        path:"/",
        element:<HomePage/>
      },
       {
        path:"/list",
        element:<ListPage/>
       },
       {
        path:"/:id",
        element:<SinglePage/>
       } ,
       {
        path:"/login",
        element:<Login/>
       }  ,
       {
        path:"/profile",
        element:<ProfilePage></ProfilePage>
       },
       {
         path:"/register",
         element:<Register/>
       }
    
    ]
    },
   
  ])

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App