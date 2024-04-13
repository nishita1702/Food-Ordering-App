import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setShowIndex();
  };
  console.log(showIndex, isOpen);
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showIndex && isOpen && <ItemList data={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
