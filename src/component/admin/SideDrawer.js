import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarehouseIcon from '@mui/icons-material/Warehouse';

export default function SideDrawer({ open, setOpen }) {
    const [active, setActive] = React.useState("createJob")

    const DrawerList = (
        <Box sx={{ overflow: "auto", backgroundColor: "#001529" }} className="h-full">
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { setActive("createJob"); setOpen(false) }}>
                        <DashboardIcon className={` ${active == "createJob" ? "text-[#FF6F00]" : "text-gray-300"}`} />
                        <ListItemText primary={"Create Job"} className={` ${active == "createJob" ? "text-[#FF6F00]" : "text-gray-300"} pl-2`} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => { setActive("allApplicants"); setOpen(false) }}>
                        <WarehouseIcon className={` ${active == "allApplicants" ? "text-[#FF6F00]" : "text-gray-300"}`} />
                        <ListItemText primary={"All Applicants"} className={` ${active == "allApplicants" ? "text-[#FF6F00]" : "text-gray-300"} pl-2`} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Drawer open={open} onClose={() => setOpen(false)}>
            {DrawerList}
        </Drawer>
    );
}