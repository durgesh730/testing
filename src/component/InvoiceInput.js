import React from "react";

const InvoiceInput = ({ value, placeholder, onChange }) => {
  return (
    <div className="relative flex items-center">
      <span className="absolute left-2 text-gray-500">₹</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="pl-6 pr-2 py-1 border rounded w-full"
      />
    </div>
  );
};

export default InvoiceInput;
