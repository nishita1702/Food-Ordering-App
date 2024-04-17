import { useContext } from "react";
import UserContext from "../utils/UserContext";
import Profile from "./Profile";

const About = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  return (
    <div>
      <h1 className="font-bold">About Us</h1>
      <Profile />
      {/* <ProfileClass /> */}
      <div className="flex">
        <h1>Update Name:</h1>
        <input
          className="border border-black mx-4"
          value={loggedInUser}
          onChange={(e) => {
            console.log(e.target.value, "a");
            setUserName(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default About;
