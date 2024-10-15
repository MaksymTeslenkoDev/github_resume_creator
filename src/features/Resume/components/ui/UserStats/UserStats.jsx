import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from './styles';

export function UserStats({ publicRepos, followers, following }) {
  const { classes } = useStyles();

  return (
    <Box className={classes.statsContainer}>
      <Box className={classes.statBox}>
        <Typography variant="h6" className={classes.statValue}>
          {publicRepos}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Public Repositories
        </Typography>
      </Box>
      <Box className={classes.statBox}>
        <Typography variant="h6" className={classes.statValue}>
          {followers}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Followers
        </Typography>
      </Box>
      <Box className={classes.statBox}>
        <Typography variant="h6" className={classes.statValue}>
          {following}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Following
        </Typography>
      </Box>
    </Box>
  );
}
