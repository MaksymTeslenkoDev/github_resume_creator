import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.spacing(4),
  },
  statBox: {
    textAlign: 'center',
  },
  statValue: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
