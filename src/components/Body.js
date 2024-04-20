import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import React, { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestraunts, setlistOfRestraunts] = useState([]);
  const [filteredlistOfRestraunts, setfilteredlistOfRestraunts] =
    useState(listOfRestraunts);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    setlistOfRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlistOfRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h1>You appear to be offline. Please check your Internet Connection</h1>
    );
  }

  console.log("list of restraunts", listOfRestraunts, filteredlistOfRestraunts);

  return (
    <div className="body">
      <div className="flex p-2.5">
        <div className="m-2">
          <input
            type="text"
            className="mr-2.5 border border-solid border-black"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 cursor-pointer rounded-lg"
            onClick={() =>
              setfilteredlistOfRestraunts(
                listOfRestraunts?.filter((restaurant) =>
                  restaurant?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              )
            }
          >
            Search
          </button>
        </div>
        <div className="m-2">
          <button
            className="px-4 py-2 bg-green-100 cursor-pointer rounded-lg"
            onClick={() => {
              setfilteredlistOfRestraunts(
                listOfRestraunts.filter(
                  (restaurant) => restaurant?.info?.avgRating >= 4
                )
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestraunts?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredlistOfRestraunts?.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.info.id}`}
              key={restaurant?.info.id}
            >
              {restaurant?.info?.promoted ? (
                <RestaurantCardPromoted resObj={restaurant?.info} />
              ) : (
                <RestaurantCard resObj={restaurant?.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
