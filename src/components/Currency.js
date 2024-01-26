import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency,dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState(currency);

  const handleCurrencyChange=(event)=>{
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    dispatch({
        type: 'CHANGE_CURRENCY',
        payload: newCurrency,
      });
  }

return (<div
    style={{
      backgroundColor: 'lightgreen',
      padding: 10,
      margin: 4
    }}
  >
    <div>
    <label htmlFor="inputCurrencySElect01">Currency ({selectedCurrency})</label>
    <select
      className="custom-select"
      id="inputCurrencySelect01"
      value={selectedCurrency}
      onChange={handleCurrencyChange}
    >
      <option defaultValue>Choose Currency...</option>
      <option value="Dollar $ " name="dollar">
        Dollar $
      </option>
      <option value="Pounds £ " name="pounds">
        Pounds £
      </option>
      <option value="Euro € " name="euro">
        Euro €
      </option>
      <option value="Ruppee ₹ " name="ruppee">
        Ruppee ₹
      </option>
    </select>
  </div>
  </div>

)
};
export default Currency;
