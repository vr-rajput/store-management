import { Box, Container, Typography } from "@mui/material";
import { Metrics } from "../components/Dashboard/Metrics"; 
import Order from "../components/Order/Order";
// import BasicTable from "../components/DataTable1"

const DashboardPage = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      <Metrics />
      <Box sx={{ height: 400, width: "100%", mt: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={3} align="center">
          Recent Orders 
        </Typography>
        <Order />
      </Box>
    </Container>
  );
};

export default DashboardPage;
