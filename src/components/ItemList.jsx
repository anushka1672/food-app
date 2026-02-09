import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const IMG_CDN = "https://res.cloudinary.com/swiggy/image/upload/";

export default function ItemList({ category }) {
  const despatch = useDispatch();

  function handleClick(item){
      despatch(addItems(item))

  }
  return (
    <div>
      {category.card.card.itemCards.map((item) => {
        const dish = item.card.info;

        return (
          <div
            key={dish.id}
            className="flex justify-between py-4 border-b border-gray-100"
          >
            {/* ================= Left ================= */}
            <div className="max-w-[65%]">
              {/* Veg / Non-Veg */}
              <span
                className={`inline-block w-3 h-3 border rounded-sm mb-1 ${
                  dish.isVeg
                    ? "border-green-600 relative after:content-[''] after:w-1.5 after:h-1.5 after:bg-green-600 after:rounded-full after:absolute after:top-[3px] after:left-[3px]"
                    : "border-red-600"
                }`}
              ></span>

              <h3 className="text-base font-semibold text-gray-900">
                {dish.name}
              </h3>

              <p className="text-sm font-medium mt-1">₹{dish.price / 100}</p>

              {dish.ratings?.aggregatedRating?.rating && (
                <p className="text-xs text-gray-600 mt-1">
                  {dish.ratings.aggregatedRating.rating} ⭐ (
                  {dish.ratings.aggregatedRating.ratingCountV2})
                </p>
              )}
            </div>

            {/* ================= Right ================= */}
            <div className="relative w-28 h-24 shrink-0">
              {dish.imageId && (
                <img
                  src={IMG_CDN + dish.imageId}
                  alt={dish.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}

              <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-green-500 text-green-600 font-bold text-sm px-4 py-1 rounded-md hover:bg-green-500 hover:text-white transition"
              onClick={()=>handleClick(item)}>
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
