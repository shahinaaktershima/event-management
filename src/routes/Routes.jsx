import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../layout/root/home/Home";
import Error from "../layout/root/Error";
import Services from "../layout/root/home/Services";
import Service from "../layout/root/home/service/Service";
import Login from "../layout/root/login/Login";
import PrivateRoute from "../layout/root/PrivateRoute";
import Registration from "../layout/root/login/Registration";
import Booking from "../layout/root/home/private/Booking";
import Bubble from "../layout/root/home/private/Bubble";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[{
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/fakedata.json')
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Service></Service></PrivateRoute>,
        loader:({params})=>fetch(`/fakedata.json/${params.id}`)
       
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/details',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path:'/bubble',
        element:<PrivateRoute><Bubble></Bubble></PrivateRoute>
      }
    ]
    },
  ]);

  export default router;