import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Home from "./components/Home/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import AddProduct from "./Menus/AddProduct";
import Brands from "./components/Section/Brands";
import Displayuser from "./components/ShowProduct/Displayuser";
import Update from "./components/Update/Update";
import Shop from "./components/ProductPage/Shop";
import MyCart from "./Menus/MyCart";
import Details from "./Product View/Details";
// import Product from "./components/Home/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        //loader: () => fetch(`https://tech-commerce-server.vercel.app/products`)
        loader: () => fetch('/logodata.json')
      },
      {
        path:"/brand/:brandName",
        element:<Shop></Shop>,
        loader: ({params}) => fetch(`https://tech-commerce-server.vercel.app/products/${params.brandName}`)
      },
      {
        path:"/",
        element:<Brands/>,
      },
       
      {
        path:"/addproduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path:"/displayproduct",
        element:<PrivateRoute><Displayuser></Displayuser></PrivateRoute>,
        loader: () => fetch(`https://tech-commerce-server.vercel.app/products`)
      },
      {
        path:"/details/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://tech-commerce-server.vercel.app/product/${params.id}`)
      },
      {
        path:"/cart",
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:() =>fetch('https://tech-commerce-server.vercel.app/cart')
        //loader:() =>fetch('https://tech-commerce-server.vercel.app/cart')

  
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params}) =>{
          console.log(params)
          return fetch(`https://tech-commerce-server.vercel.app/product/${params.id}`);
        }
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
