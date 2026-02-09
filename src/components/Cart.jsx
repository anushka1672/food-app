import { useDispatch, useSelector } from "react-redux";
import { clearCart, DecreaseItems, increaseItems, removeItems } from "../utils/cartSlice";


const IMG_CDN = "https://res.cloudinary.com/swiggy/image/upload/";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("total cart item list", cartItems);
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(clearCart())
  }


  return (
    <div className="text-center p-2 m-2  w-full flex flex-col items-center gap-3 ">
    
      <h1 className="text-2xl font-bold">Cart</h1>
      <h1 onClick={handleClick} className="cursor-pointer p-2 m-2 bg-black rounded-lg text-amber-50">clear cart</h1>
      <div className="w-[60%] flex justify-center">
        <CartItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

function CartItemsList({ items }) {
   const dispatch = useDispatch();

 function handleDelete(item){
    dispatch(removeItems(item))
  }

  function handleDecrease(item){
    dispatch(DecreaseItems(item))
    
  }
  function handleIncrease(item){
    dispatch(increaseItems(item))
  }

  return (
    <div className="w-full border-b border-gray-300 rounded-2xl  items-center text-black h-full bg-gray-100">
        
      {items.map((item, index) => {
        const dish = item.card.info;

        return (
          <div
            key={dish.id}
            className="flex justify-between py-4 border-b border-gray-100 h-60"
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
            <div className=" w-28 h-30 shrink-0 gap-3 ">
              {dish.imageId && (
                <img
                  src={IMG_CDN + dish.imageId}
                  alt={dish.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
               <div className="flex flex-col gap-5 ml-10">
              <button className=" -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-green-500 text-green-600 font-bold text-sm px-4 py-1 rounded-md hover:bg-green-500 hover:text-white transition"
              onClick={()=>handleDelete(item)}>
                Delete
              </button>
              <div className=" flex -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-green-500 font-bold rounded-md hover:bg-green-500 hover:text-white transition justify-center gap-2  text-xl text-black">
                <button  onClick={()=>handleDecrease(item)}>-</button>
                <div>{item.q}</div>
                <button  onClick={()=>handleIncrease(item)}>+</button>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
