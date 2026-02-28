import HomePage from "./components/routes/home/HomePage"
import ListPage from "./components/routes/listPage/ListPage";
import  {Layout, RequireAuth } from "./components/routes/layout/Layout";
import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import SinglePage from "./components/routes/singlePage/SinglePage";
import Login from "./components/routes/login/Login";
import ProfilePage from "./components/routes/profilePage/ProfilePage";
import Register from "./components/routes/register/Register";
import ProfileUpdatePage from "./components/routes/ProfileupdatedPage/ProfileUpdatePage";
import NewPostPage from "./components/routes/newPostPage/NewPostPage";
import { listPageLoad, singlePageLoad } from "./lib/loaders";

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
        element:<ListPage/>,
        loader: listPageLoad
       },
       {
        path:"/:id",
        element:<SinglePage/>,
        loader: singlePageLoad,
       } ,
       {
        path:"/login",
        element:<Login/>
       }  ,
     
       {
         path:"/register",
         element:<Register/>
       }
    
    ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>
         },
         {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
         },
         {
          path:"/add",
          element:<NewPostPage/>
         },
      ]
    }
   
  ])

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App