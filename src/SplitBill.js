import { useState } from "react";

export default function SplitBill({ setBalance, setShowSplitBill, name }) {
  const [bill, setBill] = useState(0);
  const [billError, setBillError] = useState(false);
  const [paying, setPaying] = useState("me");
  const [description, setDescription] = useState("");

  const individualBill = bill / 2;

  function handleBillChange(e) {
    setBill(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (bill <= 0) {
      setBillError(true);
      return;
    }

    setBill(0);
    setPaying("me");
    setDescription("");
    setBalance((currBalance) =>
      paying === "me"
        ? currBalance - individualBill
        : currBalance + individualBill
    );

    setShowSplitBill(false);
  }

  return (
    <div className="split-bill ">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-items">
          <div className="form-item">
            <label for="bill">💸 Bill value:</label>
            <input
              value={bill}
              onChange={handleBillChange}
              type="number"
              id="bill"
              placeholder="Insert value..."
              className={billError ? "error" : ""}
            ></input>
          </div>
          <div className="form-item">
            <label for="paying">🤔 Who is paying the bill?</label>
            <select
              value={paying}
              onChange={(e) => setPaying(e.target.value)}
              type="text"
              id="payment"
            >
              <option value="me">You</option>
              <option value={name}>{name}</option>
            </select>
          </div>
        </div>
        <div className="form-item">
          <label for="description">✏️ Description:</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="description"
            placeholder="Insert description..."
          ></input>
        </div>
        <div className="form-items submit">
          {bill >= 0 ? (
            <p>
              🤑💰
              <em>
                {" "}
                You and {name} will pay {individualBill}€ each
              </em>
            </p>
          ) : (
            <p>
              🚨💰
              <em> Enter a positive bill value!</em>
            </p>
          )}
          <button className="btn">Split Bill</button>
        </div>
      </form>
    </div>
  );
}
