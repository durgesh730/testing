import React from "react";

const InvoiceTable = ({
    data,
    columns,
}) => {
    return (
        <div className="relative overflow-x-auto shadow-sm rounded-md border">
            <table className="min-w-[250vh] text-sm text-left ">
                <thead className="text-[--active-text-color] border-b bg-gray-100 border-gray-300">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-3 py-2 font-semibold text-[14px]">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`border-b bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover-bg-gray-600 `}
                        >
                            {Object.entries(row).map(([key, cell], cellIndex) => {
                                const isObject = typeof cell === "object";
                                const bold = isObject && cell.bold ? "font-bold" : "font-medium";
                                return (
                                    <td
                                        key={cellIndex}
                                        className={`px-3 py-1 ${bold} text-[--active-text-color] bg-white  whitespace-normal break-words`}
                                    >
                                        {isObject ? cell.value : cell}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceTable;
