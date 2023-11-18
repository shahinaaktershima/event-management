import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../layout/root/home/Home";
import Error from "../layout/root/Error";

import Login from "../layout/root/login/Login";
import PrivateRoute from "../layout/root/PrivateRoute";
import Registration from "../layout/root/login/Registration";
import Booking from "../layout/root/home/private/Booking";
import Bubble from "../layout/root/home/private/Bubble";
import Details from "../layout/root/home/service/Details";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[{
        path:'/',
        element:<Home></Home>,
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
        path:'/bookings',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path:'/bubble',
        element:<PrivateRoute><Bubble></Bubble></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`/fakedata.json/${params.id}`)
      }
    ]
    },
  ]);

  export default router;