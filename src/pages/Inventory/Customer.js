import fetcher from '../../helper/fetcher';
import React, { useEffect, useState } from 'react'
import { useSnackbar } from '../../context/SnackBarContext';
import { Users } from '../../features/Inventory/UserMangement/Users'
import { SideDrawer } from '../../component/SideDrawer/SideDrawer';
import LoaderButton from '../../component/LoaderButton';
import WarningModal from '../../component/WarningModal';
import { AddUser } from '../../features/Inventory/UserMangement/AddUser';

const Customer = () => {
  const { showSuccess, showError } = useSnackbar();
  const [state, setState] = useState({
    users: [],
    isLoading: false,
    email: "",
    phone: "",
    fname: "",
    lname: "",
    title: "Add User",
    isDrawerOpen: false,
    selectedRows: [],
    isModalOpen: false,
    id: null,
    showPassword: false,
    showConfirmPassword: false,
    password: "",
    cPassword: "",
    roles: {
      admin: false,
      subAdmin: false,
      salesPerson: false,
    },
    isEditPassword: false,
    query: ''
  })
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  })
  const [refetch, setRefetch] = useState(1)
  const { query, isLoading, email, fname, lname, phone, password, cPassword, roles } = state

  const updateState = (data) => {
    setState((prevState) => {
      const newState = { ...prevState, ...data }
      return newState
    })
  }

  const activeRole = Object.entries(roles).find(([key, value]) => value)?.[0] || null;

  const handleGetAllUsers = () => {
    fetcher.get(`/inventory/auth/get_all_users?query=${query}&page=${params.page}&limit=${params.limit}`)
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
    handleGetAllUsers()
  }, [refetch])

  const validateInputs = () => {
    if (!fname.trim()) return 'First Name is required.';
    if (!lname.trim()) return 'Last Name is required.';
    if (!email.trim()) return 'Email is required.';
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(email)) return 'Enter a valid email address.';
    if (!phone.trim()) return 'Phone number is required.';
    if (!/^\+?\d{10,12}$/.test(phone)) return 'Invalid Phone number';
    if (state.title === 'Add User') {
      if (!password) return 'Password is required.';
      if (password.length < 6) return 'Password must be at least 6 characters.';
      if (password !== cPassword) return 'Passwords do not match.';
    }
    if (!activeRole) return 'Select at least one role.';
    return null;
  };

  const handleSaveUser = (title) => {
    const error = validateInputs();
    if (error) {
      showError(error);
      return;
    }
    
    updateState({ isLoading: true })
    const d = { name: fname + " " + lname, email, telephone: phone, password, role: activeRole }
    if (title == "Add User") {
      if (cPassword !== password) {
        return showError("Password not Matched")
      } else {
        fetcher.post("/inventory/auth/create_account", d)
          .then((res) => {
            setRefetch((pre) => pre + 1)
            showSuccess("Created successfully")
          })
          .catch((error) => {
            showError(error.response.data?.message || "Some Error Occured");
          }).finally(() => {
            updateState({ isLoading: false, isDrawerOpen: false })
          })
      }
    } else {
      const updatedData = { name: fname + " " + lname, email, telephone: phone, role: activeRole }
      if (!state.id) return;
      fetcher.put(`/inventory/auth/update_profile/${state.id}`, updatedData)
        .then((res) => {
          setRefetch((pre) => pre + 1)
          showSuccess("Update successfully")
        })
        .catch((error) => {
          showError(error.response.data?.message || "Some Error Occured");
        }).finally(() => {
          updateState({ isLoading: false, isDrawerOpen: false })
        })
    }
  }

  const handleDeleteUser = () => {
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

  const handleClose = (prev) => {
    updateState({ isDrawerOpen: !prev })
  }
  return (
    <div>
      <Users
        parentState={state}
        handleSaveUser={handleSaveUser}
        updateFunc={updateState}
        handleGetAllUsers={handleGetAllUsers}
      />

      <WarningModal
        isOpen={state.isModalOpen}
        onClose={() => updateState({ isModalOpen: false })}
        modalTitle="Are you sure you want to delete this item?"
        onConfirm={handleDeleteUser}
        onCancel={() => updateState({ isModalOpen: false })}
        confirmText={isLoading ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        isLoading={isLoading}
      />

      <SideDrawer
        open={state.isDrawerOpen}
        onClose={handleClose}
        title={state.title}
        headerHidden={true}
        customWidth={true}
      >
        <div className="px-4 pt-4 mb-7">
          <AddUser parentState={state} updateFunc={updateState} />
          <div className="flex justify-start space-x-2">
            <LoaderButton
              label={"Save"}
              isLoading={state.isLoading}
              handleClick={() => handleSaveUser(state.title)}
            />
            <button
              onClick={() => updateState({ isDrawerOpen: false })}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </SideDrawer>
    </div>
  )
}

export default Customer