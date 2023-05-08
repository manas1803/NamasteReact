import { CDN_URL } from "../../utilities/constants";

const CardComponent = ({ resData }) => {
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    deliveryTime,
    costForTwoString,
  } = resData?.data;
  return (
    <div className="card">
      <img
        className="card-img"
        alt="Card image cap"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div className="card-details">
          <p>{cuisines.join(", ")}</p>
          <p>{deliveryTime} minutes</p>
          <p>{costForTwoString}</p>
          <p>{avgRating}*</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
