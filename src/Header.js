export default function Header({ handleBtnAddFriend }) {
  return (
    <div className="header">
      <img src="./default-user.jpeg" alt="User Avatar" />
      <h1>Split a Bill</h1>
      <button className="btn" onClick={handleBtnAddFriend}>
        Add Friend
      </button>
    </div>
  );
}
