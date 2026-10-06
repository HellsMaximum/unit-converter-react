"use client";
import { useState } from "react";
const ConverterCard = () => {
  const [amount, setAmount] = useState("0");
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <p>You typed: {amount}</p>
    </div>
  );
};
export default ConverterCard;
