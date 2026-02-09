import { useParams } from "react-router-dom";
import { RestaurantMenuData } from "../utils/res-menu";
import ItemList from "./ItemList";
import { use, useState } from "react";

const IMG_CDN = "https://res.cloudinary.com/swiggy/image/upload/";


const RestaurantMenu = () => {
  const [openIndex, setOpenIndex] = useState([]);

  const { id } = useParams();

const handleClick = (index) => {
  setOpenIndex((prev) => {
  if (prev.includes(index)) {
    return prev.filter((i) => i !== index);
  } else {
    return [...prev, index];
  }
});
};


  const res = RestaurantMenuData[id];
  if (!res) return <div>Restaurant not found</div>;

  const cards = res.data.cards;
  // console.log("cards ka data",cards);


  /* ============================
     Restaurant Info
  ============================ */
  const restaurantInfo = cards?.[0]?.card?.card?.info;
  console.log("restaurantInfo ka data",restaurantInfo);
  
  
  /* ============================
  Menu Categories
  ============================ */
  const categories =
  cards?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
  // console.log("categories",categories);
  console.log("categories ka data",categories);

  return (
    <div className="max-w-[900px] mx-auto px-4 py-4 bg-white">
      {/* ============================
          Restaurant Title
      ============================ */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {restaurantInfo?.name}
        </h1>

        {/* ============================
            Swiggy-style Info Card
        ============================ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex flex-col gap-3">
          {/* Rating + Cost */}
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="flex items-center gap-1 text-green-700">
              ⭐ {restaurantInfo?.avgRating}
            </span>
            <span className="text-gray-500">
              ({restaurantInfo?.totalRatingsString})
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700">
              {restaurantInfo?.costForTwoMessage}
            </span>
          </div>

          {/* Cuisine */}
          <p className="text-orange-500 text-sm font-semibold">
            {restaurantInfo?.cuisines?.join(", ")}
          </p>

          {/* Outlet + ETA */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span>Outlet • {restaurantInfo?.areaName}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span>{restaurantInfo?.sla?.slaString}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================
          Menu Sections
      ============================ */}
      {categories?.map((category,index) => (
        <div key={category.card.card.title} className="w-full">
          <div className="w-12/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className=" flex justify-between cursor-pointer">
              <span className="font-bold text-lg">
                {category.card.card.title} (
                {category.card.card.itemCards.length})
              </span>
              <span   onClick={() => handleClick(index)}>open</span>
            </div>
            {openIndex.includes(index) && (
        <ItemList category={category} />
      )}
          </div>
        </div>

      ))}
    </div>
  );
};

export default RestaurantMenu;
