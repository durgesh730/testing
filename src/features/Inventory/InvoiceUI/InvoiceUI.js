import React, { useEffect, useState } from "react";
import LongMenu from "../../../component/LongMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import InvoiceTable from "../../../component/InvoiceTable";
import { CustomSearch } from "../../../component/CustomSearch";
import { useGetProduct } from "../../../hooks/Invoice";
import ProductDetails from "./ProductDetails";
import { SideDrawer } from "../../../component/SideDrawer/SideDrawer";
import InvoiceInput from "../../../component/InventoryUI/InvoiceInput";
import { calculateInvoiceAmount, calculateInvoiceTotals } from "../../../utils/utils";
import { useSnackbar } from "../../../context/SnackBarContext";

const InvoiceUI = ({ state, updateFunc, setTableData, tableData, setBillingData }) => {
  const { product: productsName, params, setParams } = useGetProduct()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { showSuccess, showError } = useSnackbar();
  const [row, setRow] = useState(0)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuOptions = [
    { id: 1, title: "Delete", icon: <DeleteIcon />, color: "red" },
  ];

  const handleOptions = (rowId) => {
    setTableData((prevData) => {
      if (prevData.length > 1) {
        return prevData.filter((item) => item.id !== rowId);
      } else {
        return prevData;
      }
    });
  };

  // Optimized handleInputChange
  const handleInputChange = (id, field, value) => {
    setTableData((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };

          if (["quantity", "price", "discount", "tax"].includes(field)) {
            updatedItem.amount = calculateInvoiceAmount({
              quantity: updatedItem.quantity,
              price: updatedItem.price,
              discount: updatedItem.discount,
              tax: updatedItem.tax,
            });
          }

          return updatedItem;
        }
        return item;
      });

      setBillingData(calculateInvoiceTotals(updatedData));
      return updatedData;
    });
  };

  const transformedData = tableData.map((item, index) => ({
    product: {
      value: (<div
        onClick={() => { updateFunc({ isProductDrawerOpen: true }); setRow(index) }}
        className={`cursor-pointer bg-red-100`}
        style={{
          height: "100%",
          minHeight: "1.5rem",
        }}>
        {item.product && <span>{item.product}</span>}
      </div>),
      type: "custom",
    },
    productCode: {
      value: item.productCode,
      type: "custom",
    },
    description: {
      value: (
        <InvoiceInput
          value={item.description}
          placeholder=""
          onChange={(e) => handleInputChange(item.id, "description", e.target.value)}
        />
      ),
      type: "custom",
    },
    quantity: {
      value: (
        <InvoiceInput
          value={item.quantity}
          placeholder="1.00"
          onChange={(e) => handleInputChange(item.id, "quantity", e.target.value)}
        />
      ),
      type: "custom",
    },
    availableQty: {
      value: (
        <InvoiceInput
          value={item.availableQty}
          placeholder="0.00"
          onChange={(e) => handleInputChange(item.id, "availableQty", e.target.value)}
        />
      ),
      type: "custom",
    },
    UOM: {
      value: (
        <InvoiceInput
          value={item.UOM}
          placeholder=""
          onChange={(e) => handleInputChange(item.id, "UOM", e.target.value)}
        />
      ),
      type: "custom",
    },
    price: {
      value: (
        <InvoiceInput
          value={item.price}
          icon={true}
          placeholder="0.00"
          onChange={(e) => handleInputChange(item.id, "price", e.target.value)}
        />
      ),
      type: "custom",
    },
    discount: {
      value: (
        <InvoiceInput
          value={item.discount}
          placeholder="0.00"
          icon={true}
          onChange={(e) => handleInputChange(item.id, "discount", e.target.value)}
        />
      ),
      type: "custom",
    },
    tax: {
      value: (
        <InvoiceInput
          value={item.tax}
          right={false}
          icon={true}
          typeIcon={"%"}
          placeholder="0.00"
          onChange={(e) => handleInputChange(item.id, "tax", e.target.value)}
        />
      ),
      type: "custom",
    },
    amount: {
      value: (
        <InvoiceInput
          value={item.amount}
          icon={true}
          placeholder="0.00"
          onChange={(e) => handleInputChange(item.id, "amount", e.target.value)}
        />
      ),
      type: "custom",
    },
    Action: {
      value: (
        <LongMenu
          options={menuOptions}
          handleOptions={() => handleOptions(item.id)}
        />
      ),
      type: "custom",
    },
  }));

  const columns = [
    "Product *",
    "Product Code",
    "Description",
    "Quantity *",
    "Available Qty",
    "UOM",
    "Price *",
    "Discount",
    "Tax",
    "Amount",
    "Action",
  ];

  const handleAddItem = () => {
    const newRow = {
      id: tableData.length + 1,
      product: "",
      productCode: "",
      description: "",
      quantity: "",
      availableQty: "",
      UOM: "",
      price: "",
      discount: "",
      tax: "",
      amount: "",
    };
    setTableData((prevData) => [...prevData, newRow]);
  };

  const handleClearAllItems = () => {
    setTableData([]);
  };

  const handleSelectedProduct = (item) => {
    setTableData((prevData) => {
      const isProductCodeExists = prevData.some(
        (rowData) => rowData.productCode === item.productCode
      );

      if (isProductCodeExists) {
        showError("This Product Already Selected Plz Select Other")
        return prevData;
      }

      return prevData.map((rowData, index) =>
        index === row
          ? {
            ...rowData,
            product: item.productName,
            productCode: item.productCode || "",
            description: item.description || "",
            price: item.price || '',
            availableQty: item.availableQty || '',
            UOM: item.UOM || "",
          }
          : rowData
      )
    })
    updateFunc({ isProductDrawerOpen: false });
  };


  const handleAddProduct = () => {
    updateFunc({ isProductDrawerOpen: false })
    toggleDrawer()
  }

  return (
    <div className="md:px-5 px-2">
      <div className="">
        <InvoiceTable
          data={transformedData}
          columns={columns}
          checkbox={false}
          defaultRowSelected={[0]}
        />
      </div>
      <div className="flex md:flex-row flex-wrap items-center justify-between space-x-4 mb-4 mt-4">
        {/* Top Section */}
        <div className="flex md:flex-row flex-wrap items-center space-x-4 mb-4">
          <button
            className="text-[#db3647] font-medium hover:underline"
            onClick={handleAddItem}
          >
            + Add Item
          </button>
          <button
            className="text-red-600 font-medium hover:underline"
            onClick={handleClearAllItems}
          >
            - Clear all items
          </button>
        </div>
        {/* Checkbox */}
        <div>
          <label className="text-gray-600 flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-[#db3647]" />
            <span>Unit price is tax inclusive</span>
          </label>
        </div>
      </div>

      <SideDrawer open={state.isProductDrawerOpen}
        onClose={() => updateFunc({ isProductDrawerOpen: false })}
        title={"Add Product"}
        headerHidden={true}
        customWidth={false} >
        <div className='px-4'>
          <CustomSearch
            value={params.query}
            onChange={(e) => setParams((pev) => ({ ...pev, query: e.target.value }))}
          />
          <div className='pt-4 max-h-[80vh]  overflow-y-auto'>
            {productsName?.length > 0 && productsName?.map((item, index) => {
              return (
                <p key={index} onClick={() => handleSelectedProduct(item)}
                  className='cursor-pointer hover:text-[#db3647] p-1 ' >{item.productName}</p>
              )
            })}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handleAddProduct}
              className="bg-[#db3647] text-white px-4 py-2 rounded"
            >
              +Add New
            </button>
          </div>
        </div>
      </SideDrawer>

      <SideDrawer
        open={drawerOpen}
        onClose={toggleDrawer}
        title="Product Details"
        headerHidden={true}
        customWidth={true}
      >
        <div style={{ padding: "20px" }}>
          <ProductDetails setDrawerOpen={setDrawerOpen} />
        </div>
      </SideDrawer>
    </div>
  );
};

export default InvoiceUI;
