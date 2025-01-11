export function Calculate({ calculationType, calculate }) {
  return (
    <div className="calculation--output">
      <h3>
        {calculationType} <span>/ person</span>
      </h3>
      <h2>${isNaN(calculate) || !isFinite(calculate) ? "0.00" : calculate}</h2>
    </div>
  );
}
