import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';
import { useStyles } from './style';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#d0ed57', '#a4de6c', '#8dd1e1', '#83a6ed', '#8e8d8a'];

export function ReposLanguageChart({ reposData, render }) {
  const { data: repos, error } = reposData;
  if (error) return <div> {`Cant't drow Languages chart, error: ${error}`} </div>;
  if (!repos || repos.length === 0) return <Typography>No public repositories found.</Typography>;
  const languageData = repos.reduce((prev, repo) => {
    if (repo.language) {
      prev[repo.language] = (prev[repo.language] || 0) + 1;
    }
    return prev;
  }, {});

  const total = Object.values(languageData).reduce((sum, count) => sum + count, 0);

  const data = Object.entries(languageData).map(([language, count]) => ({
    name: language,
    value: Number(((count / total) * 100).toFixed(2)),
  }));

  return render(data);
}

export function ReposLanguageChartTemplate({ languages }) {
  const { classes } = useStyles();
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Languages Used in Public Repositories
      </Typography>
      <Box className={classes.chartContainer}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={languages} cx="50%" cy="50%" outerRadius={150} label={({ name, value }) => `${name}: ${value}%`}>
              {languages.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
