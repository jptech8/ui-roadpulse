import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import { getAllVehicles } from "../services/vehicleApi.service";

const Home = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const data = await getAllVehicles();
      setVehicles(Array.isArray(data) ? data : data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, background: "#f4f7fb", minHeight: "100vh" }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Vehicle Details
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table size="small">
          {/* Table Head */}
          <TableHead sx={{ background: "#3b82f6" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Vehicle Number
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Class
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Model Year
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Username
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Nature of Work
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Owner Address
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Phone
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                FC Details
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                IC Details
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Tax Details
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Work Description
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Created At
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Updated At
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {vehicles.map((v, index) => (
              <TableRow key={index} hover>
                <TableCell>{v.vehicleNumber}</TableCell>
                <TableCell>{v.vehicleClass}</TableCell>
                <TableCell>{v.modelYear}</TableCell>
                <TableCell>{v.username}</TableCell>
                <TableCell>{v.natureOfWork}</TableCell>
                <TableCell>{v.ownerAddress}</TableCell>
                <TableCell>{v.phoneNumber}</TableCell>
                <TableCell>{v.fcDetails}</TableCell>
                <TableCell>{v.icDetails}</TableCell>
                <TableCell>{v.taxDetails}</TableCell>
                <TableCell>{v.workDescription}</TableCell>
                <TableCell>
                  {new Date(v.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(v.updatedAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;