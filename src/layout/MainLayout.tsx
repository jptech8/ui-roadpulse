import { Box, useMediaQuery, useTheme, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const drawerWidth = 240;

export default function MainLayout() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header
        drawerWidth={drawerWidth}
        onMenuClick={handleDrawerToggle}
        isMobile={isMobile}
      />

      <Sidebar
        drawerWidth={drawerWidth}
        isMobile={isMobile}
        mobileOpen={mobileOpen}
        onClose={handleDrawerToggle}
      />

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {/* Push content below AppBar */}
        <Toolbar />

        {/* Page Content */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Outlet />
        </Box>

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
}