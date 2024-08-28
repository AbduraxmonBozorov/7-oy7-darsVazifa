import React, { useRef, useState } from "react";
import close from "../assets/image/close.svg";
import down from "../assets/image/down.svg";

function Form2({ countries, selectedFrom, setFromRate }) {
  const [openoptions, setOpenOptions] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const inputRef = useRef();
  const [filtred, setFiltred] = useState(countries);

  function handleOpenOptions() {
    setOpenOptions((prevOpenOptions) => {
      const newState = !prevOpenOptions;

      if (!newState && inputRef.current) {
        inputRef.current.value = ""; // input qiymatini tozalash
      }

      if (!newState) {
        setFiltred(countries);
      }

      return newState;
    });
  }

  function handleSearchOptions(e) {
    const filter = countries.filter((country) => {
      const currencyName =
        country.currencies && Object.values(country.currencies)[0]?.name;

      return (
        country.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        (currencyName &&
          currencyName.toLowerCase().includes(e.target.value.toLowerCase()))
      );
    });
    setFiltred(filter);
  }

  function handleSelectCountry(country) {
    setSelectedCountry(country);
    selectedFrom.setSelectedFrom(Object.values(country.currencies)[0].symbol);
    setFromRate(Object.values(country.currencies)[0].rateToUSD); // FromRate'ni App componentga uzatamiz
    setOpenOptions(false);
  }

  return (
    <div className="">
      <label className="mb-1">From</label>
      <div className="select w-80 border p-2 rounded-md from relative">
        {!openoptions && selectedCountry && (
          <div
            className="show-selected flex justify-between items-center cursor-pointer"
            onClick={handleOpenOptions}
          >
            <div className="flex gap-1 items-center">
              <img src={selectedCountry.flag} className="w-5 h-5" alt="" />
              <span>
                {Object.keys(selectedCountry.currencies)[0]} -{" "}
                {Object.values(selectedCountry.currencies)[0].name}
              </span>
            </div>
            <img src={down} className="w-5 h-5 cursor-pointer" alt="" />
          </div>
        )}
        {openoptions && (
          <div className="input-select flex justify-between items-center">
            <input
              onChange={handleSearchOptions}
              ref={inputRef}
              type="text"
              className="focus:outline-none border-none"
            />
            <img
              src={close}
              onClick={handleOpenOptions}
              className="w-5 h-5 cursor-pointer"
              alt=""
            />
          </div>
        )}
      </div>
      {openoptions && (
        <ul className="select-options w-80 h-60 overflow-y-auto rounded-md p-2 mt-2 shadow-md absolute">
          {filtred.length > 0 ? (
            filtred.map((country, index) => (
              <li
                key={index}
                onClick={() => handleSelectCountry(country)}
                className="flex gap-1 items-center py-1 cursor-pointer hover:bg-slate-100"
              >
                <img
                  src={country.flag}
                  className="w-5 h-5"
                  alt={`${country.name} flag`}
                />
                {country.currencies && (
                  <span>
                    {Object.keys(country.currencies)[0]} -{" "}
                    {Object.values(country.currencies)[0].name}
                  </span>
                )}
              </li>
            ))
          ) : (
            <li className="py-1">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Form2;
