import { Input } from "antd";
import React, { useState } from "react";
import Tabs from "../../../component/Tabs";
import fetcher from "../../../helper/fetcher";
import ManageAddress from "./ManageAddress";
import { formateCustomerData } from "../../../utils/utils";
import { useSnackbar } from "../../../context/SnackBarContext";

const ManageOrganisation = () => {
    const [activeTab, setActiveTab] = useState("General Info");
    const tabs = ["General Info", "Address"];
    const { showSuccess, showError } = useSnackbar();
    const [isLoading, setIsLaoding] = useState(false)

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

    const [formData, setFormData] = useState({
        name: "amber silk mills",
        taxResidency: "INR",
        dateFormat: "DD-MM-YYYY",
        businessType: "Sole Proprietorship",
        email: "ambersilkmills@gmail.com",
        phone: "8929103733",
        fax: "",
        website: "www.ambersilkmills.com",
        financialStartDate: "01-04-2022",
        bookBeginningDate: "01-12-2022",
        reportingCurrency: "INR",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
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
        if (!formData.name.trim()) return "Name is required.";
        if (formData.email && !/^[^\s@]+@gmail\.com$/.test(formData.email)) {
            return "Invalid email address";
        }
        if (!formData.phone.trim()) return "Phone number is required.";
        if (!/^\+?\d{10,12}$/.test(formData.phone))
            return "Invalid Phone number";
        if (!formData.website.trim()) return "Website is required.";

        return null;

    };

    const handleNext = () => {
        const generalInfoErrors = validateGeneralInfo();
        if (generalInfoErrors) {
            showError(generalInfoErrors);
            return;
        }

        setActiveTab(tabs[1])
    }

    const validateAddresses = () => {
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


    const handleSaveAddress = () => {
        const generalInfoErrors = validateGeneralInfo();
        if (generalInfoErrors) {
            showError(generalInfoErrors);
            return;
        }

        const addressErrors = validateAddresses();
        if (addressErrors) {
            showError(addressErrors);
            return;
        }

        setIsLaoding(true);

        // const d = formateCustomerData(generalInfo, addresses)
        fetcher.post("/inventory/customer/create_customer")
            .then((res) => {
                showSuccess("Created successfully")
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

            {activeTab === "General Info" && (
                <div className=" pb-6" >
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Name *</label>
                            <Input size="small" className="w-full rounded" value={formData.name}
                                disabled name="name" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Tax Residency</label>
                            <Input size="small" className="w-full rounded" value={formData.taxResidency}
                                disabled name="taxResidency" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Business Type</label>
                            <Input size="small" value={formData.businessType}
                                onChange={handleChange} className="w-full rounded" name="businessType" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Email *</label>
                            <Input size="small" type="email" className="w-full rounded" value={formData.email}
                                onChange={handleChange} name="email" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Phone *</label>
                            <Input size="small" className="w-full rounded" value={formData.phone}
                                onChange={handleChange} name="phone" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Fax</label>
                            <Input value={formData.fax}
                                onChange={handleChange} size="small" className="w-full rounded" placeholder="No data provided" name="fax" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Website *</label>
                            <Input size="small" className="w-full rounded" value={formData.website}
                                onChange={handleChange} name="website" />
                        </div>

                        {/* Finance Section */}
                        <p className="font-bold text-[#db3647] text-[16px] ">Finance</p>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Financial Start Date *</label>
                            <Input size="small" className="w-full rounded" value={formData.financialStartDate}
                                disabled name="financialStartDate" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Book Beginning Date *</label>
                            <Input size="small" className="w-full rounded" value={formData.bookBeginningDate}
                                disabled name="bookBeginningDate" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Reporting Currency *</label>
                            <Input size="small" className="w-full rounded" value={formData.reportingCurrency}
                                disabled name="reportingCurrency" />
                        </div>
                    </div>

                    <button
                        onClick={() => handleNext()}
                        className="bg-[#db3647] text-white px-4 py-2 rounded mb-12 mt-4"
                    >
                        Next
                    </button>
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

export default ManageOrganisation;



