import ContactItem from "./ContactItem";

export default function Contacts({ friends }) {
  if (!friends) return;

  return (
    <div className="contacts">
      {friends.map((friend) => (
        <ContactItem
          name={friend.name}
          avatar={friend.avatar}
          key={friend.id}
        />
      ))}
    </div>
  );
}
