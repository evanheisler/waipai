import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textDecoration: 'none',
  },
  accountButton: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  bar: {
    backgroundColor: theme.palette.background.default,
  },
}));
