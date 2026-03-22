import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({
  drawerWidth,
  onMenuClick,
  isMobile,
}: any) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
        ml: isMobile ? 0 : `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton color="inherit" edge="start" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6">RoadPulse</Typography>
      </Toolbar>
    </AppBar>
  );
}