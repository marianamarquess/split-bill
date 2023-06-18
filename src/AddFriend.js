export default function AddFriend({
  name,
  nameError,
  setName,
  avatar,
  setAvatar,
  handleBtnAdd,
}) {
  return (
    <form className="add-friend" onSubmit={handleBtnAdd}>
      <div>
        <label htmlFor="name">🚀 Name of Friend:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Type name..."
          className={nameError ? "error" : ""}
        ></input>
      </div>
      <div>
        <label htmlFor="avatar">📷 Choose Avatar:</label>
        <input
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          type="text"
          id="avatar"
          placeholder="Type URL..."
        ></input>
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
