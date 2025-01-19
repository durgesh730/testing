import React from "react";
import moment from "moment";
import { GrView } from "react-icons/gr";
import Search from "../../../component/Search";
import LongMenu from "../../../component/LongMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import DynamicTable from "../../../component/DynamicTable";
import { FaCloudDownloadAlt } from "react-icons/fa";
import WarningModal from "../../../component/WarningModal";

export const ManageInvoiceUI = ({
  invoices,
  updateState,
  handleDeleteInvoice,
  handleSearchInvoice,
  isLoading,
  setParams,
  state,
  params
}) => {

  const columns = [
    "SR.NO.",
    "Number",
    "Contact",
    "Invoice Date",
    "Due Date",
    "Total Amount",
    "Actions",
  ];

  const menuOptions = [
    { id: 1, title: "View", icon: <GrView /> },
    { id: 2, title: "Download", icon: <FaCloudDownloadAlt /> },
    { id: 3, title: "Delete", icon: <DeleteIcon />, color: "red" },
  ];

  const handleOptions = (option, item) => {
    updateState({ id: item._id });
    if (option.id == 1) {
      //console.log("Viewing Invoice:", item);
    } else if (option.id == 2) {
      //console.log("Deleting Invoice:", item);
    } else if (option.id == 3) {
      updateState({ id: item._id, isModalOpen: true });
    }
  };

  const handleRowSelect = (selectedRows) => {
    //console.log("Selected Rows:", selectedRows);
  };

  const transformedData = invoices.map((item, index) => ({
    SRNO: index + 1,
    Number: item.invoiceNo || "N/A",
    Contact: item.shipTo.customerName || "N/A",
    InvoiceDate:
      (item.invoiceDate && moment(item.invoiceDate).format("DD-MM-YYYY")) ||
      "N/A",
    DueDate: (item.dueDate && moment(item.dueDate).format("DD-MM-YYYY")) || "N/A",
    TotalAmount: `₹${item.total}` || "N/A",
    Actions: {
      value: (
        <LongMenu
          options={menuOptions}
          handleOptions={(option) => handleOptions(option, item)}
        />
      ),
      bold: false,
    },
  }))

  return (
    <div>
      {/* Header */}
      <div className="flex md:flex-row flex-col md:justify-between justify-start  gap-3 mb-6 md:px-2 px-4 md:py-0 py-1">
        <h1 className="md:text-[28px] text-[20px] font-bold text-gray-800 ">
          Manage Invoice
        </h1>
        <div className="">
          <Search
            handleSeachButton={handleSearchInvoice}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, query: e.target.value }))
            }
            value={params.query}
          />
        </div>
      </div>

      <div className="bg-white shadow rounded-md md:p-6 p-2 min-h-screen">
        {/* Dynamic Table */}
        <DynamicTable
          data={transformedData}
          columns={columns}
          defaultRowSelected={[]}
          onRowSelect={handleRowSelect}
          checkbox={false}
        />
      </div>

      <WarningModal
        isOpen={state.isModalOpen}
        onClose={() => updateState({ isModalOpen: false })}
        modalTitle="Are you sure you want to delete this item?"
        onConfirm={handleDeleteInvoice}
        onCancel={() => updateState({ isModalOpen: false })}
        confirmText={isLoading ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        isLoading={isLoading}
      />
    </div>
  );
};

