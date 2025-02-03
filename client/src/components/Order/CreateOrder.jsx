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
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { checkout, checkoutVerify } from "../../services/checkoutService";

// Dummy static JSON data
const dummyData = [
  { id: 1, title: "Wireless Mouse", price: 25.99, qty: 50 },
  { id: 2, title: "Mechanical Keyboard", price: 79.99, qty: 30 },
  { id: 3, title: "Gaming Monitor", price: 299.99, qty: 15 },
  { id: 4, title: "Laptop Stand", price: 39.99, qty: 25 },
  { id: 5, title: "USB-C Hub", price: 45.99, qty: 40 },
  { id: 6, title: "Bluetooth Speaker", price: 59.99, qty: 20 },
  { id: 7, title: "External Hard Drive", price: 89.99, qty: 10 },
  { id: 8, title: "Smartphone Tripod", price: 22.99, qty: 35 },
  { id: 9, title: "Wireless Earbuds", price: 49.99, qty: 60 },
  { id: 10, title: "Portable Charger", price: 34.99, qty: 45 },
];

export const CreateOrder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    // Filter dummy data based on search input
    const filteredData = dummyData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredData);
  }, [searchTerm]);

  // Handle checkbox selection
  const handleToggle = (item) => {
    setSelectedItems(
      (prevSelected) =>
        prevSelected.some((selectedItem) => selectedItem.id === item.id)
          ? prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
          : [...prevSelected, { ...item, qty: 1, stock: item?.qty }] // Reset qty to 1 when adding
    );
  };

  // Handle quantity increase/decrease
  const handleQuantityChange = (item, increase) => {
    setSelectedItems((prevSelected) =>
      prevSelected.map((selectedItem) =>
        selectedItem.id === item.id
          ? {
              ...selectedItem,
              qty: increase
                ? Math.min(selectedItem.qty + 1, item.stock) // Max to available stock
                : Math.max(selectedItem.qty - 1, 1), // Min quantity of 1
            }
          : selectedItem
      )
    );
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return selectedItems
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);
  };

  // Calculate total number of items
  const calculateTotalItems = () => {
    return selectedItems.reduce((total, item) => total + item.qty, 0);
  };

  // Handle item removal
  const handleRemoveItem = (item) => {
    setSelectedItems((prevSelected) =>
      prevSelected.filter((selectedItem) => selectedItem.id !== item.id)
    );
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchTerm("");
    setResults([]);
  };

  // Handle checkout
  const handleCheckout = async() => {
    const resp = await checkout({amount: 200});
    console.log("resp: ", resp);
    const option =  {
      key: "rzp_test_P0RYEAWm7FQJJi",
      amount: 500,
      currency: "INR",
      name:"para",
      description: "medicine",
      order_id: resp?.data?.data?.id,
      handler: async(response) => {
        try {
          console.log("response: ", response);
          let res = await checkoutVerify(response);;
          console.log("res: ", res);
        } catch (error) {
          console.log("error: ", error);
          
        }
      },
      theme: {
        color: "red"
      }
    }
    const  rzp1 = new window.Razorpay(option);
    rzp1.open();
  };

  return (
    <Box sx={{ margin: "20px auto", maxWidth: 800 }}>
      {/* Search Bar */}
      <TextField
        label="Search Product"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setAnchorEl(e.currentTarget);
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
          "& .MuiInputBase-root": {
            padding: "2px 3px",
          },
        }}
      />

      <Popper
        open={Boolean(results.length)}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        <Paper
          elevation={3}
          sx={{
            width: anchorEl ? anchorEl.clientWidth : "auto",
            maxHeight: 200, // Set a max height for the dropdown
            overflowY: "auto", // Enable vertical scrolling when content overflows
          }}
        >
          <List>
            {results.map((item) => (
              <ListItem key={item.id} button onClick={() => handleToggle(item)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={selectedItems.some(
                      (selectedItem) => selectedItem.id === item.id
                    )}
                    tabIndex={-1}
                    disableRipple
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
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          padding: "16px",
        }}
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
                      disabled={item.qty === 1} // Disable when qty is 1 (can't go below 1)
                    >
                      <RemoveIcon />
                    </Button>
                    {item.qty}
                    <Button
                      size="small"
                      onClick={() => handleQuantityChange(item, true)}
                      disabled={item?.qty >= item?.stock} // Disable if qty exceeds stock
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
                  <Typography variant="h6">{calculateTotalItems()}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">${calculateTotalPrice()}</Typography>
                </TableCell>
                <TableCell align="center" />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Checkout Button */}
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCheckout}
          disabled={selectedItems.length === 0} 
          sx={{
            width: "100%",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};
