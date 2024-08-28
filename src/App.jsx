import React, { useState } from "react";
import countries from "./assets/data/country-currency.json";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2.jsx";
import Amount from "./components/Amount.jsx";

function App() {
  const [closeSelect, setCloseSelect] = useState(false)

  function handleCloseSelect(e){
    console.log(e.currentTarget.classList);
    let itemClases=e.currentTarget.classList
    if(itemClases.includes("to") || itemClases.includes("from")){
      setCloseSelect(true);
    }
    
  }

  return (
    <div className="w-full h-screen flex justify-center items-center" onClick={handleCloseSelect}>
      <div className="container mx-auto border flex flex-wrap gap-2 items-center p-5">
        <Amount />
        <Form2 countries={countries} close={{closeSelect, setCloseSelect}} />
        <Form1 countries={countries} close={{closeSelect, setCloseSelect}} />
      </div>
    </div>
  );
}

export default App;
