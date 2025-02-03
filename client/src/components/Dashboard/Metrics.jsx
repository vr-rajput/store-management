import { Grid, Paper, Typography } from "@mui/material";

const analyticsData = [
  { title: "Total Sales", value: "$15,250" },
  { title: "Orders", value: "320" },
  { title: "Customers", value: "250" },
  { title: "Revenue", value: "$12,500" },
];

export const Metrics = () => {
  return (
    <Grid container spacing={2}>
      {analyticsData.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="h5" fontWeight="bold">
              {item.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
 
