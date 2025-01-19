import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarehouseIcon from '@mui/icons-material/Warehouse';

const drawerWidth = 240;
export default function SideDrawer() {
    const [active, setActive] = React.useState("createJob")
    return (
        <>
            <Box
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                    },
                    border: "none",
                }}
                className="border-0 bg-[#001529] h-full"
                square
            >
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { setActive("createJob") }}>
                                <DashboardIcon className={` ${active == "createJob" ? "text-[#FF6F00]" : "text-gray-300"}`} />
                                <ListItemText primary={"Create Job"} className={` ${active == "createJob" ? "text-[#FF6F00]" : "text-gray-300"} pl-2`} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { setActive("allApplicants") }}>
                                <WarehouseIcon className={` ${active == "allApplicants" ? "text-[#FF6F00]" : "text-gray-300"}`} />
                                <ListItemText primary={"All Applicants"} className={` ${active == "allApplicants" ? "text-[#FF6F00]" : "text-gray-300"} pl-2`} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </>
    );
}
