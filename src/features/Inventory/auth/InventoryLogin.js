import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import fetcher from '../../../helper/fetcher';
import { validateEmail } from '../../../validations/validate';
import { useSnackbar } from '../../../context/SnackBarContext';
import { useInventory } from '../../../context/InventoryContext';
import InventoryLoginUI from '../../../component/InventoryUI/InventoryLoginUI';

const InventoryLogin = () => {
    const navigate = useNavigate()
    const { showSuccess, showError } = useSnackbar();
    const { setIsAuthenticated, setUser: Log, setRoles } = useInventory()
    const [user, setUser] = useState({
        email: '',
        password: '',
        isLoading: false
    })

    const validatePassword = (password) => {
        const requirements = [
            { test: (p) => p.length >= 6, message: "Password must contain at least 6 characters" },
            { test: (p) => /[0-9]/.test(p), message: "Password must contain at least one number" },
            { test: (p) => /[a-z]/.test(p), message: "Password must contain one lower case character" },
            { test: (p) => /[A-Z]/.test(p), message: "Password must contain one upper case character" },
            { test: (p) => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(p), message: "Password must contain one special character" }
        ];

        for (const { test, message } of requirements) {
            if (!test(password)) {
                return showError(message);
            }
        }
        return true;
    };

    const updateState = (data) => {
        setUser((prevState) => {
            const newState = { ...prevState, ...data }
            return newState
        })
    }

    const login = async (e) => {
        e.preventDefault()

        if (!validateEmail(user.email)) {
            return showError("Enter valid email")
        } else if (!validatePassword(user.password)) {
            return;
        } else {
            updateState({ isLoading: true })
            fetcher.post("/inventory/auth/login", {
                email: user.email, password: user.password
            })
                .then((res) => {
                    console.log("response ====>>>", res.data.data)
                    Log(res.data.data)
                    setRoles([res.data.data.role])
                    //console.log(res.data.jwt, res.data.data)
                    localStorage.setItem("token", JSON.stringify(res.data?.jwt))
                    showSuccess('Login successfully!');
                    setIsAuthenticated(true)
                    navigate('/inventory/create-invoice')
                })
                .catch((error) => {
                    // console.log("errror ====>>", error)
                    showError("Some Error Occured");
                }).finally(() => {
                    updateState({ isLoading: false })
                })
        }
    }

    return (
        <InventoryLoginUI
            login={login}
            updateState={updateState}
            user={user}
            isLoading={user.isLoading}
        />

    )
}

export default InventoryLogin
