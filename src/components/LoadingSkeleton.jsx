import React from "react";
import { Box, Skeleton } from "@mui/material";

export default function LoadingSkeleton() {
  return (
    <Box sx={{ width: "100%", padding: 3 }}>
      <Skeleton variant="text" width={200} height={40} />
      <Skeleton variant="rectangular" width="100%" height={60} sx={{ my: 3 }} />
      <Skeleton variant="rectangular" width="100%" height={300} />
    </Box>
  );
}
