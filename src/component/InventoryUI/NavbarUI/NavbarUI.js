import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Tooltip,
    MenuItem
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSnackbar } from '../../../context/SnackBarContext';
import { SideDrawer } from '../../SideDrawer/SideDrawer';
import React, { useState } from 'react';
import WarningModal from '../../WarningModal';
import { useInventory } from '../../../context/InventoryContext';
import logo from "../../../assets/logo.jpeg"

const settings = ['Profile', 'Logout'];

function NavbarUI() {
    const { logout, user } = useInventory();
    const { showSuccess } = useSnackbar();
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleCloseUserMenu = (tab) => {
        if (tab === "Logout") {
            setOpen(true);
        } else if (tab === "Profile") {
            setIsDrawerOpen(true);
        }
        setAnchorElUser(null);
    };

    const handleButtonAction = () => {
        setOpen(false);
        logout();
        showSuccess("Logout Successfully");
    }

    return (
        <>
            <AppBar position="sticky" elevation={1}>
                <Container maxWidth="full" className="bg-[#fff]">
                    <Toolbar disableGutters className="md:pr-16">
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                onClick={() => setIsDrawerOpen(true)}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="#001529"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    
                        {/* <img src={logo} className="w-[190px] h-[60px] object-cover pt-4"  alt="Logo" /> */}
                      
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={(event) => setAnchorElUser(event.currentTarget)}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar alt="Remy Sharp" color="black" src={user?.profile_image} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px', width: '700px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={() => setAnchorElUser(null)}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        sx={{ minWidth: '150px' }}
                                        key={setting}
                                        onClick={() => handleCloseUserMenu(setting)}
                                    >
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <WarningModal
                isOpen={open}
                onClose={() => setOpen(false)}
                btnName="Yes"
                onConfirm={handleButtonAction}
                cancelText="Cancel"
                isLoading={false}
                confirmText="Yes"
                onCancel={() => setOpen(false)}
                modalTitle="Are you sure you want to logout?"
            />

            <SideDrawer
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen((prev) => !prev)}
                title="My Profile"
                headerHidden={true}
                customWidth={true}
            >
                <div className='flex flex-col justify-center items-center mt-4'>
                    <img src={user?.profile_image} className='w-[80px] h-[80px]'></img>
                    <p className='mt-3 text-[18px] font-semibold'>{user?.name}</p>
                    <p className='mt-2 text-[16px] font-semibold'>{user?.email}</p>
                </div>
            </SideDrawer>
        </>
    );
}

export default NavbarUI;
