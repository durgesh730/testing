import React from "react";
import Search from "../../../component/Search";
import EditIcon from "@mui/icons-material/Edit";
import LongMenu from "../../../component/LongMenu";
import DeleteIcon from "@mui/icons-material/Delete";
import DynamicTable from "../../../component/DynamicTable";
import LockResetIcon from "@mui/icons-material/LockReset";
import { useInventory } from "../../../context/InventoryContext";

export const Users = ({ parentState, updateFunc, handleGetAllUsers }) => {
  const { user } = useInventory()
  const handleRowSelect = (selectedIndexes) => {
    updateFunc({ selectedRows: selectedIndexes })
    //console.log("Selected rows:", selectedIndexes);
  };

  const handleOptions = (option, item) => {
    updateFunc({ id: item._id })
    if (option.id == 1) {
      const nameParts = item.name?.split(" ");
      updateFunc({
        email: item.email,
        fname: nameParts[0],
        lname: nameParts[1],
        phone: item.telephone,
        password: "*********",
        cPassword: "*********",
        roles: {
          admin: item.role === "admin",
          subAdmin: item.role === "subAdmin",
          salesPerson: item.role === "salesPerson",
        },
        isEditPassword: true,
        showPassword: false,
        showConfirmPassword: false,
      })
      updateFunc({ isDrawerOpen: true, title: "Edit User" })
    } else if (option.id == 4) {
      if (user._id === item._id) {
        return;
      }
      updateFunc({ isModalOpen: true, id: item._id })
    }
    //console.log("Selected option:", option);
  };

  const columns = ["User name", "Email", "Phone Number", "Role", "Status", "Actions"];

  const transformedData = parentState.users.map((item) => {
    const menuOptions = [
      { id: 1, title: "Edit", icon: <EditIcon /> },
      { id: 3, title: "Reset Password", icon: <LockResetIcon /> },
      ...(user._id !== item._id
        ? [{ id: 4, title: "Delete", icon: <DeleteIcon />, color: "red" }]
        : []),
    ];
  
    return {
      Username: {
        value: (
          <div className=" lg:flex lg:flex-row justify-start items-center gap-2">
            <img className="w-10 h-10" src={item.profile_image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ),
      },
      Email: item.email,
      telephone: item.telephone,
      Role: {
        value: <span className="text-red-400 ">{item.role}</span>,
        bold: false,
      },
      Status: {
        value: (
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              item.active ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
            }`}
          >
            {item.active ? "Active" : "Disable"}
          </span>
        ),
        bold: false,
      },
      Actions: {
        value: (
          <LongMenu
            options={menuOptions}
            handleOptions={(prev) => handleOptions(prev, item)}
          />
        ),
        bold: false,
      },
    };
  });
  

  const handleAddUser = () => {
    updateFunc({
      email: '',
      fname: '',
      lname: '',
      phone: '',
      isDrawerOpen: true,
      title: "Add User",
      isEditPassword: false,
      roles: {
        admin: false,
        subAdmin: false,
        salesPerson: false,
      },
      password: "",
      cPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    })
  }

  return (
    <div >
      {/* Header */}
      <div className="flex md:flex-row flex-col justify-between gap-3 mb-6 md:px-0 px-5 md:py-0 py-1">
        <h1 className="md:text-[26px] text-[20px] font-bold text-gray-800">User Management</h1>
        <button
          className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-[#191919]"
          onClick={handleAddUser}
        >
          + Add user
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:p-6 p-2 min-h-screen">
        <div className="flex md:flex-row flex-wrap  justify-between items-center mb-5">
          <h2 className=" font-bold text-[#db3647] ">
            All organization users
          </h2>
          <div className="mt-4">
            <Search handleSeachButton={handleGetAllUsers} onChange={(e) => updateFunc({ query: e.target.value })} value={parentState.query} /></div>
        </div>

        {/* Dynamic Table */}
        <DynamicTable
          data={transformedData}
          columns={columns}
          defaultRowSelected={[]}
          onRowSelect={handleRowSelect}
          checkbox={false}
        />
      </div>
    </div>
  );
};

