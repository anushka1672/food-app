
import "./App.css";
import { Header } from "./components/Header";
import { AppLayout } from "./components/AppLayout";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contect from "./components/Contect";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useState } from "react";
import UseContext from "./utils/UseContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import("./components/Grocery"))

function App() {
  const [userInfo,setUserInfo] = useState();

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout  setUserInfo={setUserInfo}/>,
    children:[
        {
         path:"/",
        element:<Body/>,
        },
       {
         path:"/about",
        element:<About/>
      },
        {
         path:"contact",
        element:<Contect/>
      },
        {
         path:"cart",
        element:<Cart/>
      },
        {
         path:"Restaurant/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/grocery",
       element:<Suspense fallback={<div>Loading...</div>}><Grocery/></Suspense>
      }
       ],
    errorElement:<Error/>
   },
 
]);
  return (
    <Provider store={appStore}>
    <UseContext.Provider value={{userLogin:userInfo,setUserInfo}}>
    <RouterProvider router={appRouter}>
    
    </RouterProvider>
    </UseContext.Provider>
    </Provider>
  );
}

export default App;
