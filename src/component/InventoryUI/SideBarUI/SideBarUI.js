import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useLocation, useNavigate } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Divider } from "@mui/material";
import { FaFileInvoice } from "react-icons/fa";
import logo from "../../../assets/logo.jpeg";

const SideDrawer = () => {
    const location = useLocation(); 
    const navigate = useNavigate();

    const sideBarData = [
        {
            id: "manageUsers",
            icon: <CreditCardIcon />,
            label: "Invoice",
            url: "/inventory/create-invoice",
        },
        {
            id: "allApplicants",
            icon: <PeopleAltIcon />,
            label: "User Management",
            url: "/inventory/users",
        },
        {
            id: "manageInvoice",
            icon: <FaFileInvoice />,
            label: "Manage Invoice",
            url: "/inventory/manage-invoice",
        },
        {
            id: "manageProduct",
            icon: <FaFileInvoice />,
            label: "Manage Product",
            url: "/inventory/manage-product",
        },
    ];

    const handleNavigation = (url) => {
        navigate(url);
    };

    return (
        <Box
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: 240,
                },
                border: "none",
            }}
            className="border-0 h-full bg-[#db3647]"
            square
        >
            <Box sx={{ overflow: "auto" }}>
                <div className="flex flex-row justify-center items-center text-center pb-1">
                    <img
                        src={logo}
                        className="w-[190px] h-[60px] object-cover pt-4"
                        alt="Logo"
                    />
                </div>
                <Divider className="bg-[#ffffff]" />
                <List>
                    {sideBarData.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemButton
                                onClick={() => handleNavigation(item.url)}
                                sx={{
                                    backgroundColor:
                                        location.pathname === item.url
                                            ? "#f64759"
                                            : "transparent",
                                    borderRadius: "4px",
                                    "&:hover": {
                                        backgroundColor: "#f64759",
                                    },
                                }}
                            >
                                <item.icon.type
                                    className={`${location.pathname === item.url
                                        ? "text-white"
                                        : "text-gray-100"
                                        }`}
                                />
                                <ListItemText
                                    primary={item.label}
                                    className={`${location.pathname === item.url
                                        ? "text-white"
                                        : "text-gray-100"
                                        } pl-2`}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default SideDrawer;
