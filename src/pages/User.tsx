import { Box, Typography, Paper } from "@mui/material";

export default function User() {
  return (
    <Box sx={{ p: 3, background: "#f4f7fb", minHeight: "100%" }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        User Management
      </Typography>

      <Paper sx={{ p: 3 }}>
        <Typography>
          This is the User Management page content.
        </Typography>
      </Paper>
    </Box>
  );
}