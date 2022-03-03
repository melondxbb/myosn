import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  scan: {
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
  },
  infoHeadTxt: {
    flex: 1,
    paddingLeft: 15,
  },
  input: {
    display: "none",
  },
  
}));