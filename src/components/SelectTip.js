import { useState } from "react";

export function SelectTip({
  tipPercent,
  setTipPercent,
  customTip,
  setCustomTip,
}) {
  const percentArray = [5, 10, 15, 25, 50];
  const [tipError, setTipError] = useState(false);

  function handlePercent(percentNum) {
    setTipPercent(percentNum);
    setCustomTip("");
  }

  function handleTipPercent(e) {
    const tipValue = Number(e.target.value);

    if (tipValue < 0 || tipValue > 100) {
      setTipError(true);
      setTipPercent(tipValue);
    } else {
      setTipError(false);
      setTipPercent(tipValue);
    }
    setCustomTip(tipValue);
  }

  return (
    <div className="select-tip">
      <label>Select Tip %</label>
      <div className="percentageButton">
        {percentArray.map((percent, id) => (
          <button
            key={id}
            onClick={() => handlePercent(percent)}
            className={percent === tipPercent ? "checked" : ""}
          >
            {percent}%
          </button>
        ))}

        <input
          type="number"
          placeholder="Custom"
          className={tipError ? "error--border" : ""}
          // value={customTip}
          onChange={handleTipPercent}
        />
      </div>
    </div>
  );
}
