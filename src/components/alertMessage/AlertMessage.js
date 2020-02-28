import React from "react";
import Alert from "@material-ui/lab/Alert";

export const AlertMessage = ({message, severity}) => <Alert data-testid={'alert-message'} severity={severity}>{message}</Alert>

