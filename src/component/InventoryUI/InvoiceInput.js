import React from "react";

const InvoiceInput = ({ value, placeholder, onChange, icon = false, typeIcon = '₹', right = true }) => {
    return (
        <div className="relative flex items-center">
            {icon && <span className={`absolute ${right ? "left-2" : "right-2"} text-gray-500`}>{typeIcon}</span>}
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                class=" pl-5 pr-2 py-1  bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
    );
};

export default InvoiceInput;
