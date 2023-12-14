import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function handleText(e) {
    setText(e.target.value);
  }

  function handleAmount(e) {
    // Use parseFloat to handle decimal numbers, and handle NaN gracefully
    const inputValue = parseFloat(e.target.value);
    setAmount(isNaN(inputValue) ? 0 : inputValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted");
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={handleText}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            placeholder="Enter Amount..."
            value={amount}
            onChange={handleAmount}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
