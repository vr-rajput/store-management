import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Paper,
  Popper,
  TextField,
  IconButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useCreateOrder } from "../../hooks/useCreateOrder";

export const CreateOrder = () => {
  // Destructure required functions and state from custom hook
  const {
    searchTerm,
    setSearchTerm,
    results,
    handleToggle,
    selectedItems,
    handleQuantityChange,
    calculateTotalPrice,
    calculateTotalItems,
    handleRemoveItem,
    handleClearSearch,
    anchorEl,
    setAnchorEl,
    handleCheckout,
    totalItems,
    totalPrice,
    handleScroll,
    handleClick
  } = useCreateOrder();

  return (
    <Box sx={{ margin: "20px auto", maxWidth: 800 }}>
      {/* Search Bar */}
      <TextField
        label="Search Product"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onClick={(e) => handleClick(e)}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setAnchorEl(e.currentTarget); // Set anchor to the search input field
        }}
        InputProps={{
          endAdornment: searchTerm && (
            <IconButton onClick={handleClearSearch}>
              <ClearIcon />
            </IconButton>
          ),
        }}
        sx={{
          mb: 1,
          backgroundColor: "#f5f5f5",
          borderRadius: 1,
        }}
      />

      {/* Search Results Popper */}
      <Popper
        open={Boolean(results.length)}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <Paper
          elevation={3}
          sx={{
            width: anchorEl?.clientWidth || "auto",
            maxHeight: 200,
            overflowY: "auto",
            m: 1,
          }}
          onScroll={handleScroll}
        >
          <List>
            {results.map((item) => (
              <ListItem key={item.id} button onClick={() => handleToggle(item)}>
                <ListItemIcon>
                  <Checkbox
                    checked={selectedItems.some(
                      (selectedItem) => selectedItem.id === item.id
                    )}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  secondary={`Price: $${item.price}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popper>

      {/* Selected Items Table */}
      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
        Selected Items:
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 2, boxShadow: 3, padding: "16px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedItems.length > 0 ? (
              selectedItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      onClick={() => handleQuantityChange(item, false)}
                      disabled={item.qty === 1}
                    >
                      <RemoveIcon />
                    </Button>
                    {item.qty}
                    <Button
                      size="small"
                      onClick={() => handleQuantityChange(item, true)}
                      disabled={item.qty >= item.stock}
                    >
                      <AddIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    ${(item.price * item.qty).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleRemoveItem(item)}>
                      <ClearIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body1" color="textSecondary">
                    No records found
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {/* Total Row */}
            {selectedItems.length > 0 && (
              <TableRow>
                <TableCell colSpan={2} align="right">
                  <Typography variant="h6">Total</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{totalItems}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">${totalPrice}</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Checkout Button */}
      <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleCheckout}
          disabled={!selectedItems.length}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};
