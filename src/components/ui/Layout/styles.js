import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    overflowX: 'hidden',
  },
  main: {
    flex: '1',
    width: '100%',
    display: 'flex',
  },
  container: {
    maxWidth: 960,
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1248,
    },
  }
}));
