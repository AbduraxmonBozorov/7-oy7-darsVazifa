import React, { useState } from "react";
import countries from "./assets/data/country-currency.json";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2.jsx";
import Amount from "./components/Amount.jsx";
import Exchange from "./components/Exchange.jsx";

function App() {
  const [selectedFrom, setSelectedFrom] = useState("");
  const [selectedTo, setSelectedTo] = useState("");
  const [fromRate, setFromRate] = useState(null);
  const [toRate, setToRate] = useState(null);
  const [amount, setAmount] = useState("");
  const [nat, setNat] = useState(0);
  const [isSwapped, setIsSwapped] = useState(false); // O'rnini almashtirish uchun state



  function handleConvert(e) {
    e.preventDefault();
    let sum = ((fromRate * 1) / (toRate * 1)) * (amount * 1);
    setNat(sum);
  }

  function handleSwap() {
    // From va To state'larini almashtirish
    setIsSwapped(!isSwapped);
    const tempSelectedFrom = selectedFrom;
    const tempSelectedTo = selectedTo;
    const tempFromRate = fromRate;
    const tempToRate = toRate;

    setSelectedFrom(tempSelectedTo);
    setSelectedTo(tempSelectedFrom);
    setFromRate(tempToRate);
    setToRate(tempFromRate);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto border flex flex-wrap gap-2 items-center p-5">
        <Amount symbol={selectedFrom} amount={amount} setAmount={setAmount} />
        {isSwapped ? (
          <>
            <Form1
              countries={countries}
              selectedTo={{ selectedTo, setSelectedTo }}
              setToRate={setToRate}
            />
            <Exchange onClick={handleSwap} />
            <Form2
              countries={countries}
              selectedFrom={{ selectedFrom, setSelectedFrom }}
              setFromRate={setFromRate}
            />
          </>
        ) : (
          <>
            <Form2
              countries={countries}
              selectedFrom={{ selectedFrom, setSelectedFrom }}
              setFromRate={setFromRate}
            />
            <Exchange onClick={handleSwap} />
            <Form1
              countries={countries}
              selectedTo={{ selectedTo, setSelectedTo }}
              setToRate={setToRate}
            />
          </>
        )}
      </div>
      <div className="mt-5 flex flex-row justify-between w-full  container">
        <h2>{nat}</h2>
        <button className="btn btn-primary" onClick={handleConvert}>
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
