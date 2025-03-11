import { Backdrop, CircularProgress } from "@mui/material";
import React, { useContext } from "react";
import { LoaderContext } from "../../context/LoaderContext";

function Loader() {
    const { loading } = useContext(LoaderContext);
    console.log("loader component");
  return (
    // <div>Loading.....</div>
    <Backdrop open={loading} sx={{ color: "#fff", zIndex: 1301}}>
        <CircularProgress color="inherit"/>
    </Backdrop>
  )
}

export default Loader;
