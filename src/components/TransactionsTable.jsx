import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Height } from "@mui/icons-material";

const rows = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
  { id: 4, col1: "MUI", col2: "is Amazing" },
  { id: 5, col1: "MUI", col2: "is Amazing" },
  { id: 6, col1: "MUI", col2: "is Amazing" },
  { id: 7, col1: "MUI", col2: "is Amazing" },
];

const columns = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

export default function TransactionsTable() {
  return (
    <Box sx={{  height: {
          sm: '250px', // medium screens
          md: '250px',
          lg: "250px", // large screens
          xl: '400px', // extra large screens
        }, width: "90%" }}>
      <DataGrid
        hideFooter
        rows={rows}
        columns={columns}
        sx={{
          height: "100%",
          bgcolor: "none",
        }}
        p={2}
      />
    </Box>
  );
}
