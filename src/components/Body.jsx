import React, { useContext, useState } from "react";
import RestaurantCards from "./RestaurantCards";

import { RestaurantsData } from "../utils/data";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UseContext from "../utils/UseContext";
// import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {userLogin,setUserInfo} = useContext(UseContext)

  const [resList, setResList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
 

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>;
  }

  setTimeout(() => {
    const ResData =
      RestaurantsData.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants;

    console.log(ResData);
    setResList(ResData);
    setFilteredData(ResData);
  }, 1000);

  if (resList.length === 0) {
    return <Shimmer />;
  }

  function SearchedRes() {
    const filteredRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredData(filteredRes);
  }

  return (
    <div className="p-4 flex flex-col bg-gray-100">
      <div className="mb-4 flex justify-center gap-20">
        <div className="flex gap-2 ">
        <input
          type="text"
          value={searchInput}
          placeholder="Search for restaurants or cuisines"
          className="w-full max-w-md p-2 border rounded-lg shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          className="p-2 bg-red-500 text-white rounded-lg"
          onClick={SearchedRes}
        >
          Search
        </button>
        </div>

        <button
          className="p-2 bg-red-500 text-white rounded-lg"
          onClick={() => {}}
        >
          Top Rated Restaurants
        </button>

         <div className="search  flex items-center">
          <label>UserName :</label>
          <input className="border border-black p-2" value={userLogin} onChange={(e)=>setUserInfo(e.target.value)}/>
        </div> 

      </div>

      <RestaurantCards ResData={filteredData} />
    </div>
  );
};

export default Body;
