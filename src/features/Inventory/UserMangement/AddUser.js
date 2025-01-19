import React from 'react';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

export const AddUser = ({ parentState, updateFunc }) => {
  const products = [
    { label: "Admin", key: "admin" },
    { label: "Sub Admin", key: "subAdmin" },
    { label: "Sales Person", key: "salesPerson" },
  ];

  const roles = parentState.roles || {};

  const handleRoleChange = (roleKey) => {
    updateFunc({
      roles: Object.keys(roles).reduce((acc, key) => {
        acc[key] = key === roleKey;
        return acc;
      }, {}),
    });
  };

  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">First Name *</label>
        <input
          type="text"
          value={parentState.fname}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#db3647] focus:border-[#db3647] sm:text-sm"
          placeholder="Enter first name"
          onChange={(e) => updateFunc({ fname: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Last Name *</label>
        <input
          type="text"
          value={parentState.lname}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#db3647] focus:border-[#db3647] sm:text-sm"
          placeholder="Enter last name"
          onChange={(e) => updateFunc({ lname: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email Address *</label>
        <input
          type="email"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#db3647] focus:border-[#db3647] sm:text-sm"
          placeholder="Enter email address"
          value={parentState.email}
          onChange={(e) => updateFunc({ email: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Contact *</label>
        <input
          type="text"
          value={parentState.phone}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#db3647] focus:border-[#db3647] sm:text-sm"
          placeholder="Enter contact number"
          onChange={(e) => updateFunc({ phone: e.target.value })}
        />
      </div>

      <p className="font-bold text-[#db3647] text-[18px] mb-3 mt-5">Set Password </p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Enter New Password *
        </label>
        <div className="relative">
          <input
            type={parentState.showPassword ? "text" : "password"}
            value={parentState.password}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#db3647] focus:border-[#db3647] sm:text-sm"
            placeholder="Enter new password"
            onChange={(e) => updateFunc({ password: e.target.value })}
            disabled={parentState.isEditPassword}
          />
          <button
            disabled={parentState.isEditPassword}
            type="button"
            onClick={() => updateFunc({ showPassword: !parentState.showPassword })}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
          >
            {parentState.showPassword ? <FaRegEye />
              : <FaRegEyeSlash />
            }
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password *
        </label>
        <div className="relative">
          <input
            disabled={parentState.isEditPassword}
            type={parentState.showConfirmPassword ? "text" : "password"}
            value={parentState.cPassword}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#db3647] focus:border-[#db3647] sm:text-sm"
            placeholder="Confirm password"
            onChange={(e) => updateFunc({ cPassword: e.target.value })}
          />
          <button
            type="button"
            disabled={parentState.isEditPassword}
            onClick={() => updateFunc({ showConfirmPassword: !parentState.showConfirmPassword })}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
          >
            {parentState.showConfirmPassword ? <FaRegEye />
              : <FaRegEyeSlash />}
          </button>
        </div>
      </div>
      <div className="p-3   bg-gray-50 rounded shadow my-5">
        <div className="mb-4">
          <p className="font-bold text-[#db3647] text-[18px] ">Set Role *</p>
        </div>
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b last:border-none"
          >
            <span className="text-gray-700">{product.label}</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                checked={roles[product.key] || false}
                onChange={() => handleRoleChange(product.key)}
                type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600"></div>
              <div className="w-5 h-5 bg-white rounded-full absolute left-1 top-0.5 peer-checked:left-6 transition-all"></div>
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};
