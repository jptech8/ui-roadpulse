import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 2,
        backgroundColor: "#1976d2",
        color: "#fff",
      }}
    >
      <Typography variant="body2">
        © 2026 Road Pulse
      </Typography>
    </Box>
  );
}