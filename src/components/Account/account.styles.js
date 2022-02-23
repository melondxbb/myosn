import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  account: {
    padding: 20,
    maxWidth: "80%",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
  logout: {
    "@media (min-width: 600px)": {
      display: "none",
    },
  },
  cta: {
    marginLeft: 5,
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
  },
  infoHeadTxt: {
    flex: 1,
    paddingLeft: 15,
  },
  divider: {
    width: "100%",
    margin: "10px 0",
  },
  infoItem: {
    padding: 15,
    width: "100%",
  },
  infoKey: {
    paddingBottom: 8,
    color: "rgba(0, 0, 0, 0.4)",
  },
  infoVal: {
    color: "#202020",
  },
  
}));