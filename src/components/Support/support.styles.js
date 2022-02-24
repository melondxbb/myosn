import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  support: {
    padding: 20,
    maxWidth: "80%",
    "@media (max-width: 768px)": {
      padding: "20px 0",
      maxWidth: "100%",
    },
  },
  infoBox: {
    marginBottom: 15,
  },
  infoContainer: {
    padding: 10,
  },
  infoHead: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    // padding: 10,

  },
  infoHeadTxt: {
    flex: 1,
    paddingLeft: 15,
  },
  subHead: {
    // paddingBottom: 8,
    color: "rgba(0, 0, 0, 0.4)",
  },
  divider: {
    width: "100%",
    margin: "10px 0",
  },
  infoItem: {
    padding: 15,
    width: "100%",
  },
  pointItem: {
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: "5px 15px",
    padding: 5,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.15)",
    },
  },
  pointTitle: {
    flex: 1,
    textTransform: "capitalize",
  },
  formControl: {
    width: "100%",
    marginBottom: 15,
  },
  checkIco: {
    color: "#8bc34a",
    display: "block",
  },
  crossIco: {
    color: "#ff0000",
    display: "block",
  },
  
}));