"use client";
import { useState } from "react";

interface ConverterCardProps {
  title: string;
  fromUnit: string;
  toUnit: string;
  factor: number;
}

const ConverterCard = ({
  title,
  fromUnit,
  toUnit,
  factor,
}: ConverterCardProps) => {
  const [amount, setAmount] = useState("0");

  const result = Number(amount) * factor;

  const isEmpty = amount === "";
  const answer = isEmpty ? "—" : result.toFixed(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleReset = () => {
    setAmount("0");
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">
        {fromUnit} to {toUnit}
      </p>
      <label className="block text-sm font-medium text-slate-700 mt-5 mb-2">
        {fromUnit}
      </label>
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
      <div className="mt-5 rounded-lg bg-slate-50 p-4 text-center">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {toUnit}
        </p>
        <p className="text-2xl font-bold text-blue-600 mt-1">
          {answer}
        </p>
      </div>
    </div>
  );
};
export default ConverterCard;
