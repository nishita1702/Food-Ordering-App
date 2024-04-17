import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Profile = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="user-profile">
      <h1>Name: {loggedInUser}</h1>
    </div>
  );
};

export default Profile;
