import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  const user = {
    name: "James Sullivan",
  };

  return (
    <AppBar position="static" sx={{ background: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Title */}
        <Typography variant="h6">Posts</Typography>

        {/* Right side */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>

          <Typography>{user.name}</Typography>

          <Avatar>{user.name.charAt(0)}</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;