import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
  },
  main: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f5f5f5",
    paddingBottom: 50,
  },
  sideBar: {
    width: "100%",
    maxWidth: 240,
  },
  bottom: {
    boxShadow: "rgb(0 0 0 / 5%) 0px -9px 18px",
    backgroundColor: "#fff",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },

}));
