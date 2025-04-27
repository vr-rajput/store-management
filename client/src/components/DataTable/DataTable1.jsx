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
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function BasicTable({ headers = [], rows = [], query, addBtnUrl }) {
  const { searchTerm, setSearchTerm, page, setPage, limit, setLimit, pagination, loading } = query;  
  const navigate = useNavigate(); 
  
    // Ensure rows is always an array before filtering
    const filteredRows = rows?.filter((row) =>
      headers.some((header) =>
        String(row[header.id] || '').toLowerCase().includes(searchTerm.toLowerCase())
      )
    ) || [];
  
    // Handle pagination change
    const handleChangePage = (event, newPage) => {  
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => { 
      setLimit(parseInt(event.target.value, 10));
      setPage(1);
    };
  
    // Handle Delete Action
    const handleDelete = (id) => {
      console.log(`Deleting record with ID: ${id}`);
    };
  
    // Handle Edit Action
    const handleEdit = (id) => {
      console.log(`Editing record with ID: ${id}`);
    };

    const handleChange = ( e ) =>{
      // (e) => setSearchTerm(e.target.value)
      setSearchTerm(e.target.value);
      setPage(0)
    }
  
    return (
      // loading ? <Loader/> :
      <Paper sx={{ padding: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleChange}
            sx={{ width: '300px' }}
          />
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => navigate(addBtnUrl)}
            >
              Add New
          </Button>
        </Box>
  
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((headCell) => (
                  <TableCell key={headCell.id}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
           { loading ? <Loader/> :
            filteredRows.length > 0 ? (
              filteredRows.map((row) => (
                <TableRow key={row.id}>
                  {headers.map((headCell) => {
                    if (headCell.id === "action") {
                      return (
                        <TableCell key={headCell.id}>
                          <Button onClick={() => handleEdit(row.id)} size="small" color="primary">
                            <Edit fontSize="small" />
                          </Button>
                          <Button onClick={() => handleDelete(row.id)} size="small" color="secondary">
                            <Delete fontSize="small" />
                          </Button>
                        </TableCell>
                      );
                    }
                    return <TableCell key={headCell.id}>{row[headCell.id]}</TableCell>;
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={headers.length} align="center">
                  <Typography variant="body1" color="textSecondary">
                    No records found
                  </Typography>
                </TableCell>
              </TableRow>
            ) }
            </TableBody>
          </Table>
        </TableContainer>
  
        {/* <TablePagination
          component="div"
          count={filteredRows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={11}//start from
          rowsPerPageOptions={[5, 10, 25]}
        /> */}
        <TablePagination
          component="div"
          count={pagination?.totalDocs || 0}
          page={page}
          rowsPerPage={limit}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
    );
  }
  
