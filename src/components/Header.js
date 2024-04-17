import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  //Subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100">
      <div className="logo-container">
        <img className="w-52" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2">
          <li className="px-2.5">onlineStatus: {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-2.5">
            <a href="/">Home</a>
          </li>
          <li className="px-2.5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2.5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2.5">
            <Link to="/cart">🛒 {cartItems.length}</Link>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
