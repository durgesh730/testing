import React from 'react'
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const SideDrawer = ({
  open,
  onClose,
  title,
  children,
  headerHidden,
  customWidth,
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          "@media (max-width:600px)": { width: "100%" },
          "@media (min-width:601px) and (max-width:960px)": { width: "35%" },
          "@media (min-width:1200px)": {
            width: `${!customWidth ? "25%" : "35%"}`,
          },
          "@media (max-width:1200px) and (min-width:961px)": { width: "35%" },
          backgroundColor: "white",
        },
      }}
    >
      {headerHidden && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "20px",
            paddingRight: "10px",
            paddingTop: "10px",
          }}
        >
          <span className="text-xl font-bold text-[#001628] ">{title} </span>
          <IconButton onClick={onClose}> <CloseIcon />{" "}</IconButton>
        </div>
      )}
      <div>{children}</div>
    </Drawer>
  )
}
