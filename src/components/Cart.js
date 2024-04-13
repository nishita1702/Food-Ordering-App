import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClick = () => {
    //dispatch an action
    console.log("clearCart");
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClick}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <h1>Cart empty. Add items to your cart!</h1>
      ) : (
        <div className="w-1/2 m-auto">
          <ItemList data={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
