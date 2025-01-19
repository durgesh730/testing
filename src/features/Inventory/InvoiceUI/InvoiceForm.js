import React, { useState } from 'react';
import Modal from '../../../component/Modal/Modal';
import ManageOrganisation from './ManageOrganisation';
import fetcher from '../../../helper/fetcher';
import { useSnackbar } from '../../../context/SnackBarContext';
import { SideDrawer } from '../../../component/SideDrawer/SideDrawer';
import WarningModal from '../../../component/WarningModal';

export const InvoiceForm = ({
  state,
  updateFunc,
  setFormData,
  formData,
  handleSaveInvoice,
  setModalOpen,
  modalOpen,
  tableData,
  billingData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { showSuccess, showError } = useSnackbar();

  const handleAddContactClick = () => {
    updateFunc({ isContactDrawerOpen: true })
  }

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
    setTimeout(() => {
      closeModal()
    }, 500)

  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = () => {
    const requiredFields = [
      { field: 'invoiceDate', message: 'Invoice Date is required' },
      { field: 'dueDate', message: 'Due Date is required' },
      { field: 'customerOrderNo', message: 'Customer Order Number is required' },
      { field: 'tallyBill', message: 'Tally Bill is required' },
    ];

    for (let item of requiredFields) {
      if (!formData[item.field]) {
        showError(item.message);
        return false;
      }
    }
    return true;
  };

  const validateTableData = () => {
    for (let row of tableData) {
      if (!row.product) {
        showError('Product is required for each row');
        return false;
      }
      if (!row.quantity || isNaN(row.quantity) || row.quantity <= 0) {
        showError('Quantity Required');
        return false;
      }
      if (!row.price || isNaN(row.price) || row.price <= 0) {
        showError('Price must be a valid number');
        return false;
      }
    }
    return true;
  };

  const validateBillingData = () => {
    if (!billingData.subTotal || parseFloat(billingData.subTotal) <= 0) {
      showError('Subtotal must be greater than 0');
      return false;
    }
    if (!billingData.total || parseFloat(billingData.total) <= 0) {
      showError('Total must be greater than 0');
      return false;
    }
    return true;
  };


  const handleSaveButton = () => {
    if (!state.selectedContact) {
      showError("Contact is Required")
      return;
    }

    if (!validateFormData() || !validateTableData() || !validateBillingData()) {
      return;
    }

    setModalOpen(true)
  }

  return (
    <div>
      <div>
        <div className="flex justify-between items-center mb-4 bg-[#f4f5f7] pb-3 md:px-0 px-3">
          <h2 className="md:text-[28px] text-[20px] font-bold text-gray-800">New Invoice</h2>
          <button
            onClick={() => handleSaveButton()}
            className="md:px-4  px-2 md:py-2 py-1  bg-gray-800 text-white border-gray-400 border rounded hover:bg-black">
            Save
          </button>
        </div>

        <div className="md:px-5 px-2">
          <div className="flex md:flex-row flex-col justify-between">
            <div>
              <div>
                <div className="mb-4">
                  <p className="font-bold text-gray-800 text-[16px]">amber silk mills</p>
                  <p className="text-gray-600 md:text-[16px] text-[14px] cursor-pointer" onClick={openModal}>
                    9/1117, JAINMATI GALI, SUBHASH ROAD, GANDHI NAGAR, DELHI, Delhi, India, 110031
                  </p>
                </div>
                {state.selectedContact &&
                  <div className='flex flex-row items-center'>
                    <div>
                      <h3 onClick={() => updateFunc({ isContactDrawerOpen: true })} className="text-[#525256] font-semibold mb-2 cursor-pointer">Bill To</h3>
                      <p onClick={() => updateFunc({ isContactDrawerOpen: true })} className="text-gray-800 font-bold cursor-pointer">
                        {state.selectedContact ? state.selectedContact.customerName : 'Select a Contact'}
                      </p>
                      <p onClick={() => updateFunc({ isDrawerOpen: true })} className="text-[#525256] md:text-[14px] text-[12px] cursor-pointer hover:bg-gray-100 py-2 pr-2">
                        {state.selectedContact ? state.selectedContact.billingAddressOne : 'Address will be displayed here.'}
                      </p>
                    </div>

                    <div className='ml-12'>
                      <h3 onClick={() => updateFunc({ isContactDrawerOpen: true })} className="text-gray-700 font-semibold mb-2 cursor-pointer">Ship To</h3>
                      <p onClick={() => updateFunc({ isContactDrawerOpen: true })} className="text-gray-800 font-bold cursor-pointer">
                        {state.selectedContact ? state.selectedContact.customerName : 'Select a Contact'}
                      </p>
                      <p onClick={() => updateFunc({ isDrawerOpen: true })} className="text-gray-600 md:text-[14px] text-[12px] cursor-pointer hover:bg-gray-100 py-2 pr-2">
                        {state.selectedContact ? state.selectedContact.shippingAddressOne : 'Address will be displayed here.'}
                      </p>
                    </div>
                  </div>
                }
              </div>

              <button
                onClick={handleAddContactClick}
                className="px-4 py-2 border-[#db3647] bg-white text-[#db3647] border-[1.5px] rounded hover:text-white hover:bg-[#db3647] "
              >
                + Add a Contact
              </button>
            </div>

            <div className='flex justify-end'>
              <div className="flex flex-col mb-4">
                <p className="text-gray-700">Balance Due:</p>

                <span className="text-gray-700 text-[24px] font-bold ">₹{billingData.total || "0.00"}</span>
                <p className="text-gray-700 text-sm font-semibold mt-4">
                  # No: <span className=' text-gray-500' >00 (Auto generate)</span>
                </p>
              </div>
            </div>
          </div>

          {!state.selectedContact && <span className='text-[#db3647] text-[12px]'>Contact is Required*. Click Above</span>}

          {/* Invoice Details */}
          <div>
            <div className="grid lg:grid-cols-5 md:flex-wrap gap-4 mb-6 max-w-[1000px] mt-9">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Invoice Date *</label>
                <input
                  type="date"
                  name="invoiceDate"
                  value={formData.invoiceDate}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select Invoice Date"

                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Due Date *</label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select Due Date"

                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ship By (expected)</label>
                <input
                  type="date"
                  name="shipBy"
                  value={formData.shipBy}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select Ship By Date"

                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Customer Order No. *</label>
                <input
                  type="text"
                  name="customerOrderNo"
                  value={formData.customerOrderNo}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Customer Order No."

                />
              </div>
            </div>
            <div className="grid lg:grid-cols-5 md:flex-wrap gap-4 mb-6 max-w-[1000px]">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">TALLY BILL *</label>
                <input
                  type="text"
                  name="tallyBill"
                  value={formData.tallyBill}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Tally Bill"

                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">TRACKING ID</label>
                <input
                  type="text"
                  name="trackingId"
                  value={formData.trackingId}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Tracking ID"

                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">SHIPPING / DATE</label>
                <input
                  type="date"
                  name="shippingDate"
                  value={formData.shippingDate}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Select Shipping Date"

                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">SALES PERSON</label>
                <input
                  type="text"
                  name="salesPerson"
                  value={formData.salesPerson}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Sales Person"

                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">SOURCE</label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Source"

                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WarningModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        modalTitle="Are you sure you want to save this invoice?"
        onConfirm={handleSaveInvoice}
        onCancel={() => setModalOpen(false)}
        confirmText="Yes, Confirm"
        cancelText="Cancel"
        isLoading={state.isLoading}
        color={false}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Manage Address">
        <p className='mb-5'>9/1117, JAINMATI GALI, SUBHASH ROAD, GANDHI NAGAR, DELHI, Delhi, India, 110031</p>

        <div className='flex flex-wrap items-center gap-3'>
          <button
            className="mb-4 px-4 py-2 text-[#db3647] border-2 border-[#db3647] bg-white rounded " onClick={openDrawer}
          >
            Manage Address
          </button>
          <div>
            <button onClick={closeModal} className="mb-4 px-4 py-2 bg-red-500 text-white rounded "
            >Close</button>
          </div>
        </div>
      </Modal>

      <SideDrawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        title="Update Organization Profile"
        headerHidden={true}
        customWidth={true}
      >
        <div className='px-5'>
          <ManageOrganisation />
        </div>
      </SideDrawer>
    </div>
  );
};