import React from 'react';
import { Typography, Box, Grid, Card, Link, CardContent } from '@mui/material';
import { useStyles } from './styles';

export function UserRepos({ reposData, render }) {
  const { data: repos, error } = reposData;
  if (error) return <div> {`No Repositories, error: ${error}`} </div>;
  if (!repos || repos.length === 0) return <Typography>No public repositories found.</Typography>;
  return render(repos);
}

export function UserReposTemplate({ repos }) {
  const { classes } = useStyles();

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Public Repositories
      </Typography>
      <Grid container spacing={2}>
        {repos.map((repo) => (
          <Grid item xs={12} sm={6} key={repo.id}>
            <Card variant="outlined" className={classes.repoCard}>
              <CardContent>
                <Typography variant="h6" className={classes.repoName}>
                  <Link href={repo.html_url} target="_blank" rel="noopener">
                    {repo.name}
                  </Link>
                </Typography>
                {repo.description && (
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {repo.description}
                  </Typography>
                )}
                <Box mt={1} display="flex" justifyContent="space-between">
                  <Typography variant="caption">Stars: {repo.stargazers_count}</Typography>
                  <Typography variant="caption">Forks: {repo.forks_count}</Typography>
                  <Typography variant="caption">Language: {repo.language || 'N/A'}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
