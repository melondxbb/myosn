import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  account: {
    padding: 20,
    maxWidth: "80%",
    "@media (max-width: 768px)": {
      padding: "20px 0",
      maxWidth: "100%",
    },
  },
  logout: {
    "@media (min-width: 600px)": {
      display: "none",
    },
  },
  scan: {
    marginBottom: 10
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
    padding: "8px 0",
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
  optItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardBox: {
    padding: "0 15px",
    width: "100%",
  },
  cardLogo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  cardItem: {
    display: "flex",
    alignItems: "center",
  },
  cardEnd: {
    flex: 1,
    marginLeft: 5,
    fontWeight: "bold",
  },
  
}));