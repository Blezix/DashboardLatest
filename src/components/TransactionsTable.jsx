import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip, Paper, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

// Sample data
const rows = [
  {
    id: 1,
    Name: "Rent an apartment",
    Date: "18-08-2021",
    Amount: "-1200",
    Status: "Paid",
  },
  {
    id: 2,
    Name: "Hotel Hilton",
    Date: "16-08-2021",
    Amount: "-1500",
    Status: "Declined",
  },
  {
    id: 3,
    Name: "Booking",
    Date: "11-08-2021",
    Amount: "-1034",
    Status: "Paid",
  },
  {
    id: 4,
    Name: "Coffee point",
    Date: "09-08-2021",
    Amount: "-3.48",
    Status: "In progress",
  },
  {
    id: 5,
    Name: "Rainbow Room",
    Date: "07-08-2021",
    Amount: "-120.50",
    Status: "Paid",
  },
];

// Table columns definition
const columns = [
  { field: "Name", headerName: "Name Of Transaction", width: 200 },
  {
    field: "Date",
    headerName: "Date",
    width: 200,
    cellClassName: "date-column-cell",
  },
  { field: "Amount", headerName: "Amount", width: 150 },
  {
    field: "Status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      let color = "default";
      switch (params.value) {
        case "Paid":
          color = "success";
          break;
        case "Declined":
          color = "error";
          break;
        case "In progress":
          color = "info";
          break;
        default:
          color = "default";
      }
      return <Chip label={params.value} color={color} variant="outlined" />;
    },
  },
];

// React component
export default function TransactionsTable() {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
      <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {t("Transactions")}
        </Typography>

        <Box
            sx={{
              maxHeight: {
                sm: "200px",
                md: "220px",
                lg: "250px",
                xl: "300px",
              },
              overflow: "auto",
              width: "95%",
              padding: "10px",
              borderRadius: "8px",
                "& *" : {
                    background:"transparent !important"
                }
            }}
        >
          <DataGrid
              hideFooter
              rows={rows}
              columns={columns}
              disableExtendRowFullWidth
              sx={{
                border: "none",
                  backgroundColor:"transparent",
                "& .MuiDataGrid-filler": {
                  display: "none", // Hide the filler
                },
              }}
          />
        </Box>
      </Paper>
  );
}