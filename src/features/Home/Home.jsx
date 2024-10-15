import React, { useState } from 'react';
import { Button, Card, Typography, Box, TextField, Container, FormHelperText } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useGetUserInfo } from './components/hooks/useGetGithubUserInfo';

export function Home() {
  const queryClient = useQueryClient();
  const { getUserInfo } = useGetUserInfo();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.target);
    const username = formData.get('username');

    if (!username) {
      setError('Please enter a GitHub username');
      return;
    }

    try {
      const data = await getUserInfo(username);
      queryClient.setQueryData(['user', username], data);
      navigate(`/${username}`);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <Container>
      <Card sx={{ marginTop: 8, padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h4" gutterBottom>
          GitHub Resume Builder
        </Typography>
        <Typography variant="h7" align="center" gutterBottom>
          Enter your GitHub username to generate a personalized resume based on your repositories and contributions.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
          <TextField label="GitHub Username" name="username" variant="outlined" fullWidth autoFocus error={!!error} onFocus={() => setError(null)} />
          {error && (
            <FormHelperText error sx={{ fontSize: '1.25rem' }}>
              {error}
            </FormHelperText>
          )}
          <Box>
            <Button type="submit" variant="contained" sx={{ mt: 2, fontSize: '1.25rem' }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
