import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    marginTop:theme.spacing(4),
    padding: theme.spacing(4)
  },
}));
