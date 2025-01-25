import { Box, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material"


function EnhancedTableHead() {
  let order = true;
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
            //   indeterminate={numSelected > 0 && numSelected < rowCount}
            //   checked={rowCount > 0 && numSelected === rowCount}
            //   onChange={onSelectAllClick}
            //   inputProps={{
            //     'aria-label': 'select all desserts',
            //   }}
            />
          </TableCell>
          {/* {headCells.map((headCell) => ( */}
            <TableCell
              key={1}
              align={'right'}
            //   padding={headCell.disablePadding ? 'none' : 'normal'}
            //   sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                // active={orderBy === headCell.id}
                // direction={orderBy === headCell.id ? order : 'asc'}
                // onClick={createSortHandler(headCell.id)}
              >
                {/* {headCell.label}
                {orderBy === headCell.id ? ( */}
                  <Box component="span" >
                    { order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                {/* ) : null} */}
              </TableSortLabel>
            </TableCell>
        {/* s   ))} */}
        </TableRow>
      </TableHead>
    );
  }
  
 
const Product = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: "black" }}>
        <Paper>
            <TableContainer>
                <Table sx={{ minWidth: 750,  bgcolor: "red" }}>
                    <EnhancedTableHead/>
                    <TableBody>
                        {/* return ( */}
                            <TableRow   sx={{ cursor: 'pointer' }}>
                                <TableCell>
                                    <Checkbox color="success"/>
                                </TableCell>
                                <TableCell>
                                    name
                                </TableCell>
                                <TableCell>
                                    title
                                </TableCell>
                                <TableCell>
                                    price 
                                </TableCell>
                                <TableCell>
                                    action
                                </TableCell>
                            </TableRow>
                        {/* ) */}
                        <TableRow>
                            <TableCell colSpan={5}/>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5,10,15]}
                count={12}
                rowsPerPage={1}
                page={1}
            />
        </Paper>
    </Box>
  )
}

export default Product