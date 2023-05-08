import CardComponent from "./CardComponent";

const CardsContainerComponent = ({ filteredRestaurants }) => {
  return (
    <div className="cards-container">
      {filteredRestaurants.map((restaurant) => (
        <CardComponent resData={restaurant} key={restaurant?.data.id} />
      ))}
    </div>
  );
};

export default CardsContainerComponent;
