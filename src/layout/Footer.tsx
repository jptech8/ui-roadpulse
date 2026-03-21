import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 2,
        background: "#f1f5f9",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2">
        © 2026 RoadPulse. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;