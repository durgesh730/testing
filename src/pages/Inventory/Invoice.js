import axios from 'axios';
import React, { useState } from 'react'
import { useGetCustomer } from '../../hooks/Invoice';
import { useSnackbar } from '../../context/SnackBarContext'
import { CustomSearch } from '../../component/CustomSearch'
import { SideDrawer } from '../../component/SideDrawer/SideDrawer'
import InvoiceUI from '../../features/Inventory/InvoiceUI/InvoiceUI'
import { InvoiceForm } from '../../features/Inventory/InvoiceUI/InvoiceForm'
import { InvoiceBill } from '../../features/Inventory/InvoiceUI/InvoiceBill'
import AddNewContact from '../../features/Inventory/InvoiceUI/AddNewContact'
import { apiUrl, getAuthToken } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
    const navigate = useNavigate()
    const { showSuccess, showError } = useSnackbar();
    const { params, customer, setParams } = useGetCustomer()
    const [state, setState] = useState({
        isModalOpen: false,
        selectedContact: null,
        isDrawerOpen: false,
        isContactDrawerOpen: false,
        isProductDrawerOpen: false,
        availableUser: [],
        isLoading: false,
        searchQuery: '',
        memo: '',
        attachment: null,
    })
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        invoiceDate: "",
        dueDate: "",
        shipBy: "",
        customerOrderNo: "",
        tallyBill: "",
        trackingId: "",
        shippingDate: "",
        salesPerson: "",
        source: "",
    });
    const [tableData, setTableData] = useState([{
        id: 1,
        product: "",
        productCode: "",
        description: "",
        quantity: '',
        availableQty: '',
        UOM: "",
        price: '',
        discount: '',
        tax: "",
        amount: '',
    }]);

    const [billingData, setBillingData] = useState({
        subTotal: "0.00",
        totalDiscount: '0.00',
        beforeTax: '0.00',
        tax: '0.00',
        tcs: '0.00',
        roundOff: '0',
        total: '0.00',
    })

    const updateState = (data) => {
        setState((prevState) => {
            const newState = { ...prevState, ...data }
            return newState
        })
    }

    const handleSelectUser = (item) => {
        updateState({ selectedContact: item, isContactDrawerOpen: false })
    }

    //console.log("attachment ===>>", state.attachment)

    const handleSaveInvoice = () => {

        const formD = new FormData();
        formD.append('billTo', state.selectedContact?._id);
        formD.append('shipTo', state.selectedContact?._id);
        formD.append('invoiceDate', formData.invoiceDate);
        formD.append('dueDate', formData.dueDate);
        formD.append('shipByDate', formData.shippingDate);
        formD.append('customerOrderNo', formData.customerOrderNo);
        formD.append('tallyBill', formData.tallyBill);
        formD.append('trackingId', formData.trackingId);
        formD.append('shippingOrDate', formData.shipBy);
        formD.append('salesPerson', formData.salesPerson);
        formD.append('source', formData.source);
        formD.append('total', billingData.total);
        formD.append('subTotal', billingData.subTotal);
        formD.append('totalDiscount', billingData.totalDiscount);
        formD.append('tax', billingData.tax);
        formD.append('memo', state.memo);

        formD.append('product', JSON.stringify(tableData));

        if (state.attachment) {
            formD.append('attachedFile', state.attachment);
        }

        if (!billingData.subTotal) {
            return showError("Subtotal is Required")
        }
        updateState({ isLoading: true })
        const token = getAuthToken()
        axios.post(`${apiUrl}/inventory/invoice/create_invoice`, formD, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `${token}`,
            }
        })
            .then((res) => {
                showSuccess("Invoice Created successfully")
                setTimeout(() => {
                    navigate("/inventory/manage-invoice")
                }, 1000)
            })
            .catch((error) => {
                showError(error.response.data?.message || "Some Error Occured");
            }).finally(() => {
                updateState({ isLoading: false })
                setTimeout(() => {
                    setModalOpen(false)
                }, 500)

            })
    }

    const handleAddAddress = () => {
        updateState({ isContactDrawerOpen: false })
        setTimeout(() => {
            updateState({ isDrawerOpen: true })
        }, 500)
    }

    // //console.log("formData ===", formData, "tableData ===>>", tableData)
    //console.log("billingData ====>>>", billingData,)

    return (
        <div className='bg-white rounded-lg pb-12'>
            <InvoiceForm
                state={state}
                updateFunc={updateState}
                formData={formData}
                handleSaveInvoice={handleSaveInvoice}
                setFormData={setFormData}
                billingData={billingData}
                setModalOpen={setModalOpen}
                tableData={tableData}
                modalOpen={modalOpen}
            />
            <InvoiceUI
                setBillingData={setBillingData}
                state={state}
                setTableData={setTableData}
                updateFunc={updateState}
                tableData={tableData}
            />
            <InvoiceBill
                state={state}
                updateFunc={updateState}
                billingData={billingData}
            />

            <SideDrawer
                open={state.isDrawerOpen}
                onClose={() => updateState({ isDrawerOpen: false })}
                title={"Update Contact"}
                headerHidden={true}
                customWidth={true} >
                <div className='py-0 px-6'>
                    <AddNewContact updateFunc={updateState} />
                </div>
            </SideDrawer>

            <SideDrawer open={state.isContactDrawerOpen}
                onClose={() => updateState({ isContactDrawerOpen: false })}
                title={"Add New Contect"}
                headerHidden={true}
                customWidth={false} >
                <div className=' px-4'>
                    <CustomSearch
                        value={params.query}
                        onChange={(e) => setParams((pev) => ({ ...pev, query: e.target.value }))}
                    />
                    <div className='pt-4 max-h-[70vh]  overflow-y-auto'>
                        {customer && customer.map((item, index) => {
                            return (
                                <p key={index} onClick={() => handleSelectUser(item, index)} className='cursor-pointer  p-1 hover:text-[#db3647]' >{item.customerName}</p>
                            )
                        })}
                    </div>
                    <button onClick={handleAddAddress} className="mb-4 px-4 py-2 border-[#db3647] bg-white text-[#db3647] border-[1.5px] rounded hover:text-white hover:bg-[#db3647] mt-6">
                        + Add New
                    </button>
                </div>
            </SideDrawer>
        </div>
    )
}

export default Invoice
