import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
    const exist =  state.items.find((item)=> item.card.info.id === action.payload.card.info.id)
    if(!exist){
       
        state.items.push({...action.payload,q:1});
     } 
    },
    increaseItems:(state,action)=>{
     const exist =  state.items.find((item)=> item.card.info.id === action.payload.card.info.id)
    if(exist){
        exist.q = exist.q+1;
     } 
    },

    DecreaseItems:(state,action)=>{
        const exist =  state.items.find((item)=> item.card.info.id === action.payload.card.info.id)
    if(exist.q>=2){
        exist.q = exist.q-1;
     } else{
        state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
     }
    },
    removeItems: (state,action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id,
      );
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart,increaseItems,DecreaseItems } = cartSlice.actions;
export default cartSlice.reducer;
