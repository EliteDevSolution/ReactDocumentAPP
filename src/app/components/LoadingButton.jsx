import React from "react";
import PropTypes from "prop-types";
import { Button, CircularProgress } from "@material-ui/core";

const LoadingButton = ({
  className,
  variant,
  color,
  type,
  isSubmitting,
  children,
  loaderColor = "primary",
  loaderSize = 16,
  loaderVariant = "indeterminate",
}) => {
  return (
    <Button
      className={className}
      variant={variant}
      color={color}
      type={type}
      disabled={isSubmitting}
    >
      {children}
      {isSubmitting && (
        <CircularProgress
          className="ml-4"
          thickness={6}
          size={loaderSize}
          color={loaderColor}
          variant={loaderVariant}
        />
      )}
    </Button>
  );
};

LoadingButton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  isSubmitting: PropTypes.bool,
  children: PropTypes.any.isRequired,
  loaderColor: PropTypes.string,
  loaderSize: PropTypes.number,
  loaderVariant: PropTypes.string,
};

export default LoadingButton;
