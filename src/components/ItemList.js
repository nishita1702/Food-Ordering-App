import { useDispatch } from "react-redux";
import { ITEM_IMAGE } from "../utils";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  console.log("data Item List", data);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    //dispatch an action
    console.log("addItem");
    dispatch(addItem(item));
  };

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 p-2 m-2 space-y-2 flex justify-between"
        >
          <div className="w-3/4">
            <div className="font-bold"> {item?.card?.info?.name} </div>
            <div> ₹{item?.card?.info?.price / 100}</div>
            <div className="text-xs">{item?.card?.info?.description}</div>
          </div>
          <div className="w-1/4">
            <div className="absolute">
              <button
                className="p-2 shadow-lg rounded-md bg-black text-white"
                onClick={() => handleClick(item)}
              >
                ADD +
              </button>
            </div>
            <img src={ITEM_IMAGE + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
