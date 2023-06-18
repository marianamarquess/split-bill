import "./index.css";
import Contacts from "./Contacts";
import Search from "./Search";
import Header from "./Header";
import AddFriend from "./AddFriend";
import { useState } from "react";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState([
    {
      name: "Mariana",
      avatar:
        "https://media.licdn.com/dms/image/D4D03AQFfLgRuGKUayQ/profile-displayphoto-shrink_800_800/0/1677520956034?e=1692230400&v=beta&t=J6Tt_d6NF1NrRVkGqASjJG6hp3UiK34jC1qSaCqDRKI",
      id: 1,
    },
  ]);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [search, setSearch] = useState("");
  const [nameError, setNameError] = useState(false);

  function generatePastelColor() {
    // Generate random RGB values within the pastel range
    const r = Math.floor(Math.random() * 128) + 128; // 128-255
    const g = Math.floor(Math.random() * 128) + 128; // 128-255
    const b = Math.floor(Math.random() * 128) + 128; // 128-255

    // Convert RGB to hexadecimal
    const hex = rgbToHex(r, g, b);

    return hex;
  }

  function rgbToHex(r, g, b) {
    // Convert each RGB component to hexadecimal
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");

    // Combine the hexadecimal values
    const hex = `#${hexR}${hexG}${hexB}`;

    return hex;
  }

  function handleBtnAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleBtnAdd(e) {
    e.preventDefault();

    if (!name) return setNameError(true);

    setFriends((currFriends) => {
      return [
        ...currFriends,
        {
          name: name[0].toUpperCase() + name.slice(1),
          avatar: avatar ? avatar : generatePastelColor(),
          id: Date.now(),
        },
      ];
    });
    setShowAddFriend(false);
    setName("");
    setAvatar("");
    setSearch("");
    setNameError(false);
  }

  let filteredFriends = search
    ? friends.filter((friend) =>
        friend.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <Header handleBtnAddFriend={handleBtnAddFriend} />
      {showAddFriend ? (
        <AddFriend
          name={name}
          nameError={nameError}
          setName={setName}
          avatar={avatar}
          setAvatar={setAvatar}
          handleBtnAdd={handleBtnAdd}
        />
      ) : (
        ""
      )}
      <Search search={search} setSearch={setSearch} />
      <Contacts friends={search ? filteredFriends : friends} />
    </>
  );
}

export default App;
