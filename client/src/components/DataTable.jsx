import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

// Custom styling for table cells
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Custom styling for table rows
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// Sample product data
const rows = [
  { name: 'Frozen Yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice Cream', calories: 237, fat: 9.0, carbs: 27, protein: 3.8 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

export default function CustomizedTables() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
        width: '100%',
        padding: '2',
        bgcolor: '#f5f5f5',
      }}
    >
      <Paper elevation={4} 
              sx={{ 
                padding: 3, 
                width: '100%', 
                maxWidth: '1200px', 
                overflowX: 'auto' 
              }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Recent Orders
        </Typography>
        <TableContainer>
          <Table sx={{ width: '100%' }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Customer</StyledTableCell>
                <StyledTableCell align="right">Order No</StyledTableCell>
                <StyledTableCell align="right">Item</StyledTableCell>
                <StyledTableCell align="right">Total</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.calories}</StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                  <StyledTableCell align="right">{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
