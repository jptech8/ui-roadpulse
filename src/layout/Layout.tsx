import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <Box display="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <Box flex={1} display="flex" flexDirection="column" minHeight="100vh">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <Box p={2} sx={{ background: "#f4f7fb", flex: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;