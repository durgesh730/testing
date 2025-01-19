import React, { useEffect, useState } from 'react'
import { ManageInvoiceUI } from '../../features/Inventory/ManageInvoiceUI/ManageInvoiceUI';
import { useSnackbar } from '../../context/SnackBarContext';
import fetcher from "../../helper/fetcher"

export const ManageInvoice = () => {
    const { showSuccess, showError } = useSnackbar();
    const [refetch, setRefetch] = useState(1)
    const [invoices, setInvoices] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [state, setState] = useState({
        id: null,
        isModalOpen: false,
    });
    const [params, setParams] = useState({
        page: 1,
        limit: 10,
        query: "",
    });

    const updateState = (data) => {
        setState((prevState) => {
            const newState = { ...prevState, ...data };
            return newState;
        });
    };

    const handleSearchInvoice = () => {
        fetcher
            .get(
                `/inventory/invoice/get_all_invoice?query=${params.query}&page=${params.page}&limit=${params.limit}`
            )
            .then((res) => {
                setLoading(true);
                //console.log(res.data.data, "kkkkkkk");
                setInvoices(res.data.data);
            })
            .catch((err) => {
                //console.log(err, "errrrr");
            })
            .finally(() => {
                setLoading(false);
            });
    };


    useEffect(() => {
        handleSearchInvoice();
    }, [refetch]);


    const handleDeleteInvoice = () => {
        if (!state.id) return;
        updateState({ isLoading: true });
        fetcher
            .delete(`/inventory/invoice/delete_invoice/${state.id}`)
            .then((res) => {
                showSuccess("Deleted successfully");
            })
            .catch((error) => {
                showError("Some Error Occured");
            })
            .finally(() => {
                setRefetch((pre) => pre + 1)
                updateState({ isLoading: false, isModalOpen: false });
            });
    };

    return (
        <ManageInvoiceUI
            invoices={invoices}
            handleDeleteInvoice={handleDeleteInvoice}
            updateState={updateState}
            handleSearchInvoice={handleSearchInvoice}
            isLoading={isLoading}
            setParams={setParams}
            state={state}
            params={params}
        />
    )
}
