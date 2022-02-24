import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bills: {
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
  lineRoot: {
    height: 10,
    borderRadius: 5,
  },
  bar: {
    borderRadius: 5,
  },
  dateContainer: {
    width: "100%",
  },
  dateBox: {
    paddingTop: 16,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
  },
  resultNA: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  subHead: {
    display: "flex",
    padding: 20,
  },
  subHeadTxt: {
    flex: 1,
  },
  subHeadNum: {
    marginLeft: 14,
  },

  
}));