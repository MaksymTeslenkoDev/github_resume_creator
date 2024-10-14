import React from 'react';
import { CircularProgress, Backdrop } from '@mui/material';
import { useAppContext } from '../providers';

function Loader() {
  const { loading } = useAppContext();

  return (
    <Backdrop open={loading} style={{ zIndex: 9999 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
