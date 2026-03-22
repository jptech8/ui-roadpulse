import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
  } from "@mui/material";
  
  export default function Modal({
    open,
    onClose,
    mode,
    data,
  }: any) {
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {mode === "view" && "View Vehicle"}
          {mode === "edit" && "Edit Vehicle"}
          {mode === "delete" && "Delete Vehicle"}
        </DialogTitle>
  
        <DialogContent>
          {data && (
            <Box>
              <Typography><b>Vehicle No:</b> {data.vehicleNumber}</Typography>
              <Typography><b>Class:</b> {data.vehicleClass}</Typography>
              <Typography><b>Owner:</b> {data.username}</Typography>
              <Typography><b>Phone:</b> {data.phoneNumber}</Typography>
            </Box>
          )}
  
          {mode === "delete" && (
            <Typography color="error" mt={2}>
              Are you sure you want to delete this record?
            </Typography>
          )}
        </DialogContent>
  
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
  
          {mode === "delete" && (
            <Button color="error" variant="contained">
              Delete
            </Button>
          )}
  
          {mode === "edit" && (
            <Button variant="contained">Save</Button>
          )}
        </DialogActions>
      </Dialog>
    );
  }