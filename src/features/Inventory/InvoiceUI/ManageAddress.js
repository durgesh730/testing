import React from 'react'
import { Input } from "antd";
import state from "../../../utils/state.json"
import { CircularProgress } from "@mui/material";
import MultipleSelect from "../../../component/MultipleSelect";

const ManageAddress = ({
    handleSaveAddress,
    handleAddressChange,
    removeAddress,
    addresses,
    isLoading,
    addNewAddress
}) => {
    return (
        <div>
            <button
                className="text-[#db3647] text-sm mb-4"
                onClick={addNewAddress}
            >
                + Add Another Address
            </button>

            {addresses.map((address, index) => (
                <div key={index} className="bg-gray-100 px-3 py-5 rounded-[10px] border border-gray-300 mb-4">
                    <div className="mb-4 flex flex-row justify-between">
                        <p className="font-bold text-gray-800 text-[16px]">
                            {`Address`}
                        </p>
                        {addresses.length > 1 && (
                            <button
                                className="text-gray-600 hover:text-red-600 transition-colors"
                                onClick={() => removeAddress(index)}
                                aria-label={`Delete Address ${address}`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 9.5l-1 11.5a2 2 0 01-2 2H7.5a2 2 0 01-2-2l-1-11.5m3.5-5h8m-11 0h14M12 9v8m-3-8v8m6-8v8"
                                    />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Address Form */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-600 mb-1">
                            Contact Name *
                        </label>
                        <Input value={address.contactName}
                            onChange={(e) =>
                                handleAddressChange(index, "contactName", e.target.value)
                            } className="w-full rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Address 1 *</label>
                            <Input value={address.address1}
                                onChange={(e) =>
                                    handleAddressChange(index, "address1", e.target.value)
                                } className="w-full rounded" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Address 2</label>
                            <Input value={address.address2}
                                onChange={(e) =>
                                    handleAddressChange(index, "address2", e.target.value)
                                } className="w-full rounded" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">City *</label>
                            <Input value={address.city}
                                onChange={(e) =>
                                    handleAddressChange(index, "city", e.target.value)
                                } className="w-full rounded" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Postal Code *</label>
                            <Input value={address.postalCode}
                                onChange={(e) =>
                                    handleAddressChange(index, "postalCode", e.target.value)
                                } className="w-full rounded" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">State *</label>
                            <MultipleSelect
                                options={state}
                                label="State"
                                value={address.state}
                                onChange={(e) =>
                                    handleAddressChange(index, "state", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Country</label>
                            <select
                                value={address.country}
                                onChange={(e) =>
                                    handleAddressChange(index, "country", e.target.value)
                                }
                                id="country"
                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>Choose Country</option>
                                <option value="India">India</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Phone Number *</label>
                            <div className="flex items-center rounded">
                                <Input value={address.phoneNumber}
                                    onChange={(e) =>
                                        handleAddressChange(index, "phoneNumber", e.target.value)
                                    } size="small" className="w-full rounded" />
                            </div>
                        </div>
                        {/* <div>
                            <label className="block text-sm text-gray-600 mb-1">Email Address</label>
                            <Input value={address.email}
                                onChange={(e) =>
                                    handleAddressChange(index, "email", e.target.value)
                                } type="email" className="w-full rounded" />
                        </div> */}
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                        <div>
                            <input
                                type="radio"
                                id={`shipping-${index}`}
                                name={`addressType${index}`}
                                className="mr-2"
                                checked={address.addressType === "shipping"}
                                onChange={() =>
                                    handleAddressChange(index, "addressType", "shipping")
                                }
                            />
                            <label htmlFor="shipping" className="text-sm">
                                Default shipping address
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id={`billing-${index}`}
                                name={`addressType${index}`}
                                className="mr-2"
                                checked={address.addressType === "billing"}
                                onChange={() =>
                                    handleAddressChange(index, "addressType", "billing")
                                }
                            />
                            <label htmlFor="billing" className="text-sm">
                                Default billing address
                            </label>
                        </div>
                    </div>
                </div>
            ))}

            <div onClick={handleSaveAddress} className="flex justify-between items-center my-5">
                <button className="bg-[#db3647] text-white px-4 py-2 rounded" >
                    {isLoading && <CircularProgress size={12} />}
                    Save
                </button>
            </div>
        </div>
    )
}

export default ManageAddress
