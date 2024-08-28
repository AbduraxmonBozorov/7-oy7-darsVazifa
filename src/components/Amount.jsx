import React from "react";

const Amount = ({ selectedCountryFrom, handleAmout, amoutValue }) => {
  return (
    <div className="amount flex flex-col gap-0">
      <label className="">Amount</label>
      <div className="border focus:border-none outline-blue-500 outline-1 rounded p-2 flex">
        <span>
          {selectedCountryFrom?.currencies[
            Object.keys(selectedCountryFrom.currencies)[0]
          ]?.symbol}
        </span>
        <input
          onChange={handleAmout}
          value={amoutValue}
          type="text"
          className="border-none focus:outline-none"
          id="amount"
        />
      </div>
    </div>
  );
};

export default Amount;
