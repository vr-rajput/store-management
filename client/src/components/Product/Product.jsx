import { useState } from 'react';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TextField, 
  Button, 
  Box, 
  TablePagination, 
  Typography 
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  { id: 'email', label: 'Email' },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action' }, // New Action Column
]; 

const rows = [
  { id: 1, name: 'Alice Johnson', age: 28, email: 'alice@example.com', status: 'Active' },
  { id: 2, name: 'Bob Smith', age: 34, email: 'bob@example.com', status: 'Inactive' },
  { id: 3, name: 'Charlie Brown', age: 22, email: 'charlie@example.com', status: 'Active' },
  { id: 4, name: 'Diana Prince', age: 30, email: 'diana@example.com', status: 'Pending' },
  { id: 5, name: 'Ethan Hunt', age: 40, email: 'ethan@example.com', status: 'Active' },
  { id: 6, name: 'Frank Castle', age: 35, email: 'frank@example.com', status: 'Inactive' },
  { id: 7, name: 'Grace Hopper', age: 29, email: 'grace@example.com', status: 'Active' },
  { id: 8, name: 'Henry Cavill', age: 38, email: 'henry@example.com', status: 'Pending' },
  { id: 9, name: 'Irene Adler', age: 33, email: 'irene@example.com', status: 'Active' },
  { id: 10, name: 'Jack Ryan', age: 41, email: 'jack@example.com', status: 'Inactive' },
];

export default function BasicTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter rows based on search term
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle pagination change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle Delete Action
  const handleDelete = (id) => {
    console.log(`Deleting record with ID: ${id}`);
    // Implement delete logic here
  };

  // Handle Edit Action
  const handleEdit = (id) => {
    console.log(`Editing record with ID: ${id}`);
    // Implement edit logic here
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '300px' }}
        />
        <Button variant="contained" color="primary">
          Add New
        </Button>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell key={headCell.id}>{headCell.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.length > 0 ? (
              filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEdit(row.id)} size="small" color="primary">
                      <Edit fontSize="small" />
                    </Button>
                    <Button onClick={() => handleDelete(row.id)} size="small" color="secondary">
                      <Delete fontSize="small" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={headCells.length} align="center">
                  <Typography variant="body1" color="textSecondary">
                    No records found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
}
