import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    marginRight: theme.spacing(4),
  },
  info: {
    flex: 1,
  },
  highlight: {
    fontWeight: theme.typography.fontWeightBold,
  },
  iconText: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));
