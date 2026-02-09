import { useState } from "react";

export default useRestaurantMenu(){
      const [resList, setResList] = useState([]);
     
        const ResData = RestaurantsData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    
        console.log(ResData);
        setResList(ResData);
       
      }
