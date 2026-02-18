import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UseContext from "../utils/UseContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const { userLogin } = useContext(UseContext);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-gray-800 text-white w-full">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-12 md:w-16"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            alt="logo"
          />
          <h1 className="font-bold text-lg hidden sm:block">Food App</h1>
        </div>

        {/* Hamburger */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart: {cartItems.length}</Link></li>

          <button
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            onClick={() =>
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login")
            }
          >
            {btnName}
          </button>

          <li className="font-semibold">{userLogin}</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-gray-700">
          <li>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart: {cartItems.length}</Link></li>

          <button
            className="px-4 py-2 bg-blue-600 rounded"
            onClick={() =>
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login")
            }
          >
            {btnName}
          </button>

          <li className="font-semibold">{userLogin}</li>
        </ul>
      )}
    </div>
  );
};
9