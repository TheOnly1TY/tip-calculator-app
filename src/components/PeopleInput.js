import { useState } from "react";

export function PeopleInput({ peopleInput, setPeopleInput }) {
  const [error, setError] = useState("");

  function handlePeopleInput(e) {
    const peopleValue = Number(e.target.value);
    if (peopleValue <= 0) {
      setError("Can't be zero");
      setPeopleInput(peopleValue);
    } else {
      setError("");
      setPeopleInput(peopleValue);
    }
  }
  return (
    <div className="people-input">
      <div className="label-error--group">
        <label>Number of People</label>

        {error === "" || peopleInput === 0 ? (
          ""
        ) : (
          <p className="error--message">{error}</p>
        )}
      </div>
      <input
        type="number"
        className={error === "" || peopleInput === 0 ? "" : "error--border"}
        // value={peopleInput}
        placeholder={0}
        onChange={handlePeopleInput}
      />
    </div>
  );
}
