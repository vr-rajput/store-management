import { TextField, Button, Box, Paper } from "@mui/material"; 
import { useProductForm } from "../../hooks/useProductForm";
import { createMedicine } from "../../services/productService";

export const CreateProduct = () => {
  const { formData, handleChange, handleReset, handleSubmit, adminDetail } = useProductForm(
    {
      itemCode: "",
      title: "",
      price: "",
      type: "",
      inventory: "",
      // mfg: "",
      // exp: "",
    },
    createMedicine
  );

  return (
    <Paper sx={{ padding: 4, maxWidth: 600, margin: "20px auto" }}>
      <form onSubmit={handleSubmit}>
        <Box marginBottom={2}>
          <TextField
            label="Item Code"
            variant="outlined"
            fullWidth
            name="itemCode"
            value={formData.code}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Type"
            variant="outlined"
            fullWidth
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Inventory"
            variant="outlined"
            fullWidth
            name="inventory"
            value={formData.inventory}
            onChange={handleChange}
            required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Manufacture Date"
            variant="outlined"
            fullWidth
            name="mfg"
            value={formData.mfg}
            onChange={handleChange}
            // required
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            label="Expiry Date"
            variant="outlined"
            fullWidth
            name="exp"
            value={formData.exp}
            onChange={handleChange}
            // required
          />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Button variant="contained" color="secondary" onClick={handleReset}>
            cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Paper>
  );
};
