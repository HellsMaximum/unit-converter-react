"use client";
import { useState } from "react";
const ConverterCard = () => {
  const [amount, setAmount] = useState("0");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
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
      <p>You typed: {amount}</p>
    </div>
  );
};
export default ConverterCard;
