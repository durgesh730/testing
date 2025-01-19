import React, { useState } from "react";
import Search from "../../../component/Search";
import EditIcon from "@mui/icons-material/Edit";
import LongMenu from "../../../component/LongMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import DynamicTable from "../../../component/DynamicTable";
import ProductDetails from "../InvoiceUI/ProductDetails";
import { SideDrawer } from "../../../component/SideDrawer/SideDrawer";

const AllProduct = ({ products, updateFunc, handleGetAllUsers, parentState }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const handleRowSelect = (selectedIndexes) => {
        updateFunc({ selectedRows: selectedIndexes })
    };

    const handleOptions = (option, item) => {
        updateFunc({ id: item._id })
        if (option.id == 1) {
            setIsDrawerOpen(true)
        } else if (option.id == 2) {
            updateFunc({ isModalOpen: true, id: item._id })
        }
        //console.log("Selected option:", option);
    };

    const menuOptions = [
        { id: 1, title: "Edit", icon: <EditIcon /> },
        { id: 2, title: "Delete", icon: <DeleteIcon />, color: "red" }
    ];

    const columns = ["SR.NO.", "Product Code", "Product name", "Available Stock", "Category", "Status", "Actions"];

    const transformedData = products.map((item, index) => {
        return {
            SRNO: index + 1,
            Username: {
                value: (
                    <div className=" lg:flex lg:flex-row justify-start items-center gap-2">
                        <img className="w-10 h-10" src={item.profile_image} alt={item.name} />
                        <span>{item.name}</span>
                    </div>
                ),
            },
            Email: item.email,
            telephone: item.telephone,
            Role: {
                value: <span className="text-red-400 ">{item.role}</span>,
                bold: false,
            },
            Status: {
                value: (
                    <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.active ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                            }`}
                    >
                        {item.active ? "Active" : "Disable"}
                    </span>
                ),
                bold: false,
            },
            Actions: {
                value: (
                    <LongMenu
                        options={menuOptions}
                        handleOptions={(prev) => handleOptions(prev, item)}
                    />
                ),
                bold: false,
            },
        };
    });


    const handleAddProduct = () => {
        setIsDrawerOpen(true)
    }

    return (
        <div >
            {/* Header */}
            <div className="flex md:flex-row flex-col justify-between gap-3 mb-6 md:px-0 px-5 md:py-0 py-1">
                <h1 className="md:text-[26px] text-[20px] font-bold text-gray-800">Product Management</h1>
                <button
                    className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-[#191919]"
                    onClick={handleAddProduct}
                >
                    + Add Product
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:p-6 p-2 min-h-screen">
                <div className="flex md:flex-row flex-wrap  justify-between items-center mb-5">
                    <h2 className=" font-bold text-[#db3647] ">
                        All Products
                    </h2>
                    <div className="mt-4">
                        <Search
                            handleSeachButton={handleGetAllUsers}
                            onChange={(e) => updateFunc({ query: e.target.value })}
                            value={parentState.query}
                        />
                    </div>
                </div>

                {/* Dynamic Table */}
                <DynamicTable
                    data={transformedData}
                    columns={columns}
                    defaultRowSelected={[]}
                    onRowSelect={handleRowSelect}
                    checkbox={false}
                />
            </div>

            <SideDrawer
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Product Details"
                headerHidden={true}
                customWidth={true}
            >
                <div style={{ padding: "20px" }}>
                    <ProductDetails setDrawerOpen={setIsDrawerOpen} />
                </div>
            </SideDrawer>
        </div>
    );
};

export default AllProduct
