import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const useStyles = makeStyles(theme => ({
  grid: {
    backgroundColor: grey[50],
    boxShadow: `5px -5px 5px ${grey[300]}`,
  },
  lastColumn: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderLeft: `1px solid ${grey[300]}`,
  },
}));
