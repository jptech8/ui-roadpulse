import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar({
  drawerWidth,
  isMobile,
  mobileOpen,
  onClose,
}: any) {
  const drawerContent = (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/home" onClick={onClose}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
  <ListItemButton component={Link} to="/users" onClick={onClose}>
    <ListItemText primary="User " />
  </ListItemButton>
</ListItem>

      
      </List>
    </Box>
  );

  return (
    <>
      {/* MOBILE */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* DESKTOP */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
}