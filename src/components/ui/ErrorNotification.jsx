// @ts-check
import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useAppContext } from '../providers';

function ErrorNotification() {
  const { setError, error } = useAppContext();

  const handleClose = () => {
    setError(null);
  };

  return (
    <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert onClose={handleClose} severity="error" variant="filled">
        {error}
      </Alert>
    </Snackbar>
  );
}

export default ErrorNotification;
