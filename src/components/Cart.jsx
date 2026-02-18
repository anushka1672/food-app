import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  DecreaseItems,
  increaseItems,
  removeItems,
} from "../utils/cartSlice";

const IMG_CDN = "https://res.cloudinary.com/swiggy/image/upload/";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>

      <button
        onClick={() => dispatch(clearCart())}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        Clear Cart
      </button>

      {/* FULL WIDTH ON MOBILE */}
      <div className="w-full md:w-3/4 lg:w-1/2">
        <CartItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

function CartItemsList({ items }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col gap-4">
      {items.map((item) => {
        const dish = item.card.info;

        return (
          <div
            key={dish.id}
            className="
              flex justify-between 
              bg-white p-4 
              rounded-xl shadow-sm
            "
          >
            {/* LEFT */}
            <div className="w-2/3">
              <span
                className={`inline-block w-3 h-3 border rounded-sm mb-1 ${
                  dish.isVeg
                    ? "border-green-600 relative after:content-[''] after:w-1.5 after:h-1.5 after:bg-green-600 after:rounded-full after:absolute after:top-[3px] after:left-[3px]"
                    : "border-red-600"
                }`}
              ></span>

              <h3 className="font-semibold text-gray-900">
                {dish.name}
              </h3>

              <p className="font-medium mt-1">
                ₹{dish.price / 100}
              </p>

              {dish.ratings?.aggregatedRating?.rating && (
                <p className="text-sm text-gray-600">
                  {dish.ratings.aggregatedRating.rating} ⭐
                </p>
              )}
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center gap-2">
              
              {/* IMAGE */}
              {dish.imageId && (
                <img
                  src={IMG_CDN + dish.imageId}
                  alt={dish.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}

              {/* QTY */}
              <div className="flex items-center gap-3 border px-3 py-1 rounded-md">
                <button
                  onClick={() => dispatch(DecreaseItems(item))}
                >
                  -
                </button>

                <span>{item.q}</span>

                <button
                  onClick={() => dispatch(increaseItems(item))}
                >
                  +
                </button>
              </div>

              {/* DELETE */}
              <button
                onClick={() => dispatch(removeItems(item))}
                className="
                  text-red-600 border border-red-500 
                  px-3 py-1 rounded-md text-sm">
                  Delete
              </button>

            </div>
          </div>
        );
      })}
    </div>
  );
}
