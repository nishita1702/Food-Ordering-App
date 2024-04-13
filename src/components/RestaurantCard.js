import { Link } from "react-router-dom";
import { CDN_URL } from "../utils";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, id } =
    resObj;

  return (
    <div className="w-[250px] p-4 m-4 rounded-lg bg-[#f0f0f0] hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>
        <Link to={`/restaurant/${id}`}>{name}</Link>
      </h3>
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 m-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
