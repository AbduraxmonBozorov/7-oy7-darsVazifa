import React from "react";

const Amount = ({ symbol, amount, setAmount }) => {
  function handleAmount(e) {
    setAmount(e.target.value); // Input qiymatini yangilash
  }

  return (
    <div className="amount flex flex-col gap-0">
      <label className="">Amount</label>
      <div className="border focus:border-none outline-blue-500 outline-1 rounded p-2 flex">
        <span>{symbol}</span>
        <input
          value={amount} // Input qiymatini to'g'ri uzatish
          onChange={handleAmount}
          type="text"
          className="border-none focus:outline-none"
          id="amount"
        />
      </div>
    </div>
  );
};

export default Amount;
