import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerBox: {
    width: "100%",
    maxWidth: drawerWidth,
    
  },
  logoContainer: {
    width: "100%",
    minHeight: 140,
    display: "grid",
    placeContent: "center"
  },
  logo: {
    display: "block",
    width: "auto",
    height: 100,
    margin: "0 auto",
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  listItem: {
    "&.Mui-selected": {
      backgroundColor: "#ff0000",
      color: "#fff",
      "& .MuiListItemIcon-root": {
        color: "#fff",
      },
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#ff0000ab",
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));