import React from "react";
import UserContext from "../utils/UserContext";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nishita1702");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="user-profile">
        {/* This is how we update the state in class based components and use it */}
        {/* <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Location: {this.state.userInfo.location}</h2> */}
        {/* This is how we consme context in class based components */}
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default ProfileClass;
