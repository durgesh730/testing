import { useEffect, useState } from "react";
import fetcher from "../helper/fetcher";

export const useGetCustomer = () => {
    const [customer, setCustomer] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [refetchCounter, setRefetchCounter] = useState(0);
    const [params, setParams] = useState({
        page: 1,
        limit: 25,
        query: ""
    })

    const setPage = (page) => {
        setParams({ ...params, page: page })
    }

    const refetch = () => {
        setRefetchCounter((prev) => prev + 1)
    }

    useEffect(() => {
        fetcher.get(`/inventory/customer/get_all_customer?query=${params.query}&page=${params.page}&limit=${params.limit}`)
            .then((res) => {
                setCustomer(res.data.data)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [params, refetchCounter])

    return {
        setPage,
        isLoading,
        params,
        setParams,
        customer,
        refetch,
    }
}

export const useGetProduct = () => {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [refetchCounter, setRefetchCounter] = useState(0);
    const [params, setParams] = useState({
        page: 1,
        limit: 25,
        query: ""
    })

    const setPage = (page) => {
        setParams({ ...params, page: page })
    }

    const refetch = () => {
        setRefetchCounter((prev) => prev + 1)
    }

    useEffect(() => {
        fetcher.get(`/inventory/product/get_all_product?productName=${params.query}&page=${params.page}&limit=${params.limit}`)
            .then((res) => {
                setProduct(res.data.data.products)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [params, refetchCounter])

    return {
        setPage,
        isLoading,
        params,
        setParams,
        product,
        refetch,
    }
}