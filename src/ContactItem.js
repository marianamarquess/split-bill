import { useState } from "react";
import SplitBill from "./SplitBill";

export default function ContactItem({ name, avatar }) {
  const [showSplitBill, setShowSplitBill] = useState(false);

  const [balance, setBalance] = useState(0);

  function textBalance() {
    if (balance === 0) return <p>You and {name} are even</p>;
    if (balance > 0)
      return (
        <p className="positive">
          You owe {name} {balance}€
        </p>
      );
    if (balance < 0)
      return (
        <p className="negative">
          {" "}
          {name} owes you {-balance}€
        </p>
      );
  }

  function handleSelectFriend() {
    setShowSplitBill((currShowSplitBill) => !currShowSplitBill);
  }

  return (
    <>
      <div className="contact-item">
        <div className="contact-info">
          {avatar.includes("https") ? (
            <img className="avatar" src={avatar} alt="user avatar" />
          ) : (
            <div className="avatar" style={{ backgroundColor: avatar }}>
              <span>{name[0].toUpperCase()}</span>
            </div>
          )}
          <div>
            <h2>{name}</h2>
            {textBalance()}
          </div>
        </div>
        <button className="btn" onClick={handleSelectFriend}>
          Select
        </button>
      </div>
      {showSplitBill ? (
        <SplitBill
          setBalance={setBalance}
          setShowSplitBill={setShowSplitBill}
          name={name}
        />
      ) : (
        ""
      )}
    </>
  );
}
