import React from "react";
import { Link } from "react-router-dom";

const RestaurantCards = ({ ResData }) => {
  return (
    <div
      className="
        grid grid-rows-2 grid-flow-col 
        auto-cols-[160px] gap-4 
        overflow-x-auto p-3
        
        md:grid-flow-row 
        md:grid-cols-3 
        lg:grid-cols-4 
        md:auto-cols-auto 
        md:overflow-visible
      "
    >
      {ResData.map((item) => (
        <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
          <div
            className="
              bg-white border rounded-xl overflow-hidden
              shadow-sm hover:scale-105 transition
            "
          >
            {/* Image */}
            <div className="h-32 w-full">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.info.cloudinaryImageId}`}
                alt={item.info.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-2">
              <h3 className="font-semibold text-sm truncate">
                {item.info.name}
              </h3>

              <p className="text-xs text-gray-600 truncate">
                {item.info.cuisines.join(", ")}
              </p>

              <div className="flex justify-between text-xs mt-1">
                <span className="text-green-600">
                  ⭐ {item.info.avgRating}
                </span>
                <span>{item.info.costForTwo}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCards;
