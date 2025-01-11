import { Calculate } from "./Calculate";

export function Output({
  billInput,
  setBillInput,
  tipPercent,
  setTipPercent,
  setCustomTip,
  peopleInput,
  setPeopleInput,
}) {
  // caculate tip amount and total amount per person
  let totalTip;
  let tipAmount;
  let totalAmount;
  if (billInput > 0 && tipPercent > 0 && tipPercent < 100 && peopleInput >= 0) {
    totalTip = billInput * (tipPercent / 100);
    tipAmount = (totalTip / peopleInput).toFixed(2);
    totalAmount = ((billInput + totalTip) / peopleInput).toFixed(2);
  }

  function handleReset() {
    setBillInput("");
    setTipPercent("");
    setCustomTip("");
    setPeopleInput("");
  }

  return (
    <div className="output--calculator">
      <div className="calculateComponent">
        <Calculate calculationType="Tip Amount" calculate={tipAmount} />
        <Calculate calculationType="Total" calculate={totalAmount} />
      </div>
      <button
        className={`reset ${
          isNaN(tipAmount) || !isFinite(totalAmount) ? "not-allowed" : "allowed"
        }`}
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </div>
  );
}
