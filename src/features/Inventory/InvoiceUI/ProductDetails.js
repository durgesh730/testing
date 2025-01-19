import React, { useState } from "react";
import { Input, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import MultipleSelect from "../../../component/MultipleSelect";
import fetcher from "../../../helper/fetcher";
import { useSnackbar } from "../../../context/SnackBarContext";
import axios from "axios";
import { apiUrl, getAuthToken } from "../../../utils/utils";
import { CircularProgress } from "@mui/material";

const { TextArea } = Input;

const ProductDetails = ({ setDrawerOpen }) => {
    const [activeTab, setActiveTab] = useState("General Info");
    const tabs = ["General Info", "Accounting"];
    const { showSuccess, showError } = useSnackbar();

    const [selectedOffering, setSelectedOffering] = useState("Goods");
    const [formData, setFormData] = useState({
        fabricVariety: [],
        productType: [],
        transactionType: [],
        productName: "",
        barcode: "",
        description: "",
    });
    const [accountFormData, setAccountFormData] = useState({
        purchaseAccount: "",
        purchasePrice: "",
        salesAccount: "",
        salesPrice: "",
        salesReturnAccount: "",
        purchaseReturnAccount: "",
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const transactionTypeOptions = [
        { name: "Sale" },
        { name: "Purchase" },
        { name: "Return" },
    ];

    const fabricOptions = [
        { name: "Fresh" },
        { name: "Synthetic" },
        { name: "Cotton" },
    ];

    const productTypeOptions = selectedOffering === "Goods"
        ? [
            { name: "Tracked" },
            { name: "Non-Tracked" },
            { name: "Bill Of Materials" },
        ]
        : [{ name: "Non-Tracked" }];

    const handleSelectChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const handleInputChange = (key, event) => {
        setFormData({ ...formData, [key]: event.target.value });
    };

    const handleImageChange = (file) => {
        setSelectedImage(file);
        return false;
    };

    const handleFileChange = (file) => {
        setSelectedFile(file);
        return false;
    };


    const handleChange = (key, value) => {
        setAccountFormData({ ...accountFormData, [key]: value });
    };
    const handleNext = () => {
        if (!formData.productName.trim()) {
            return showError("Product Name is required");
        }
        if (!formData.productType.length) {
            return showError("Product Type is required");
        }
        if (!formData.transactionType.length) {
            return showError("Transaction Type is required");
        }
        if (selectedOffering === "Goods" && !formData.fabricVariety.length) {
            return showError("Fabric Variety is required for Goods");
        }
        setActiveTab(tabs[1])
    }

    const handleAddProduct = () => {
        // Validation checks
        if (!formData.productName.trim()) {
            return showError("Product Name is required");
        }
        if (!formData.productType.length) {
            return showError("Product Type is required");
        }
        if (!formData.transactionType.length) {
            return showError("Transaction Type is required");
        }
        if (selectedOffering === "Goods" && !formData.fabricVariety.length) {
            return showError("Fabric Variety is required for Goods");
        }

        if (!accountFormData.purchaseAccount.trim()) {
            return showError("Purchase Account is required");
        }
        if (!accountFormData.salesAccount.trim()) {
            return showError("Sales Account is required");
        }
        if (!accountFormData.salesReturnAccount.trim()) {
            return showError("Sales Return Account is required");
        }
        if (!accountFormData.purchaseReturnAccount.trim()) {
            return showError("Purchase Return Account is required");
        }
        const isNumeric = (value) => /^[0-9]*\.?[0-9]+$/.test(value);

        if (!isNumeric(accountFormData.purchasePrice)) {
            return showError("Purchase Price must be a valid number");
        }
        if (!isNumeric(accountFormData.salesPrice)) {
            return showError("Sales Price must be a valid number");
        }

        const formDataForApi = new FormData();
        formDataForApi.append("productName", formData.productName || null);
        formDataForApi.append("category", formData.productType.length > 0 ? formData.productType[0] : null);
        formDataForApi.append("availableStock", null);
        formDataForApi.append("reorderLevel", null);
        formDataForApi.append("reorderQty", null);
        formDataForApi.append("incommingOutgoing", null);
        formDataForApi.append("UOM", null);
        formDataForApi.append("transactionType", formData.transactionType.length > 0 ? formData.transactionType[0] : null);
        formDataForApi.append("barcode", formData.barcode || null);
        formDataForApi.append("restockLevel", null);
        formDataForApi.append("restockBuildQuantity", null);

        //console.log("selectedImage", selectedImage)

        if (selectedImage) {
            formDataForApi.append("product_image", selectedImage);
        }

        if (selectedFile) {
            formDataForApi.append("attachment_file", selectedFile);
        }

        if (!formData.productName.trim()) {
            return showError("Product Name Required")
        }
        setIsLoading(true)
        const token = getAuthToken()
        axios.post(`${apiUrl}/inventory/product/create_product`, formDataForApi, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            }
        })
            .then((res) => {
                showSuccess("Product Created successfully")
                setDrawerOpen(false)
            })
            .catch((error) => {
                showError(error.response.data?.message || "Some Error Occured");
            }).finally(() => {
                setIsLoading(false)
            })
    }

    //console.log(formData, accountFormData)
    return (
        <div className="px-2 mb-7">
            <div className="flex border-b mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 text-sm ${activeTab === tab
                            ? "border-b-2 border-[#db3647] text-[#db3647]"
                            : "text-gray-600"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === "General Info" && (
                <div className="">
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="border-dashed border-2 border-gray-300 rounded p-4 text-center ">
                            <p className="text-sm text-gray-500 mb-2">Attach Image</p>
                            <Upload beforeUpload={handleImageChange} showUploadList={false}>
                                <Button icon={<PlusOutlined />} className="border-none text-[#db3647]">Add Image</Button>
                            </Upload>
                        </div>

                        {/* Add Files */}
                        <div className="">
                            <div className="border-dashed border-2 border-gray-300 rounded p-4 text-center">
                                <p className="text-sm text-gray-500 mb-2">Attach File</p>
                                <Upload beforeUpload={handleFileChange} showUploadList={false}>
                                    <Button icon={<PlusOutlined />} className="border-none text-[#db3647]">Add Files</Button>
                                </Upload>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-4 mt-2">
                            <p className="font-bold text-[#db3647] text-[16px] mb-3 mt-5">Offering Product Type </p>
                            <div className="mt-6">
                                <Button
                                    className={`mr-2 ${selectedOffering === "Goods" ? "bg-[#db3647] text-white" : "bg-white text-black"}`}

                                    onClick={() => setSelectedOffering("Goods")}
                                >
                                    Goods
                                </Button>
                                <Button
                                    className={`${selectedOffering === "Services" ? "bg-[#db3647] text-white" : "bg-white text-black"}`}
                                    onClick={() => setSelectedOffering("Services")}
                                >
                                    Services
                                </Button>
                            </div>
                        </div>

                        {/* Product Type */}
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Product Type *</label>
                            <MultipleSelect
                                options={productTypeOptions}
                                selectedValues={formData.productType}
                                onChange={(e) => handleSelectChange("productType", e.target.value)}
                                label="Product Type"
                            />

                        </div>

                        {/* Transaction Type */}
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Transaction Type *</label>
                            <MultipleSelect
                                options={transactionTypeOptions}
                                selectedValues={formData.transactionType}
                                onChange={(e) => handleSelectChange("transactionType", e.target.value)}
                                label="Transaction Type"
                            />

                        </div>

                        {/* Auto-Numbering Format */}
                        <div className="mb-4">
                            <label className="block font-medium mb-1">
                                Auto-Numbering Format *
                            </label>
                            <Input value="P-0000000" disabled size="small" className="w-full rounded" />
                        </div>

                        {/* Product Name */}
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Product Name *</label>
                            <Input
                                value={formData.productName}
                                onChange={(e) => handleInputChange("productName", e)}
                                placeholder="Enter Product Name"
                                size="small" className="w-full rounded"
                            />
                        </div>

                        {/* Barcode */}
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Barcode</label>
                            <Input
                                value={formData.barcode}
                                onChange={(e) => handleInputChange("barcode", e)}
                                placeholder="Enter Barcode"
                                size="small" className="w-full rounded"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label className="block font-medium mb-1">Description</label>
                            <TextArea
                                value={formData.description}
                                onChange={(e) => handleInputChange("description", e)}
                                rows={4}
                                placeholder="Enter Description"
                            />
                        </div>
                    </div>

                    {/* Custom Fields */}
                    <div className="col-span-2 mt-4">
                        <p className="font-bold text-[#db3647] text-[16px] mb-3 mt-5">Custom Fields</p>
                        <div>
                            <label className="block font-medium mb-1">Fabric Variety *</label>
                            <MultipleSelect
                                options={fabricOptions}
                                selectedValues={formData.fabricVariety}
                                onChange={(e) => handleSelectChange("fabricVariety", e.target.value)}
                                label="Fabric Variety"
                            />
                        </div>
                    </div>


                    <button
                        onClick={() => handleNext()}
                        className="bg-[#db3647] text-white px-4 py-2 rounded mt-5"
                    >
                        Next
                    </button>
                </div>
            )}

            {activeTab === "Accounting" && <div >
                {/* Buy Details */}
                <div className="mb-6">
                    <p className="font-bold text-[#db3647] text-[16px] mb-3 mt-5">Buy Details</p>
                    <div>
                        {/* Purchase Account */}
                        <div>
                            <label className="block font-medium mb-1">Purchase Account *</label>
                            <Input
                                value={accountFormData.purchaseAccount}
                                onChange={(e) => handleChange("purchaseAccount", e.target.value)}
                                placeholder="Enter Purchase Account"
                                size="small" className="w-full rounded"
                            />
                        </div>
                        {/* Purchase Price */}
                        <div>
                            <label className="block font-medium mb-1 mt-4">Purchase Price *</label>
                            <Input
                                type="text"
                                value={accountFormData.purchasePrice}
                                onChange={(e) => handleChange("purchasePrice", e.target.value)}
                                placeholder="Enter Purchase Price"
                                size="small" className="w-full rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Sell Details */}
                <div className="mb-6">
                    <p className="font-bold text-[#db3647] text-[16px] mb-3 mt-5">Sell Details</p>
                    <div >
                        {/* Sales Account */}
                        <div>
                            <label className="block font-medium mb-1">Sales Account *</label>
                            <Input
                                value={accountFormData.salesAccount}
                                onChange={(e) => handleChange("salesAccount", e.target.value)}
                                placeholder="Enter Sales Account"
                                size="small" className="w-full rounded"
                            />
                        </div>
                        {/* Sales Price */}
                        <div>
                            <label className="block font-medium mb-1 mt-4 ">Sales Price *</label>
                            <Input
                                type="text"
                                value={accountFormData.salesPrice}
                                onChange={(e) => handleChange("salesPrice", e.target.value)}
                                placeholder="Enter Sales Price"
                                size="small" className="w-full rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Return Details */}
                <div>
                    <p className="font-bold text-[#db3647] text-[16px] mb-3 mt-5">Return</p>
                    <div >
                        {/* Sales Return Account */}
                        <div>
                            <label className="block font-medium mb-1">
                                Sales Return Account *
                            </label>
                            <Input
                                value={accountFormData.salesReturnAccount}
                                onChange={(e) =>
                                    handleChange("salesReturnAccount", e.target.value)

                                }
                                placeholder="Enter Sales Return Account"
                                size="small" className="w-full rounded"
                            />
                        </div>
                        {/* Purchase Return Account */}
                        <div>
                            <label className="block font-medium mb-1 mt-4">
                                Purchase Return Account *
                            </label>
                            <Input
                                value={accountFormData.purchaseReturnAccount}
                                onChange={(e) =>
                                    handleChange("purchaseReturnAccount", e.target.value)
                                }
                                placeholder="Enter Purchase Return Account"
                                size="small" className="w-full rounded"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                    <button
                        onClick={handleAddProduct}
                        className="bg-[#db3647] text-white px-4 py-2 rounded"
                    >
                        {isLoading && < CircularProgress size={12} />}Save
                    </button>
                </div>
            </div>
            }
        </div>
    );
};

export default ProductDetails;



