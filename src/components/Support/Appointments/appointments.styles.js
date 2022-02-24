import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  apMain: {
    padding: "0 16px",
  },
  apItem: {
    padding: "8px 15px",
    width: "100%",
  },
  apKey: {
    paddingBottom: 4,
    color: "rgba(0, 0, 0, 0.4)",
  },
  apVal: {
    color: "#202020",
    textTransform: "capitalize",
  },
  apYes: {
    color: "#8bc34a",
    textTransform: "capitalize",
  },
  apNo: {
    color: "#ff0000",
    textTransform: "capitalize",
  },
  
}));