import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from '@mui/material';
import { useGithubUserInfo, useGithubUserRepos } from './components/hooks';
import UserProfile from './components/ui/UserProfile';
import UserStats from './components/ui/UserStats';
import { UserRepos, UserReposTemplate } from './components/ui/UserRepos';
import { ReposLanguageChart, ReposLanguageChartTemplate } from './components/ui/ReposLanguageChart';
import { useStyles } from './styles';

export function Resume() {
  const { classes } = useStyles();
  const { username } = useParams();
  const { data, error } = useGithubUserInfo(username);
  const reposData = useGithubUserRepos(username);

  if (error) return <div>{`Error: ${error}`}</div>;
  if (!data) return null;

  return (
    <Container>
      <Card className={classes.root}>
        <UserProfile
          avatarUrl={data.avatar_url}
          bio={data.bio}
          blog={data.blog}
          company={data.company}
          email={data.email}
          location={data.location}
          login={data.login}
          name={data.name}
          twitterUsername={data.twitter_username}
        />
        <UserStats followers={data.followers} following={data.following} publicRepos={data.public_repos} />
        <UserRepos reposData={reposData} render={(repositories) => <UserReposTemplate repos={repositories} />} />
        <ReposLanguageChart reposData={reposData} render={(languages) => <ReposLanguageChartTemplate languages={languages} />}/>
      </Card>
    </Container>
  );
}
