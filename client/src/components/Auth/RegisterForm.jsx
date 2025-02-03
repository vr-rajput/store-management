import { useForm } from "../../hooks/useAuth";
import { registerUser } from "../../services/authService";
import { keyWord } from "../../utils/keyword";
import { Container, TextField, Button, Typography, Box, Grid, Link, Alert } from "@mui/material";

const RegisterForm = () => {
  const { values, handleChange, handleSubmit, passwordMismatch } = useForm(
    {
      storeName: "",
      userName: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirm_password: "",
    },
    registerUser,
    keyWord?.actionType?.register
  );

  return (
    <Container
      sx={{
        width: "100vw", // Full width
        height: "100vh", // Full height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#f5f5f5", // Light gray background
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: "50%", // Restrict form width
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Register
        </Typography>
        <Typography variant="body2" align="center" mb={2}>
          <Link href="/login" underline="hover">
            Already have an account? Login here
          </Link>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Store Name" name="storeName" value={values?.storeName} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="User Name" name="userName" value={values?.userName} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth type="email" label="E-mail" name="email" value={values?.email} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone" name="phone" value={values?.phone} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" name="address" value={values?.address} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth type="password" label="Password" name="password" value={values?.password} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth type="password" label="Confirm Password" name="confirm_password" value={values?.confirm_password} onChange={handleChange} required />
            {passwordMismatch && (
              <Alert severity="error" sx={{ mt: 1 }}>
                Confirm password does not match
              </Alert>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained">
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RegisterForm;
