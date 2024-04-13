const Profile = (props) => {
  const { userName } = props;
  return (
    <div className="user-profile">
      <h1>Name: {userName}</h1>
      <h2>City: Bangalore</h2>
    </div>
  );
};

export default Profile;
