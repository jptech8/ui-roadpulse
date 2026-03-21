import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fb",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 1000,
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // 🔥 responsive
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "#fff",
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            RoadPulse
          </Typography>

          <Box
            component="img"
            src="/images/vehicle.png"
            alt="Vehicle"
            sx={{
              width: { xs: 150, sm: 200, md: 250 }, // 🔥 responsive image
              height: "auto",
              mb: 3,
            }}
          />

          <Typography variant="h6" mb={1}>
            Vehicle Tracking
          </Typography>

          <Typography variant="body2">
            Track, manage, and streamline vehicles.
          </Typography>

          <Typography variant="caption" mt={4}>
            © 2026 RoadPulse
          </Typography>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Log in to RoadPulse
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Login using your email account
          </Typography>

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box textAlign="right" mt={1}>
              <Link href="#" underline="hover">
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                py: 1.2,
                background: "#3b82f6",
                borderRadius: 2,
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;