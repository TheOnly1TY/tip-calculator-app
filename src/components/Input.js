import { PeopleInput } from "./PeopleInput";
import { SelectTip } from "./SelectTip";
import { BillInput } from "./BillInput";

export function Input({
  billInput,
  setBillInput,
  tipPercent,
  setTipPercent,
  customTip,
  setCustomTip,
  peopleInput,
  setPeopleInput,
}) {
  return (
    <div className="input--calculator">
      <BillInput billInput={billInput} onBillInput={setBillInput} />
      <SelectTip
        tipPercent={tipPercent}
        setTipPercent={setTipPercent}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />
      <PeopleInput peopleInput={peopleInput} setPeopleInput={setPeopleInput} />
    </div>
  );
}
