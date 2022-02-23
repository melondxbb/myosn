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
  divider: {
    width: "100%",
    margin: "10px 0",
  },
  infoItem: {
    padding: 15,
    width: "100%",
  },
  formControl: {
    width: "100%",
    marginBottom: 15,
  },
  
}));