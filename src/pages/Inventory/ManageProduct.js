import React, { useEffect, useState } from 'react'
import AllProduct from '../../features/Inventory/ManageProduct/AllProduct'
import WarningModal from '../../component/WarningModal'
import fetcher from '../../helper/fetcher'
import { useSnackbar } from '../../context/SnackBarContext'

const ManageProduct = () => {
    const { showSuccess, showError } = useSnackbar();
    const [state, setState] = useState({
        query: "",
        isModalOpen: false,
        isLoading: false,
        products: [],
        id: null
    })
    const [params, setParams] = useState({
        page: 1,
        limit: 10,
    })
    const [refetch, setRefetch] = useState(1)

    const updateState = (data) => {
        setState((prevState) => {
            const newState = { ...prevState, ...data }
            return newState
        })
    }

    const handleGetAllProduct = () => {
        fetcher.get(`/inventory/auth/get_all_users?query=${state.query}&page=${params.page}&limit=${params.limit}`)
            .then((res) => {
                updateState({ users: res.data?.data })
            })
            .catch((error) => {
                showError(error.response.data?.message || "Some Error Occured");
            }).finally(() => {
                updateState({ isLoading: false, query: "" })
            })
    }

    useEffect(() => {
        handleGetAllProduct()
    }, [refetch])

    const handleDeleteProduct = () => {
        if (!state.id) return;
        updateState({ isLoading: true })
        fetcher.delete(`/inventory/auth/delete_account/${state.id}`)
            .then((res) => {
                showSuccess("Deleted successfully")
            })
            .catch((error) => {
                showError("Some Error Occured");
            }).finally(() => {
                setRefetch((pre) => pre + 1)
                updateState({ isLoading: false, isModalOpen: false })
            })
    }

    return (
        <div>
            <AllProduct
                products={state.products}
                updateFunc={updateState}
                handleGetAllUsers={handleGetAllProduct}
                parentState={state}
            />
            <WarningModal
                isOpen={state.isModalOpen}
                onClose={() => updateState({ isModalOpen: false })}
                modalTitle="Are you sure you want to delete this item?"
                onConfirm={handleDeleteProduct}
                onCancel={() => updateState({ isModalOpen: false })}
                confirmText={state.isLoading ? "Deleting..." : "Delete"}
                cancelText="Cancel"
                isLoading={state.isLoading}
            />
        </div>
    )
}

export default ManageProduct
