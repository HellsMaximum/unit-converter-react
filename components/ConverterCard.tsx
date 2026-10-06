"use client";
import { useState } from "react";
const ConverterCard = () => {
  const [amount, setAmount] = useState("0");

  const result = Number(amount) * 2.20462;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleReset = () => {
    setAmount("0");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <input
        type="number"
        value={amount}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900
focus:border-blue-500 focus:outline-none"
      />
      <button
        onClick={handleReset}
        className="w-full mt-4 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white
hover:bg-blue-700 transition cursor-pointer"
      >
        Reset
      </button>
      <p>You typed: {amount}</p>
      <p>{result.toFixed(2)}</p>
    </div>
  );
};
export default ConverterCard;
