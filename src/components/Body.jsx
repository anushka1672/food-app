import React, { useContext, useEffect, useState } from "react";
import RestaurantCards from "./RestaurantCards";
import { RestaurantsData } from "../utils/data";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UseContext from "../utils/UseContext";

const Body = () => {
  const { userLogin, setUserInfo } = useContext(UseContext);

  const [resList, setResList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const onlineStatus = useOnlineStatus();

  // ✅ Correct way to load data
  useEffect(() => {
    const timer = setTimeout(() => {
      const ResData =
        RestaurantsData.data.cards[1].card.card.gridElements
          .infoWithStyle.restaurants;

      setResList(ResData);
      setFilteredData(ResData);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl mt-10">
        🔴 You are offline! Please check your internet connection.
      </h1>
    );
  }

  if (resList.length === 0) return <Shimmer />;

  function SearchedRes() {
    const filteredRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(filteredRes);
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      
      {/* Controls Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-between items-center mb-6">

        {/* Search */}
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="text"
            value={searchInput}
            placeholder="Search restaurants..."
            className="w-full md:w-72 p-2 border rounded-lg shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <button
            className="px-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={SearchedRes}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="w-full md:w-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => {
            const topRated = resList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredData(topRated);
          }}
        >
          Top Rated
        </button>

        {/* Username */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <label className="font-semibold">UserName:</label>
          <input
            className="border p-2 rounded w-full md:w-48"
            value={userLogin}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <RestaurantCards ResData={filteredData} />
    </div>
  );
};

export default Body;
