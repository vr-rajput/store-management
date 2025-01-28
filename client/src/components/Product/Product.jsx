import { useDataTable } from "../../hooks/useDataTable";
import DataTable from "../DataTable/DataTable1";
 

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'title', label: 'Title' },
  { id: 'price', label: 'Price' },
  { id: 'inventory', label: 'Inventory' },
  // { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action' }, // New Action Column
]; 
const medicine = [
  {
    id: 1,
    title: "Paracetamol 500mg",
    price: "$5.00",
    inventory: 100,
  },
  {
    id: 2,
    title: "Ibuprofen 200mg",
    price: "$8.00",
    inventory: 50,
  },
  {
    id: 3,
    title: "Amoxicillin 250mg",
    price: "$12.00",
    inventory: 75,
  },
  {
    id: 4,
    title: "Cetirizine 10mg",
    price: "$3.50",
    inventory: 200,
  },
  {
    id: 5,
    title: "Cough Syrup 100ml",
    price: "$6.00",
    inventory: 30,
  },
  {
    id: 6,
    title: "Vitamin C Tablets",
    price: "$10.00",
    inventory: 120,
  },
  {
    id: 7,
    title: "Aspirin 100mg",
    price: "$4.00",
    inventory: 90,
  },
  {
    id: 8,
    title: "Antiseptic Cream",
    price: "$7.50",
    inventory: 40,
  },
  {
    id: 9,
    title: "Digestive Enzyme Syrup",
    price: "$9.00",
    inventory: 60,
  },
  {
    id: 10,
    title: "Multivitamin Capsules",
    price: "$15.00",
    inventory: 80,
  },
];
 

export default function BasicTable() {

  const { data, searchTerm, setSearchTerm } = useDataTable();
  // console.log("data: parent ", data); 

  return (
    <DataTable headers={headCells} rows={data} query={{ searchTerm, setSearchTerm }} />
    /**
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
     */
  );
}
