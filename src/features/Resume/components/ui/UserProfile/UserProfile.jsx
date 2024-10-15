import React from 'react';
import { Avatar, Typography, Box, Link, Grid } from '@mui/material';
import { LocationOn, Business, Email, Language, Twitter } from '@mui/icons-material';
import { useStyles } from './styles';

export function UserProfile({ avatarUrl, name, login, bio, location, company, email, blog, twitterUsername }) {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Grid item xs={12} sm={3} mb={2}>
        <Avatar alt={name || login} src={avatarUrl} className={classes.avatar} />
      </Grid>
      <Grid item xs={12} sm={4} mb={2}>
        <Box className={classes.info}>
          <Typography variant="h4" gutterBottom className={classes.highlight}>
            {name || login}
          </Typography>
          {bio && (
            <Typography variant="body1" gutterBottom>
              {bio}
            </Typography>
          )}
          <Box mt={2}>
            {location && (
              <Typography variant="body2" color="textSecondary" className={classes.iconText}>
                <LocationOn fontSize="small" className={classes.icon} /> {location}
              </Typography>
            )}
            {company && (
              <Typography variant="body2" color="textSecondary" className={classes.iconText}>
                <Business fontSize="small" className={classes.icon} /> {company}
              </Typography>
            )}
            {email && (
              <Typography variant="body2" color="textSecondary" className={classes.iconText}>
                <Email fontSize="small" className={classes.icon} /> {email}
              </Typography>
            )}
            {blog && (
              <Typography variant="body2" color="textSecondary" className={classes.iconText}>
                <Language fontSize="small" className={classes.icon} />{' '}
                <Link href={blog.startsWith('http') ? blog : `https://${blog}`} target="_blank" rel="noopener">
                  {blog}
                </Link>
              </Typography>
            )}
            {twitterUsername && (
              <Typography variant="body2" color="textSecondary" className={classes.iconText}>
                <Twitter fontSize="small" className={classes.icon} />{' '}
                <Link href={`https://twitter.com/${twitterUsername}`} target="_blank" rel="noopener">
                  @{twitterUsername}
                </Link>
              </Typography>
            )}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
