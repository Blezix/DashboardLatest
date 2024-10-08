import React from "react";
import { Box, Typography } from "@mui/material";
import { PieChart, PieArcLabel } from "@mui/x-charts";

const data = [
    { id: 0, label: 'series A', value: 10 },
    { id: 1, label: 'series B', value: 15 },
    { id: 2, label: 'series C', value: 20 },
];

export default function CustomerGrowthChart() {
    return (
        <Box>
            {data && data.length ? (
                <PieChart
                    sx={{display: "flex",flexDirection:"column", justifyContent: "center"

                }}
                    series={[
                        {
                            data,
                            label: ({ dataEntry }) => dataEntry.label,
                            labelComponent: (props) => <PieArcLabel allowReorder={"yes"} {...props} />,
                        },
                    ]}
                    width={250}
                    height={250}
                />
            ) : (
                <Typography variant="body1">No data available</Typography>
            )}
        </Box>
    );
}