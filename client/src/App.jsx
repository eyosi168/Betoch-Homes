import HomePage from "./components/routes/home/HomePage"
import ListPage from "./components/routes/listPage/ListPage";
import Layout from "./components/routes/layout/Layout";
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import SinglePage from "./components/routes/singlePage/SinglePage";
import Login from "./components/routes/login/Login";

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
       }  
    
    ]
    },
   
  ])

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App