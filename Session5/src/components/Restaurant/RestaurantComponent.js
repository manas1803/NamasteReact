import CardsContainerComponent from "./CardsContainerComponent";
import FilterComponent from "./FilterComponent";
import { resData } from "../../utilities/mockData";
import { useState } from "react";

const RestaurantComponent = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(resData);
  const handleFilter = () => {
    setFilteredRestaurants(
      filteredRestaurants.filter(
        (restaurant) => restaurant.data.avgRating >= 4.5
      )
    );
  };
  return (
    <div className="restaurant-container">
      <FilterComponent handleFilter={handleFilter} />
      <CardsContainerComponent filteredRestaurants={filteredRestaurants} />
    </div>
  );
};

export default RestaurantComponent;
