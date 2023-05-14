
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import Main from './layoutes/Main/Main';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import { productAndCartLoder } from './loder/ProductAndCartLoder';
import Login from './components/Login/Login';
import Registration from './components/Login/Registration/Registration';
import Shipping from './components/Shipping/Shipping';
import PrivetRouter from './router/PrivetRouter';



function App() {
  
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>   
      },
      {
        path: '/shop',
        element: <Shop></Shop>   
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/shipping',
        element: <PrivetRouter><Shipping></Shipping></PrivetRouter>
      },

      {
        path:'/order',
        loader: productAndCartLoder,
        element: <Order></Order>
      },
      {
        path:'/inventory',
        element: <Inventory></Inventory>
      },

    ],
  }
 ])

  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
