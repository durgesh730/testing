import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import NavbarUI from '../../component/admin/NavbarUI/NavbarUI';
import SideDrawer from '../../component/admin/SideBarUI/SideBarUI';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === null) {
        return <div className='text-center pt-64'><CircularProgress size={30} color="secondary" /></div>;
    }

    if (!isAuthenticated) {
        return <Navigate to='/inventory/login' />;
    }

    return (
        <div className='bg-[#F8F7FA] min-h-screen'>
            <NavbarUI />
            <Box sx={{ display: "flex" }} className="hide-scrollbar">
                <Box className="hidden md:block shadow-2xl bg-white">
                    <SideDrawer />
                </Box>
                <Box component="main" className='h-screen lg:p-6 sm:p-4 p-2' sx={{ flexGrow: 1, overflow: "auto" }}>
                    <Outlet />
                </Box>
            </Box>
        </div>
    );
};

export default ProtectedRoute;
