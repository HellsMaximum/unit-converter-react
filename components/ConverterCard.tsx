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
  const [swapped, setSwapped] = useState(false);
  const [fixedSize, setFixedSize] = useState(2);

  const inputUnit = swapped ? toUnit : fromUnit;
  const outputUnit = swapped ? fromUnit : toUnit;
  const rate = swapped ? 1 / factor : factor;

  const result = Number(amount) * rate;

  const isEmpty = amount === "";
  const answer = isEmpty ? "—" : result.toFixed(fixedSize);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleReset = () => {
    setAmount("0");
  };

  const handleSwap = () => {
    setSwapped(!swapped);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">
        {inputUnit} to {outputUnit}
      </p>
      <label className="block text-sm font-medium text-slate-700 mt-5 mb-2">
        {inputUnit}
      </label>
      <input
        type="number"
        value={amount}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900
focus:border-blue-500 focus:outline-none"
      />

      <p className="text-xs text-slate-400 mt-3 text-center">
{inputUnit} * {rate.toFixed(4)} = {outputUnit}
</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleSwap}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2
font-semibold text-slate-700 hover:bg-slate-100
transition cursor-pointer"
        >
          Swap
        </button>
        <button
          onClick={() => {
            handleReset();
            setFixedSize(2);
          }} 
          className="flex-1 rounded-lg bg-blue-600 px-4 py-2 font-semibold
text-white hover:bg-blue-700 transition cursor-pointer"
        >
          Reset
        </button>
      </div>

      <div className="flex gap-3 mt-4">
                <button
          onClick={() => setFixedSize(0)}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
        >
          0 Decimals
        </button>
        <button
          onClick={() => setFixedSize(2)}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
        >
          2 Decimals
        </button>
        <button
          onClick={() => setFixedSize(4)}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
        >
          4 Decimals
        </button>
      </div>

      <div className="mt-5 rounded-lg bg-slate-50 p-4 text-center">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {outputUnit}
        </p>
        <p className="text-2xl font-bold text-blue-600 mt-1">{answer}</p>
      </div>
    </div>
  );
};
export default ConverterCard;
