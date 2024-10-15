import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  repoCard: {
    height: '100%',
  },
  repoName: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
