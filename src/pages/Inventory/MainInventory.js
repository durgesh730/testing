import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { useInventory } from '../../context/InventoryContext';
import NavbarUI from '../../component/InventoryUI/NavbarUI/NavbarUI';
import SideDrawer from '../../component/InventoryUI/SideBarUI/SideBarUI';

const MainInventory = () => {
    const { isAuthenticated } = useInventory();

    if (isAuthenticated === null) {
        return <div className='text-center pt-64'><CircularProgress size={30} color='secondary'/></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to='/inventory/login' />;
    }

    return (
        <div className="bg-[#F8F7FA] max-h-screen flex ">
            <Box className="hidden md:block shadow-2xl bg-[#001529]">
                <SideDrawer />
            </Box>

            <Box component="main" sx={{ flexGrow: 1, maxHeight: "100%", overflowY: "auto" }}>
                <NavbarUI />
                <Box className="lg:p-6 sm:p-4 p-1 overflow-auto"><Outlet /></Box>
            </Box>
        </div>
    );
};

export default MainInventory;
