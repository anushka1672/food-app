import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UseContext from "../utils/UseContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const {userLogin} = useContext(UseContext)
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store)=>store.cart.items)
  // console.log("cart ke items",cartItems);
  

  return (
    <div className="header flex justify-between bg-gray-800 items-center text-white w-full h-fit">
      <div className="logo-container w-[40%]  flex items-center p-2">
        <img
          className="logo w-[10%] h-[5%]"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>

    
       <div>    
        <ul className="flex gap-4 pr-4">
          <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li> <Link to="/cart">Cart: {cartItems.length}</Link></li>
          <button
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition duration-200"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <button>
            {userLogin} 
          </button>
        </ul>
        </div>

     
    </div>
  );
};
