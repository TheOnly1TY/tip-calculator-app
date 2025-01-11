import { useState } from "react";

export function BillInput({ billInput, onBillInput }) {
  const [billError, setBillError] = useState(false);
  function handleBillInput(e) {
    let tipValue = Number(e.target.value);

    // Allow only numbers, and trim input to a maximum length of 9
    if (!/^\d*$/.test(tipValue)) return;
    if (tipValue.length > 9) return;

    tipValue < 0 ? setBillError(true) : setBillError(false);
    onBillInput(tipValue);
  }
  return (
    <div className="bill-input">
      <label>Bill</label>
      <input
        type="text"
        placeholder="0"
        maxLength="9"
        // value={billInput}
        onChange={handleBillInput}
        className={!billError ? "" : "error--border"}
      />
    </div>
  );
}
