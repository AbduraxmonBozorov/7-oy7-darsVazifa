import React from "react";
import leftRight from "../assets/image/left-right.svg";

function Exchange({ onClick }) {
  return (
    <div
      className="border p-2 mt-5 rounded-full cursor-pointer"
      onClick={onClick} // Tugma bosilganda onClick funksiyasini chaqiramiz
    >
      <img src={leftRight} className="w-6 h-6" alt="" />
    </div>
  );
}

export default Exchange;
