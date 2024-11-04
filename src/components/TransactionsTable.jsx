import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip, Paper, Typography } from "@mui/material";

// Sample data
const rows = [
    { id: 1, Name: "Rent an apartment", Date: "18-08-2021", Amount: "-1200", Status: "Paid" },
    { id: 2, Name: "Hotel Hilton", Date: "16-08-2021", Amount: "-1500", Status: "Declined" },
    { id: 3, Name: "Booking", Date: "11-08-2021", Amount: "-1034", Status: "Paid" },
    { id: 4, Name: "Coffee point", Date: "09-08-2021", Amount: "-3.48", Status: "In progress" },
    { id: 5, Name: "Rainbow Room", Date: "07-08-2021", Amount: "-120.50", Status: "Paid" },
];

// Table columns definition
const columns = [
    { field: "Name", headerName: "Name Of Transaction", width: 200 },
    {
        field: "Date",
        headerName: "Date",
        width: 200,
        cellClassName: 'date-column-cell',
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
    return (
        <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Transactions</Typography>

            <Box
                sx={{
                    maxHeight: {
                        sm: "200px",
                        md: "220px",
                        lg: "250px",
                        xl: "300px",
                    },
                    overflow:"auto",
                    width: "95%",
                    backgroundColor: "white", // Light background to match the design
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid lightgrey",
                }}
            >
                <DataGrid
                    hideFooter
                    rows={rows}
                    columns={columns}
                    disableExtendRowFullWidth
                    sx={{
                        border: "none",
                        "& .MuiDataGrid-root": {
                            backgroundColor: "transparent", // Set the root background to transparent
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: "white", // Set the column headers background to white
                            color: "black", // Keep text black for contrast
                            borderBottom: "1px solid lightgrey", // Optional: to visually separate header from rows
                        },
                        "& .MuiDataGrid-columnHeaderTitle": {
                            fontWeight: "bold", // Optional: Make headers bold
                        },
                        "& .MuiDataGrid-cell": {
                            backgroundColor: "white", // Set the cell background to white
                            color: "black",
                        },
                        "& .MuiDataGrid-filler": {
                          display: "none", // Hide the filler
                        },
                        "& .MuiDataGrid-row": {
                            backgroundColor: "transparent", // Set the row background to transparent
                        },
                        "& .MuiDataGrid-footerContainer": {
                            backgroundColor: "transparent", // Set the footer background to transparent
                        },
                        "& .date-column-cell": {
                            color: "grey",
                        },
                    }}
                />
            </Box>
        </Paper>
    );
}