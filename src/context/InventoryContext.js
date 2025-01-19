import React, { createContext, useContext, useEffect, useState } from 'react';
import fetcher from '../helper/fetcher';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [user, setUser] = useState(null)
    const [receiver, setReceiver] = useState(null)
    const [roles, setRoles] = useState([])

    useEffect(() => {
        fetcher.get("/inventory/auth/valid_user")
            .then((res) => {
                if (res?.data?.success) {
                    const user = res.data.data
                    setUser(user)
                    setIsAuthenticated(true)
                    setRoles([res.data.data.role])
                }
            })
            .catch((err) => {
                setIsAuthenticated(false)
            })
    }, [])

    console.log("roles, ===", user, roles)

    const logout = () => {
        localStorage.clear()
        window.location.href = '/'
    };

    return (
        <InventoryContext.Provider value={{
            isAuthenticated, setIsAuthenticated,
            logout, user, setUser, setReceiver, roles, setRoles,
            receiver
        }}>
            {children}
        </InventoryContext.Provider>
    );
};

export const useInventory = () => useContext(InventoryContext);
