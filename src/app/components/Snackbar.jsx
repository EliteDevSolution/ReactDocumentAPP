import React from "react";
import { SnackbarProvider } from "notistack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    success: {
        color: "white",
    },
}));

const Snackbar = ({ children }) => {
    const classes = useStyles();

    return (
        <SnackbarProvider
            className="max-w-400"
            classes={{
                variantSuccess: classes.success,
            }}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            {children}
        </SnackbarProvider>
    );
};

export default Snackbar;
