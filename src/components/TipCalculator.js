import { useState } from "react";
import { Output } from "./Output";
import { Input } from "./Input";

export function TipCalculator() {
  const [billInput, setBillInput] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [peopleInput, setPeopleInput] = useState("");
  return (
    <div className="tip--calculator">
      <Input
        billInput={billInput}
        setBillInput={setBillInput}
        tipPercent={tipPercent}
        setTipPercent={setTipPercent}
        customTip={customTip}
        setCustomTip={setCustomTip}
        peopleInput={peopleInput}
        setPeopleInput={setPeopleInput}
      />
      <Output
        billInput={billInput}
        setBillInput={setBillInput}
        tipPercent={tipPercent}
        setTipPercent={setTipPercent}
        setCustomTip={setCustomTip}
        peopleInput={peopleInput}
        setPeopleInput={setPeopleInput}
      />
    </div>
  );
}
