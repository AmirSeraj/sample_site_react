import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ResponsiveContainer from "./ResponsiveContainer/ResponsiveContainer";

const Header = () => {
  const [anchorE1, setAnchorE1] = useState(null);
  const open = Boolean(anchorE1);
  const handleCLick = (e) => {
    setAnchorE1(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);

  return (
    <ResponsiveContainer sx={{ height: "100%" }} width="100%">
      {/* // <Box width="100%" p="0 2rem" display="flex"> */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      // width="20rem"
      >
        <Tooltip
          title="Account Setting"
          sx={{ display: isMobile ? "block" : "none" }}
        >
          <IconButton
            onClick={handleCLick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="tree"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <Menu
          dir="rtl"
          anchorEl={anchorE1}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleCLick}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>بلاگ</MenuItem>
          <MenuItem onClick={handleClose}>جزئیات پروژه</MenuItem>
          <MenuItem onClick={handleClose}>پورتفلو</MenuItem>
          <MenuItem onClick={handleClose}> درباره ما</MenuItem>
          <MenuItem onClick={handleClose}>خانه</MenuItem>
        </Menu>
        {/* <Box display={{ sm: "none", xs: "flex" }}>
          <MenuIcon />
        </Box> */}
        <Box
          display={{ sm: "flex", xs: "none" }}
          alignItems="center"
          gap={2}
          height="100%"
        >
          <Box
            sx={{
              "&:hover": {
                borderBottom: "2px solid #000",
                backgroundColor: "#ccc",
              },
            }}
            color="#000"
            component={Link}
            p="8px"
            display="flex"
            height="76%"
            alignItems="center"
          >
            بلاگ
          </Box>
          <Box
            sx={{
              "&:hover": {
                borderBottom: "2px solid #000",
                backgroundColor: "#ccc",
              },
            }}
            color="#000"
            component={Link}
            p="8px"
            display="flex"
            height="76%"
            alignItems="center"
          >
            جزئیات پروژه
          </Box>
          <Box
            sx={{
              "&:hover": {
                borderBottom: "2px solid #000",
                backgroundColor: "#ccc",
              },
            }}
            color="#000"
            component={Link}
            p="8px"
            display="flex"
            height="76%"
            alignItems="center"
          >
            پورتفلو
          </Box>
          <Box
            sx={{
              "&:hover": {
                borderBottom: "2px solid #000",
                backgroundColor: "#ccc",
              },
            }}
            color="#000"
            component={Link}
            p="8px"
            display="flex"
            height="76%"
            alignItems="center"
          >
            درباره ما
          </Box>
          <Box
            sx={{
              "&:hover": {
                borderBottom: "2px solid #000",
                backgroundColor: "#ccc",
              },
            }}
            color="#000"
            component={Link}
            p="8px"
            display="flex"
            height="76%"
            alignItems="center"
          >
            خانه
          </Box>
        </Box>
        <Box>
          <Typography variant="h1" fontSize="1.5rem" fontWeight="bold">
            Neve
          </Typography>
        </Box>
      </Box>
      {/* // </Box> */}
    </ResponsiveContainer>
  );
};

export default Header;
