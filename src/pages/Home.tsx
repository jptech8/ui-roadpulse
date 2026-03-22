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
  TablePagination,
  TableSortLabel,
  CircularProgress,
  InputBase,
  IconButton,
  Button, // ✅ added
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add"; // ✅ added

import { getAllVehicles } from "../services/vehicleApi.service";
import Modal from "../component/Model";

type Order = "asc" | "desc";

const Home = () => {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<any>({});

  const [orderBy, setOrderBy] = useState("vehicleNumber");
  const [order, setOrder] = useState<Order>("asc");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Modal state
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [mode, setMode] = useState<"view" | "edit" | "delete" | "add">("view"); // ✅ updated

  const columns = [
    { id: "vehicleNumber", label: "Vehicle No" },
    { id: "vehicleClass", label: "Class" },
    { id: "modelYear", label: "Year" },
    { id: "username", label: "User" },
    { id: "natureOfWork", label: "Work Type" },
    { id: "ownerAddress", label: "Address" },
    { id: "phoneNumber", label: "Phone" },
    { id: "fcDetails", label: "FC" },
    { id: "icDetails", label: "IC" },
    { id: "taxDetails", label: "Tax" },
    { id: "workDescription", label: "Description" },
  ];

  useEffect(() => {
    fetchVehicles();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, filters, vehicles]);

  const fetchVehicles = async () => {
    try {
      const data = await getAllVehicles();
      const list = Array.isArray(data) ? data : data.data;
      setVehicles(list);
      setFiltered(list);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let data = [...vehicles];

    if (search) {
      data = data.filter((v) =>
        Object.values(v).join(" ").toLowerCase().includes(search.toLowerCase())
      );
    }

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        data = data.filter((v) =>
          String(v[key]).toLowerCase().includes(filters[key].toLowerCase())
        );
      }
    });

    setFiltered(data);
    setPage(0);
  };

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    const newOrder = isAsc ? "desc" : "asc";
    setOrder(newOrder);
    setOrderBy(property);

    const sorted = [...filtered].sort((a, b) => {
      if (a[property] < b[property]) return newOrder === "asc" ? -1 : 1;
      if (a[property] > b[property]) return newOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFiltered(sorted);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: any) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const paginatedData = filtered.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // ✅ OPEN MODAL (VIEW/EDIT/DELETE)
  const handleOpen = (row: any, type: any) => {
    setSelectedRow(row);
    setMode(type);
    setOpen(true);
  };

  // ✅ ADD BUTTON HANDLER
  const handleAdd = () => {
    setSelectedRow(null);
    setMode("add");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, background: "#f4f7fb" }}>
      
      {/* ✅ HEADER WITH ADD BUTTON */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Vehicle Details
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Vehicle
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 3,
          overflowX: "auto",
          maxHeight: "67vh",
        }}
      >
        <Table size="small">

          {/* SEARCH */}
          <TableHead>
            <TableRow>
              <TableCell colSpan={columns.length + 1}>
                <Box sx={{ display: "flex", alignItems: "center", px: 1 }}>
                  <SearchIcon />
                  <InputBase
                    placeholder="Search vehicles..."
                    sx={{ ml: 1, flex: 1 }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Box>
              </TableCell>
            </TableRow>

            {/* HEADERS */}
            <TableRow sx={{ background: "#3b82f6" }}>
              {columns.map((col) => (
                <TableCell key={col.id} sx={{ color: "#fff" }}>
                  <TableSortLabel
                    active={orderBy === col.id}
                    direction={orderBy === col.id ? order : "asc"}
                    onClick={() => handleSort(col.id)}
                    sx={{ color: "#fff" }}
                  >
                    {col.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>

            {/* FILTERS */}
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.id}>
                  <InputBase
                    placeholder="Filter"
                    fullWidth
                    onChange={(e) =>
                      handleFilterChange(col.id, e.target.value)
                    }
                  />
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>

          {/* BODY */}
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={index} hover>
                {columns.map((col) => (
                  <TableCell key={col.id}>{row[col.id]}</TableCell>
                ))}

                <TableCell>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <IconButton size="small" color="primary" onClick={() => handleOpen(row, "view")}>
                      <VisibilityIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small" color="warning" onClick={() => handleOpen(row, "edit")}>
                      <EditIcon fontSize="small" />
                    </IconButton>

                    <IconButton size="small" color="error" onClick={() => handleOpen(row, "delete")}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>

        <Box sx={{ position: "sticky", bottom: 0, background: "#fff" }}>
          <TablePagination
            component="div"
            count={filtered.length}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </TableContainer>

      {/* MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        mode={mode}
        data={selectedRow}
      />
    </Box>
  );
};

export default Home;