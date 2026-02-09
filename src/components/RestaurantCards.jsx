import React from "react";
import { Link } from "react-router-dom";

const RestaurantCards = ({ ResData }) => {
  // console.log(ResData);

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-2">
      {ResData.map((item) => (
        <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
          <div
            key={item.info.id}
            className="bg-white border rounded-lg overflow-hidden hover:scale-105 transition duration-150 cursor-pointer w-52"
          >
            <div className="h-36 w-full overflow-hidden">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.info.cloudinaryImageId}`}
                alt={item.info.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-3 flex flex-col justify-between h-40">
              <h3 className="font-semibold text-sm truncate">
                {item.info.name}
              </h3>

              <p className="text-xs text-gray-600 truncate">
                {item.info.cuisines.join(", ")}
              </p>

              <div className="flex items-center justify-between text-xs mt-2">
                <span className="flex items-center gap-1 font-medium text-green-600">
                  ⭐ {item.info.avgRating}
                </span>

                <span className="text-gray-700">{item.info.costForTwo}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCards;