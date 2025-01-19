import { Input } from "antd";
import React, { useState } from "react";
import fetcher from "../../../helper/fetcher";
import { formateCustomerData } from "../../../utils/utils";
import { useSnackbar } from "../../../context/SnackBarContext";
import ManageAddress from "./ManageAddress";
import Tabs from "../../../component/Tabs";

const AddNewContact = ({ updateFunc }) => {
  const [activeTab, setActiveTab] = useState("General Info");
  const tabs = ["General Info", "Address"];

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    alternativeEmails: "",
    phoneNumber: "",
  });

  const [addresses, setAddresses] = useState([{
    contactName: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    state: [],
    country: "",
    phoneNumber: "",
    email: "",
    addressType: "",
  },
  ]);
  const { showSuccess, showError } = useSnackbar();
  const [isLoading, setIsLaoding] = useState(false)

  // Handler for General Info
  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for Address change
  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index][field] = value;
    setAddresses(updatedAddresses);
  };

  // Add a new address
  const addNewAddress = () => {
    setAddresses([
      ...addresses,
      {
        contactName: "",
        address1: "",
        address2: "",
        city: "",
        postalCode: "",
        state: "Delhi",
        country: "",
        phoneNumber: "",
        email: "",
        addressType: "",
      },
    ]);
  };

  // Remove an address
  const removeAddress = (index) => {
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };

  const validateGeneralInfo = () => {
    if (!generalInfo.name.trim()) return "Name is required.";
    if (generalInfo.email && !/^[^\s@]+@gmail\.com$/.test(generalInfo.email))
      return "Invalid email address.";
    if (!generalInfo.phoneNumber.trim()) return "Phone number is required.";
    if (!/^\+?\d{10,12}$/.test(generalInfo.phoneNumber))
      return "Invalid Phone number";
    return null;
  };


  const validateAddress = () => {
    for (let i = 0; i < addresses.length; i++) {
      const address = addresses[i];
      if (!address.contactName.trim()) return `Contact Name is required for Address ${i + 1}.`;
      if (!address.address1.trim()) return `Address 1 is required for Address ${i + 1}.`;
      if (!address.city.trim()) return `City is required for Address ${i + 1}.`;
      if (!address.postalCode.trim()) return `Postal Code is required for Address ${i + 1}.`;
      if (!/^\d{5,6}$/.test(address.postalCode))
        return `Invalid Postal Code for Address ${i + 1}.`;
      if (!address.state.length) return `State is required for Address ${i + 1}.`;
      if (!address.phoneNumber.trim()) return `Phone Number is required for Address ${i + 1}.`;
      if (address.phoneNumber && !/^\+?\d{10,12}$/.test(address.phoneNumber))
        return `Invalid Phone number for Address ${i + 1}.`;
    }
    return null;
  };


  const handleNext = () => {
    const generalInfoError = validateGeneralInfo();
    if (generalInfoError) {
      showError(generalInfoError);
      return;
    }
    setActiveTab(tabs[1])
  }

  const handleSaveAddress = () => {
    const generalInfoError = validateGeneralInfo();
    if (generalInfoError) {
      showError(generalInfoError);
      return;
    }

    const addressError = validateAddress();
    if (addressError) {
      showError(addressError);
      return;
    }

    setIsLaoding(true);

    const d = formateCustomerData(generalInfo, addresses)
    fetcher.post("/inventory/customer/create_customer", d)
      .then((res) => {
        showSuccess("Created successfully")
        updateFunc({ isDrawerOpen: false })
      })
      .catch((error) => {
        showError(error.response.data?.message || "Some Error Occured");
      }).finally(() => {
        setIsLaoding(false)
      })
  }

  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      {/* Content */}
      {activeTab === "General Info" && (
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name *</label>
            <Input value={generalInfo.name} name="name"
              onChange={handleGeneralInfoChange} size="small" className="w-full rounded" />

          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email Address *</label>
            <Input value={generalInfo.email} name="email"
              onChange={handleGeneralInfoChange} size="small" type="email" className="w-full rounded" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Alternative Emails</label>
            <Input name="alternativeEmails"
              value={generalInfo.alternativeEmails}
              onChange={handleGeneralInfoChange} size="small" className="w-full rounded" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number *</label>
            <div className="flex items-center">
              <Input name="phoneNumber"
                value={generalInfo.phoneNumber}
                onChange={handleGeneralInfoChange} size="small" className="w-full rounded" />
            </div>
          </div>

          <div className="flex justify-between items-center my-5">
            <div className="flex space-x-4">
              <button
                onClick={() => updateFunc({ isModalOpen: false })}
                className="text-gray-400 border-black border- hover:text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={() => handleNext()}
                className="bg-[#db3647] text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Address" && (
        <ManageAddress
          handleSaveAddress={handleSaveAddress}
          handleAddressChange={handleAddressChange}
          removeAddress={removeAddress}
          addresses={addresses}
          addNewAddress={addNewAddress}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default AddNewContact;