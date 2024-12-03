import React from "react";
import { ListItem, Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DnDListItem({ file, onDelete, theme }) {
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: "4px",
        marginBottom: "8px",
        padding: "8px",
      }}
    >
      <Box
        sx={{
          width: "95%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography variant="body1">{file.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {file.size} bytes
        </Typography>
      </Box>

      <Box>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(file.path)}
          sx={{ color: theme.palette.error.main }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}
